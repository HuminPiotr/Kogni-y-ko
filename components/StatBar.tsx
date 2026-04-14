type StatBarProps = {
  label: string;
  fullLabel: string;
  value: number;
};

const STAT_COLORS: Record<string, { normal: string; fill: string }> = {
  N: { normal: "text-pink-400", fill: "bg-pink-500" },
  E: { normal: "text-orange-400", fill: "bg-orange-500" },
  O: { normal: "text-cyan-400", fill: "bg-cyan-500" },
  U: { normal: "text-lime-400", fill: "bg-lime-500" },
  S: { normal: "text-indigo-400", fill: "bg-indigo-500" },
};

export function StatBar({ label, fullLabel, value }: StatBarProps) {
  const isCritical = value > 80 || value < 20;
  const colors = STAT_COLORS[label] ?? { normal: "text-gray-400", fill: "bg-gray-500" };

  return (
    <div
      className="flex flex-col items-center gap-1 min-w-[44px]"
      title={`${fullLabel}: ${value}`}
    >
      <span
        className={`text-[10px] font-bold uppercase tracking-widest font-mono-custom ${
          isCritical ? "text-red-400 animate-pulse" : "text-zinc-500"
        }`}
      >
        {label}
      </span>

      <div
        className={`relative w-8 h-[60px] bg-zinc-800 border ${
          isCritical ? "border-red-500 stat-critical" : "border-zinc-700"
        } overflow-hidden`}
        style={{ borderRadius: "2px" }}
      >
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-700 ${
            isCritical ? "bg-red-500 animate-pulse" : colors.fill
          }`}
          style={{ height: `${value}%` }}
        />
        {/* Tick marks */}
        <div className="absolute inset-0 flex flex-col justify-between py-[3px] pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2 h-px bg-zinc-600 opacity-50 mx-auto" />
          ))}
        </div>
      </div>

      <span
        className={`text-[11px] font-retro leading-none ${
          isCritical ? "text-red-400 animate-pulse" : colors.normal
        }`}
      >
        {value}
      </span>
    </div>
  );
}
