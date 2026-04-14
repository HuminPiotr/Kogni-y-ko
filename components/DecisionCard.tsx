import { Decision } from '@/lib/mockData';

type DecisionCardProps = {
  decision: Decision;
  isSelected: boolean;
  isOtherSelected: boolean;
  onSelect: (decision: Decision) => void;
};

export function DecisionCard({
  decision,
  isSelected,
  isOtherSelected,
  onSelect,
}: DecisionCardProps) {
  return (
    <div
      className={`rounded-xl border overflow-hidden transition-all duration-300 ${
        isSelected
          ? 'border-indigo-500'
          : isOtherSelected
          ? 'border-zinc-800 opacity-30'
          : 'border-zinc-700 hover:border-zinc-500'
      }`}
    >
      <button
        onClick={() => !isSelected && !isOtherSelected && onSelect(decision)}
        disabled={isSelected || isOtherSelected}
        className={`w-full text-left px-5 py-4 text-sm font-medium transition-colors ${
          isSelected
            ? 'bg-indigo-600 text-white cursor-default'
            : 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
        }`}
      >
        {decision.text}
      </button>

      {isSelected && (
        <div className="px-5 py-4 bg-zinc-900 border-t border-zinc-700 space-y-2">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
            {decision.hiddenStructure}
          </p>
          <p className="text-sm text-zinc-300 leading-relaxed">{decision.flavorReveal}</p>
          <div className="flex gap-3 pt-1">
            {Object.entries(decision.statImpact).map(([key, val]) => (
              <span
                key={key}
                className={`text-xs font-mono font-semibold ${
                  (val ?? 0) > 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {key.toUpperCase()} {(val ?? 0) > 0 ? '+' : ''}
                {val}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
