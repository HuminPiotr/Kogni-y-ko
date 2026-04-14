"use client";

import { useState, useCallback } from "react";
import { events, criticalDeathEvent, Decision, StatKey, GameEvent } from "@/lib/mockData";

export type Big5 = Record<StatKey, number>;

export type Player = {
  age: number;
  big5: Big5;
  tags: string[];
  flags: string[];
  substances: Record<string, number>;
};

export type GameView = "game" | "flip" | "gameover" | "patient-file";

export type GameOverReason = {
  stat: string;
  value: number;
  structure: string;
  description: string;
};

export type TensionZone = "green" | "yellow" | "red";

const INITIAL_PLAYER: Player = {
  age: 1,
  big5: { n: 62, e: 34, o: 55, a: 65, c: 24 },
  tags: ["bobas", "miasto", "neurotyk"],
  flags: [],
  substances: { alkohol: 0, nikotyna: 0 },
};

export function calcTensionScore(big5: Big5): number {
  return Object.values(big5).reduce((sum, v) => sum + Math.abs(v - 50), 0);
}

export function getTensionZone(score: number): TensionZone {
  if (score <= 80) return "green";
  if (score <= 120) return "yellow";
  return "red";
}

function pickNextEvent(
  player: Player,
  usedIds: string[],
  allEvents: GameEvent[]
): GameEvent | null {
  const agePool = allEvents.filter(
    (e) => player.age >= e.ageRange[0] && player.age <= e.ageRange[1]
  );

  const available = agePool.filter(
    (e) =>
      !usedIds.includes(e.id) &&
      (!e.requiresFlag || player.flags.includes(e.requiresFlag))
  );

  const priority = available.filter((e) => !!e.requiresFlag);
  const regular = available.filter((e) => !e.requiresFlag);
  const pool = priority.length > 0 ? priority : regular;

  if (pool.length === 0) {
    // All age-appropriate events exhausted — reset and pick fresh
    const fresh = agePool.filter(
      (e) => !e.requiresFlag || player.flags.includes(e.requiresFlag)
    );
    if (fresh.length === 0) return null;
    return fresh[Math.floor(Math.random() * fresh.length)];
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

export function useGameState() {
  const [player, setPlayer] = useState<Player>(INITIAL_PLAYER);
  const [currentEventId, setCurrentEventId] = useState<string | null>(
    () => pickNextEvent(INITIAL_PLAYER, [], events)?.id ?? null
  );
  const [usedEventIds, setUsedEventIds] = useState<string[]>([]);
  const [view, setView] = useState<GameView>("game");
  const [pendingDecision, setPendingDecision] = useState<Decision | null>(null);
  const [gameOverReason, setGameOverReason] = useState<GameOverReason | null>(null);
  const [survivalAge, setSurvivalAge] = useState<number>(1);
  const [crisisActive, setCrisisActive] = useState(false);

  const tensionScore = calcTensionScore(player.big5);
  const tensionZone = getTensionZone(tensionScore);

  const currentEvent = crisisActive
    ? criticalDeathEvent
    : events.find((e) => e.id === currentEventId) ?? null;

  const handleDecision = useCallback((decision: Decision) => {
    setPendingDecision(decision);
    setView("flip");
  }, []);

  const confirmDecision = useCallback(() => {
    if (!pendingDecision) return;

    // Crisis event — special outcomes
    if (crisisActive) {
      if (pendingDecision.isGameOver) {
        setSurvivalAge(player.age);
        setGameOverReason({
          stat: "Przeciążenie Systemu",
          value: calcTensionScore(player.big5),
          structure: "Jądro Ogoniaste",
          description:
            "Zignorowałeś sygnały z Wyspy. Jądro Ogoniaste chciało szybkiej nagrody, ale system nie wytrzymał obciążenia allostatycznego.",
        });
        setPendingDecision(null);
        setView("gameover");
        return;
      }

      if (pendingDecision.resetStatsToNeutral) {
        // Hospital resets all stats toward 50, costs one extra year
        const resetPlayer: Player = {
          ...player,
          age: player.age + 2,
          big5: { n: 50, e: 50, o: 50, a: 50, c: 50 },
        };
        const nextEvent = pickNextEvent(resetPlayer, usedEventIds, events);
        setPlayer(resetPlayer);
        setCurrentEventId(nextEvent?.id ?? null);
        setCrisisActive(false);
        setPendingDecision(null);
        setView("game");
        return;
      }
    }

    // Normal decision: compute new stats synchronously
    const updatedBig5: Big5 = { ...player.big5 };
    for (const [key, value] of Object.entries(pendingDecision.statImpact)) {
      const stat = key as StatKey;
      updatedBig5[stat] = Math.min(100, Math.max(0, updatedBig5[stat] + (value ?? 0)));
    }
    const newAge = player.age + 1;

    // Apply flags from decision
    const newFlags = [...player.flags];
    if (pendingDecision.flagsAdd) {
      for (const flag of pendingDecision.flagsAdd) {
        if (!newFlags.includes(flag)) newFlags.push(flag);
      }
    }

    const newPlayer: Player = { ...player, age: newAge, big5: updatedBig5, flags: newFlags };
    const newUsedIds = currentEventId ? [...usedEventIds, currentEventId] : usedEventIds;

    setPlayer(newPlayer);
    setPendingDecision(null);

    // Trigger crisis on next turn if tension is critical
    if (getTensionZone(calcTensionScore(updatedBig5)) === "red") {
      setCrisisActive(true);
      setUsedEventIds(newUsedIds);
    } else {
      const nextEvent = pickNextEvent(newPlayer, newUsedIds, events);
      setUsedEventIds(newUsedIds);
      setCurrentEventId(nextEvent?.id ?? null);
    }

    setView("game");
  }, [pendingDecision, player, crisisActive, currentEventId, usedEventIds]);

  const openPatientFile = useCallback(() => setView("patient-file"), []);
  const closePatientFile = useCallback(() => setView("game"), []);

  const resetGame = useCallback(() => {
    const initialEvent = pickNextEvent(INITIAL_PLAYER, [], events);
    setPlayer(INITIAL_PLAYER);
    setCurrentEventId(initialEvent?.id ?? null);
    setUsedEventIds([]);
    setPendingDecision(null);
    setGameOverReason(null);
    setSurvivalAge(1);
    setCrisisActive(false);
    setView("game");
  }, []);

  return {
    player,
    currentEvent,
    pendingDecision,
    view,
    gameOverReason,
    survivalAge,
    tensionScore,
    tensionZone,
    crisisActive,
    handleDecision,
    confirmDecision,
    openPatientFile,
    closePatientFile,
    resetGame,
  };
}
