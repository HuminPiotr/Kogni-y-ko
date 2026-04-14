import { TensionZone } from "@/hooks/useGameState";

type TensionBarProps = {
  score: number;
  zone: TensionZone;
};

const MAX_TENSION = 250; // 5 stats × max deviation 50

const ZONE_CONFIG = {
  green: {
    fill: "#22c55e",
    label: "Bezpiecznie",
    labelColor: "text-green-400",
    borderColor: "border-zinc-700",
    glow: "none",
  },
  yellow: {
    fill: "#f37826",
    label: "Ostrzeżenie",
    labelColor: "text-orange-400",
    borderColor: "border-orange-800",
    glow: "0 0 8px rgba(243, 120, 38, 0.4)",
  },
  red: {
    fill: "#ec1763",
    label: "KRYZYS",
    labelColor: "text-red-400 animate-pulse",
    borderColor: "border-red-800",
    glow: "0 0 12px rgba(236, 23, 99, 0.5)",
  },
} as const;

export function TensionBar({ score, zone }: TensionBarProps) {
  const cfg = ZONE_CONFIG[zone];
  const pct = Math.min(100, (score / MAX_TENSION) * 100);

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-2 space-y-1">
      {/* Label row */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest">
          Napięcie Systemu
        </span>
        <span className={`text-[10px] font-mono-custom font-bold uppercase tracking-widest ${cfg.labelColor}`}>
          {cfg.label} · {score}
        </span>
      </div>

      {/* Bar */}
      <div
        className={`h-1.5 bg-zinc-800 border overflow-hidden ${cfg.borderColor}`}
        style={{ borderRadius: "2px" }}
      >
        <div
          className="h-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: cfg.fill,
            boxShadow: cfg.glow,
          }}
        />
      </div>

      {/* Wyspa warning — visible in yellow and red zones */}
      {zone !== "green" && (
        <p
          className={`text-[11px] font-mono-custom leading-snug ${
            zone === "red" ? "text-red-400 animate-pulse" : "text-orange-400"
          }`}
        >
          {zone === "red"
            ? "🔥 Wyspa: SYSTEM KRYTYCZNY. Organela-na-krawędzi. Natychmiastowa interwencja wymagana."
            : "⚠️ Wyspa: Ostrzeżenie! Żołądek mnie boli od tych skrajnych decyzji..."}
        </p>
      )}
    </div>
  );
}
