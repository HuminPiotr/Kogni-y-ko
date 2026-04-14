"use client";

import { useState } from "react";
import { events, Decision, StatKey } from "@/lib/mockData";

type Big5 = Record<StatKey, number>;

export type Player = {
  age: number;
  big5: Big5;
};

export function useGameState() {
  const [player, setPlayer] = useState<Player>({
    age: 0,
    big5: { n: 50, e: 50, o: 50, a: 50, c: 50 },
  });
  const [eventIndex, setEventIndex] = useState(0);
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(
    null,
  );

  const currentEvent = events[eventIndex] ?? null;
  const isGameOver = eventIndex >= events.length;

  function handleDecision(decision: Decision) {
    setSelectedDecision(decision);
  }

  function nextTurn() {
    if (!selectedDecision) return;

    setPlayer((prev) => {
      const newBig5 = { ...prev.big5 };
      for (const [key, value] of Object.entries(selectedDecision.statImpact)) {
        const stat = key as StatKey;
        newBig5[stat] = Math.min(
          100,
          Math.max(0, newBig5[stat] + (value ?? 0)),
        );
      }
      return { age: prev.age + 1, big5: newBig5 };
    });

    setSelectedDecision(null);
    setEventIndex((prev) => prev + 1);
  }

  return {
    player,
    currentEvent,
    selectedDecision,
    isGameOver,
    handleDecision,
    nextTurn,
  };
}
