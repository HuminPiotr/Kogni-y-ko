import { Decision } from "@/lib/mockData";

type DecisionCardProps = {
  decision: Decision;
  index: number;
  disabled: boolean;
  onSelect: (decision: Decision) => void;
};

export function DecisionCard({ decision, index, disabled, onSelect }: DecisionCardProps) {
  const letter = String(index + 1);

  return (
    <button
      onClick={() => !disabled && onSelect(decision)}
      disabled={disabled}
      className={`w-full text-left transition-all duration-200 group ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div
        className={`relative border-2 overflow-hidden transition-all duration-200 ${
          decision.isSubstance
            ? "border-orange-600 hover:border-orange-400"
            : "border-zinc-700 hover:border-[#5568af]"
        } ${!disabled && "hover:scale-[1.01] active:scale-[0.99]"}`}
        style={{ borderRadius: "4px" }}
      >
        {/* Police tape top bar for substance decisions */}
        {decision.isSubstance && (
          <div className="police-tape h-2 w-full" />
        )}

        <div
          className={`flex items-start gap-3 px-4 py-3.5 ${
            decision.isSubstance ? "bg-orange-950/30" : "bg-zinc-900"
          } ${!disabled && (decision.isSubstance ? "group-hover:bg-orange-950/50" : "group-hover:bg-zinc-800/80")}`}
        >
          {/* Letter badge */}
          <span
            className={`shrink-0 w-7 h-7 flex items-center justify-center text-sm font-retro border mt-0.5 ${
              decision.isSubstance
                ? "border-orange-600 text-orange-400"
                : "border-zinc-600 text-zinc-400"
            }`}
            style={{ borderRadius: "2px" }}
          >
            {letter}
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2">
              {decision.isSubstance && (
                <span className="text-orange-400 text-sm mt-0.5 shrink-0">⚠️</span>
              )}
              <span
                className={`text-sm leading-snug ${
                  decision.isSubstance ? "text-orange-200" : "text-gray-200"
                }`}
              >
                {decision.text}
              </span>
            </div>

            {decision.isSubstance && (
              <span className="text-[10px] font-mono-custom text-orange-500 uppercase tracking-widest mt-1 block">
                SUBSTANCJA PSYCHOAKTYWNA
              </span>
            )}
          </div>

          {/* Arrow */}
          {!disabled && (
            <span className="shrink-0 text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm mt-0.5">
              ›
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
