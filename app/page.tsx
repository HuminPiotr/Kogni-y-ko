"use client";

import { useEffect } from "react";
import { useGameState } from "@/hooks/useGameState";
import { StatBar } from "@/components/StatBar";
import { ChatBubble } from "@/components/ChatBubble";
import { DecisionCard } from "@/components/DecisionCard";
import { FlipModal } from "@/components/FlipModal";
import { PatientFile } from "@/components/PatientFile";
import { GameOver } from "@/components/GameOver";
import { TensionBar } from "@/components/TensionBar";

const STAT_META = [
  { key: "n" as const, shortLabel: "N", fullLabel: "Neurotyczność" },
  { key: "e" as const, shortLabel: "E", fullLabel: "Ekstrawersja" },
  { key: "o" as const, shortLabel: "O", fullLabel: "Otwartość" },
  { key: "a" as const, shortLabel: "U", fullLabel: "Ugodowość" },
  { key: "c" as const, shortLabel: "S", fullLabel: "Sumienność" },
];

export default function Home() {
  const {
    player,
    currentEvent,
    pendingDecision,
    view,
    gameOverReason,
    survivalAge,
    tensionScore,
    tensionZone,
    handleDecision,
    confirmDecision,
    openPatientFile,
    closePatientFile,
    resetGame,
  } = useGameState();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.repeat) return;
      if (view === "flip") {
        if (e.key === "Enter" || e.key === " ") confirmDecision();
        return;
      }
      if (view === "game" && currentEvent) {
        const idx = parseInt(e.key) - 1;
        if (idx >= 0 && idx < currentEvent.decisions.length) {
          handleDecision(currentEvent.decisions[idx]);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view, currentEvent, handleDecision, confirmDecision]);

  return (
    <div className="h-full flex flex-col crt-overlay animate-crt" style={{ background: "#09090b" }}>
      {/* ─── TOP HUD ─── */}
      <header
        className="shrink-0 px-4 pt-3 pb-2 flex items-center justify-between gap-3"
        style={{
          background: "linear-gradient(180deg, #0d0d10 0%, #09090b 100%)",
          borderBottom: "1px solid #5568af44",
        }}
      >
        {/* Left: Patient file button */}
        <button
          onClick={openPatientFile}
          className="flex items-center gap-2 px-3 py-2 border border-zinc-700 text-zinc-400 hover:text-[#ceeaee] hover:border-[#5568af] transition-all duration-200 font-mono-custom text-xs uppercase tracking-wider"
          style={{ borderRadius: "3px", background: "#0d0d10" }}
        >
          <span className="text-sm">📂</span>
          <span className="hidden sm:inline">Akta Pacjenta</span>
        </button>

        {/* Center: Logo */}
        <div className="text-center">
          <span
            className="font-retro text-[#cdd629] leading-none"
            style={{ fontSize: "1.5rem", textShadow: "0 0 20px rgba(205, 214, 41, 0.4)" }}
          >
            NEUROGAME
          </span>
        </div>

        {/* Right: Age */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest">
            Wiek
          </span>
          <span
            className="font-retro text-3xl leading-none text-gray-200"
            style={{ textShadow: "0 0 10px rgba(206, 234, 238, 0.3)" }}
          >
            {player.age}
          </span>
        </div>
      </header>

      {/* ─── STATS BAR ─── */}
      <div
        className="shrink-0 flex flex-col"
        style={{ borderBottom: "1px solid #1f1f23" }}
      >
        <div className="px-4 py-3 flex justify-center gap-4">
          {STAT_META.map(({ key, shortLabel, fullLabel }) => (
            <StatBar
              key={key}
              label={shortLabel}
              fullLabel={fullLabel}
              value={player.big5[key]}
            />
          ))}
        </div>
        <TensionBar score={tensionScore} zone={tensionZone} />
      </div>

      {/* ─── SCENE (scrollable) ─── */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-5">
        {currentEvent ? (
          <div className="max-w-xl mx-auto space-y-5">
            {/* Event counter */}
            <div className="flex items-center gap-2">
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(90deg, #5568af44, transparent)" }}
              />
              <span className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest">
                {player.age} rok życia
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(270deg, #5568af44, transparent)" }}
              />
            </div>

            {/* Scene text */}
            <div
              className="p-5 border border-zinc-800 bg-zinc-900/40"
              style={{ borderRadius: "4px" }}
            >
              <p className="text-base sm:text-lg leading-relaxed text-gray-100 font-sans">
                {currentEvent.sceneText}
              </p>
            </div>

            {/* Voice bubbles */}
            <div className="space-y-3">
              {currentEvent.voices.map((voice, i) => (
                <ChatBubble
                  key={i}
                  structure={voice.structure}
                  text={voice.text}
                  align={i % 2 === 0 ? "left" : "right"}
                  index={i}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-3 p-8">
              <p className="font-retro text-3xl text-[#cdd629]">Koniec Danych</p>
              <p className="text-sm text-zinc-500 font-mono-custom">
                Wszystkie scenariusze przetworzone.
              </p>
              <button
                onClick={resetGame}
                className="mt-4 px-6 py-3 font-retro text-xl text-zinc-950 uppercase"
                style={{ background: "#cdd629", borderRadius: "4px" }}
              >
                SYMULUJ PONOWNIE
              </button>
            </div>
          </div>
        )}
      </main>

      {/* ─── DECISION BAR (anchored bottom) ─── */}
      {currentEvent && (
        <footer
          className="shrink-0 max-h-[55vh] overflow-y-auto px-4 sm:px-6 pb-4 pt-3"
          style={{
            borderTop: "1px solid #5568af33",
            background: "linear-gradient(180deg, #09090b 0%, #0d0d10 100%)",
          }}
        >
          <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest">
                ▶ Co robisz?
              </span>
            </div>
            <div className="space-y-2.5">
              {currentEvent.decisions.map((decision, i) => (
                <DecisionCard
                  key={decision.id}
                  decision={decision}
                  index={i}
                  disabled={view === "flip"}
                  onSelect={handleDecision}
                />
              ))}
            </div>
          </div>
        </footer>
      )}

      {/* ─── OVERLAYS ─── */}

      {/* Flip modal */}
      {view === "flip" && pendingDecision && (
        <FlipModal decision={pendingDecision} onConfirm={confirmDecision} />
      )}

      {/* Patient file drawer */}
      {view === "patient-file" && (
        <PatientFile player={player} onClose={closePatientFile} />
      )}

      {/* Game over */}
      {view === "gameover" && gameOverReason && (
        <GameOver
          player={player}
          survivalAge={survivalAge}
          reason={gameOverReason}
          onReset={resetGame}
        />
      )}
    </div>
  );
}
