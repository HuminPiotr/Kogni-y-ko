type StatBarProps = {
  label: string;
  value: number;
};

export function StatBar({ label, value }: StatBarProps) {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[48px]">
      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
        {label}
      </span>
      <div className="w-10 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs font-mono text-zinc-300">{value}</span>
    </div>
  );
}
