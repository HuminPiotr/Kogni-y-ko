type ChatBubbleProps = {
  structure: string;
  text: string;
  align?: "left" | "right";
  index?: number;
};

const STRUCTURE_STYLES: Record<
  string,
  { emoji: string; labelColor: string; bubbleBg: string; borderColor: string }
> = {
  "Hipokamp": {
    emoji: "🐎",
    labelColor: "text-blue-400",
    bubbleBg: "bg-blue-950/60",
    borderColor: "border-blue-800",
  },
  "Jądro Ogoniaste": {
    emoji: "🌀",
    labelColor: "text-orange-400",
    bubbleBg: "bg-orange-950/60",
    borderColor: "border-orange-800",
  },
  "Ciało Migdałowate": {
    emoji: "🔥",
    labelColor: "text-red-400",
    bubbleBg: "bg-red-950/60",
    borderColor: "border-red-900",
  },
  "Kora Przedczołowa": {
    emoji: "🧠",
    labelColor: "text-cyan-300",
    bubbleBg: "bg-cyan-950/60",
    borderColor: "border-cyan-800",
  },
  "Wyspa": {
    emoji: "🌊",
    labelColor: "text-lime-400",
    bubbleBg: "bg-lime-950/50",
    borderColor: "border-lime-800",
  },
  "Wyspa (Insula)": {
    emoji: "🌊",
    labelColor: "text-lime-400",
    bubbleBg: "bg-lime-950/50",
    borderColor: "border-lime-800",
  },
  "Wzgórze": {
    emoji: "📡",
    labelColor: "text-indigo-400",
    bubbleBg: "bg-indigo-950/60",
    borderColor: "border-indigo-800",
  },
};

const DEFAULT_STYLE = {
  emoji: "⚡",
  labelColor: "text-pink-300",
  bubbleBg: "bg-zinc-800/60",
  borderColor: "border-zinc-700",
};

export function ChatBubble({ structure, text, align = "left", index = 0 }: ChatBubbleProps) {
  const style = STRUCTURE_STYLES[structure] ?? DEFAULT_STYLE;
  const isRight = align === "right";

  return (
    <div
      className={`flex flex-col gap-1.5 ${isRight ? "items-end" : "items-start"}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={`flex items-center gap-1.5 ${isRight ? "flex-row-reverse" : "flex-row"}`}
      >
        <span className="text-sm">{style.emoji}</span>
        <span className={`text-[11px] font-bold uppercase tracking-widest font-mono-custom ${style.labelColor}`}>
          {structure}
        </span>
      </div>

      <div
        className={`max-w-[85%] px-4 py-3 border text-sm leading-relaxed text-gray-200 ${style.bubbleBg} ${style.borderColor} ${
          isRight ? "rounded-2xl rounded-tr-none" : "rounded-2xl rounded-tl-none"
        }`}
        style={{ borderRadius: isRight ? "1rem 0.25rem 1rem 1rem" : "0.25rem 1rem 1rem 1rem" }}
      >
        {text}
      </div>
    </div>
  );
}
