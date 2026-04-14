"use client";

import { Decision } from "@/lib/mockData";

type FlipModalProps = {
  decision: Decision;
  onConfirm: () => void;
};

const STRUCTURE_STYLES: Record<
  string,
  { emoji: string; color: string; glow: string; bg: string }
> = {
  "Hipokamp": { emoji: "🐎", color: "text-blue-400", glow: "shadow-blue-500/30", bg: "from-blue-950/80" },
  "Jądro Ogoniaste": { emoji: "🌀", color: "text-orange-400", glow: "shadow-orange-500/30", bg: "from-orange-950/80" },
  "Ciało Migdałowate": { emoji: "🔥", color: "text-red-400", glow: "shadow-red-500/40", bg: "from-red-950/80" },
  "Kora Przedczołowa": { emoji: "🧠", color: "text-cyan-300", glow: "shadow-cyan-500/30", bg: "from-cyan-950/80" },
  "Wyspa": { emoji: "🌊", color: "text-lime-400", glow: "shadow-lime-500/30", bg: "from-lime-950/70" },
  "Wyspa (Insula)": { emoji: "🌊", color: "text-lime-400", glow: "shadow-lime-500/30", bg: "from-lime-950/70" },
  "Wzgórze": { emoji: "📡", color: "text-indigo-400", glow: "shadow-indigo-500/30", bg: "from-indigo-950/80" },
};

const DEFAULT_STYLE = { emoji: "⚡", color: "text-pink-300", glow: "shadow-pink-500/30", bg: "from-zinc-900/80" };

export function FlipModal({ decision, onConfirm }: FlipModalProps) {
  const style = STRUCTURE_STYLES[decision.hiddenStructure] ?? DEFAULT_STYLE;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred backdrop */}
      <div
        className="absolute inset-0 bg-zinc-950/85 backdrop-blur-sm"
        onClick={onConfirm}
      />

      {/* Flip card */}
      <div className="relative z-10 w-full max-w-md animate-flip-in">
        <div
          className={`border-2 overflow-hidden shadow-2xl ${style.glow} bg-gradient-to-b ${style.bg} to-zinc-950`}
          style={{
            borderColor: "var(--color-brand-blue)",
            borderRadius: "6px",
            boxShadow: "0 0 40px rgba(85, 104, 175, 0.25), 0 25px 50px rgba(0,0,0,0.8)",
          }}
        >
          {/* Header bar */}
          <div
            className="px-5 py-2 flex items-center justify-between"
            style={{ background: "rgba(85, 104, 175, 0.2)", borderBottom: "1px solid rgba(85, 104, 175, 0.3)" }}
          >
            <span className="text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest">
              // ANALIZA DECYZJI
            </span>
            <span className="text-[10px] font-mono-custom text-zinc-600">
              NEUROGAME v2.1
            </span>
          </div>

          {/* Brain structure reveal */}
          <div className="px-6 pt-6 pb-4 text-center">
            <div className="text-5xl mb-3">{style.emoji}</div>
            <div className="text-[10px] font-mono-custom text-zinc-500 uppercase tracking-[0.3em] mb-1">
              Decyzję podjęło:
            </div>
            <h2
              className={`font-retro leading-none mb-2 ${style.color}`}
              style={{ fontSize: "clamp(1.8rem, 6vw, 2.5rem)" }}
            >
              {decision.hiddenStructure}
            </h2>
          </div>

          {/* Stat changes */}
          {Object.keys(decision.statImpact).length > 0 && (
            <div className="px-6 pb-4 flex justify-center gap-3 flex-wrap">
              {Object.entries(decision.statImpact).map(([key, val]) => {
                const isPositive = (val ?? 0) > 0;
                const statLabels: Record<string, string> = {
                  n: "NEURO", e: "EKSTRA", o: "OTWART", a: "UGODO", c: "SUMIEN"
                };
                return (
                  <div
                    key={key}
                    className={`px-3 py-1.5 border text-xs font-mono-custom font-bold ${
                      isPositive
                        ? "border-lime-700 text-lime-400 bg-lime-950/40"
                        : "border-red-800 text-red-400 bg-red-950/40"
                    }`}
                    style={{ borderRadius: "3px" }}
                  >
                    {statLabels[key] ?? key.toUpperCase()}{" "}
                    <span className="text-sm">
                      {isPositive ? "+" : ""}{val}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Divider */}
          <div className="mx-6 border-t border-zinc-800" />

          {/* Research note */}
          <div className="mx-6 my-4 p-4 bg-zinc-900/60 border border-zinc-700" style={{ borderRadius: "4px" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">🔬</span>
              <span className="text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest">
                NOTATKA BADAWCZA
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {decision.flavorReveal}
            </p>
          </div>

          {/* CTA Button */}
          <div className="px-6 pb-6">
            <button
              onClick={onConfirm}
              className="w-full py-4 font-retro text-xl text-zinc-950 transition-all duration-150 hover:opacity-90 active:scale-[0.98] uppercase tracking-wider"
              style={{
                background: "linear-gradient(135deg, #cdd629, #f37826)",
                borderRadius: "4px",
                boxShadow: "0 4px 20px rgba(205, 214, 41, 0.3)",
              }}
            >
              POJĘŁEM / KOLEJNY ROK →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
