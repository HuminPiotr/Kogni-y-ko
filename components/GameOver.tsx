"use client";

import { GameOverReason, Player } from "@/hooks/useGameState";

type GameOverProps = {
  player: Player;
  survivalAge: number;
  reason: GameOverReason;
  onReset: () => void;
};

export function GameOver({ player, survivalAge, reason, onReset }: GameOverProps) {
  const yearsLived = survivalAge - 16;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 overflow-y-auto"
      style={{
        background: "radial-gradient(ellipse at center, #1a0000 0%, #0a0000 50%, #000000 100%)",
      }}
    >
      {/* CRT scanlines */}
      <div className="crt-overlay" />

      {/* Top alert bar */}
      <div
        className="absolute top-0 left-0 right-0 py-2 px-4 text-center"
        style={{ background: "#ec1763", borderBottom: "2px solid #7f0000" }}
      >
        <span className="font-mono-custom text-xs font-bold text-white uppercase tracking-[0.3em]">
          ⚠ KRYTYCZNY BŁĄD SYSTEMU — PROTOKÓŁ AUTOPSJI AKTYWNY ⚠
        </span>
      </div>

      <div className="w-full max-w-lg text-center mt-12">
        {/* Main failure text */}
        <div className="mb-8">
          <h1
            className="font-retro animate-blink-red leading-none mb-2"
            style={{ fontSize: "clamp(2.5rem, 10vw, 4.5rem)" }}
          >
            SYSTEM FAILURE
          </h1>
          <div className="font-retro text-2xl text-red-900">
            — MÓZG ZATRZYMANY —
          </div>
        </div>

        {/* Flatline indicator */}
        <div className="mx-auto mb-8 relative h-10 overflow-hidden max-w-xs">
          <svg viewBox="0 0 300 40" className="w-full h-full" style={{ filter: "drop-shadow(0 0 4px #ef4444)" }}>
            <polyline
              points="0,20 60,20 70,5 80,35 90,20 300,20"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Autopsy panel */}
        <div
          className="border-2 border-red-900 overflow-hidden mb-6 text-left"
          style={{ borderRadius: "4px", background: "rgba(0,0,0,0.8)" }}
        >
          {/* Header */}
          <div
            className="px-5 py-3 flex items-center gap-2"
            style={{ background: "#1a0000", borderBottom: "1px solid #7f000044" }}
          >
            <span className="text-sm">🔬</span>
            <span className="text-[10px] font-mono-custom text-red-800 uppercase tracking-widest">
              PROTOKÓŁ AUTOPSJI — DANE KOŃCOWE
            </span>
          </div>

          <div className="px-5 py-5 space-y-4">
            {/* Survival stats */}
            <div className="flex gap-4">
              <div className="flex-1 p-3 border border-red-950 bg-red-950/20" style={{ borderRadius: "3px" }}>
                <div className="text-[10px] font-mono-custom text-zinc-600 uppercase mb-1">Wiek w chwili zgonu</div>
                <div className="font-retro text-3xl text-red-400">{survivalAge}</div>
              </div>
              <div className="flex-1 p-3 border border-red-950 bg-red-950/20" style={{ borderRadius: "3px" }}>
                <div className="text-[10px] font-mono-custom text-zinc-600 uppercase mb-1">Przetrwano</div>
                <div className="font-retro text-3xl text-red-400">{yearsLived} lat</div>
              </div>
            </div>

            {/* Cause of death */}
            <div className="p-4 border border-red-900/50 bg-red-950/10" style={{ borderRadius: "3px" }}>
              <div className="text-[10px] font-mono-custom text-red-800 uppercase tracking-widest mb-2">
                Przyczyna Zgonu
              </div>
              <div className="flex items-start gap-2 mb-2">
                <span className="text-base shrink-0">💥</span>
                <div>
                  <span className="text-sm font-bold text-red-400">{reason.structure}</span>
                  <span className="text-xs text-zinc-500 ml-2 font-mono-custom">
                    {reason.stat}: {reason.value}
                  </span>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{reason.description}</p>
            </div>

            {/* Final stats */}
            <div>
              <div className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-2">
                Parametry Końcowe
              </div>
              <div className="flex gap-2 flex-wrap">
                {[
                  { label: "N", value: player.big5.n, color: "#ec1763" },
                  { label: "E", value: player.big5.e, color: "#f37826" },
                  { label: "O", value: player.big5.o, color: "#ceeaee" },
                  { label: "U", value: player.big5.a, color: "#cdd629" },
                  { label: "S", value: player.big5.c, color: "#5568af" },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="px-2 py-1 border border-zinc-800 text-center min-w-[44px]"
                    style={{ borderRadius: "3px", background: "#0a0a0a" }}
                  >
                    <div className="text-[9px] font-mono-custom text-zinc-600 uppercase mb-0.5">
                      {label}
                    </div>
                    <div className="font-retro text-base" style={{ color }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reset button */}
        <button
          onClick={onReset}
          className="w-full py-4 font-retro text-xl uppercase tracking-wider transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #ec1763, #5568af)",
            borderRadius: "4px",
            boxShadow: "0 4px 30px rgba(236, 23, 99, 0.4)",
            color: "#fff",
          }}
        >
          WYCZYŚĆ LOGI / SYMULUJ PONOWNIE ↺
        </button>

        <p className="text-[10px] font-mono-custom text-zinc-700 mt-4 uppercase tracking-widest">
          NEUROGAME v2.1 // DANE ZOSTAŁY ZACHOWANE
        </p>
      </div>
    </div>
  );
}
