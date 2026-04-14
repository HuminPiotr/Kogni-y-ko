import { Voice } from '@/lib/mockData';

type ChatBubbleProps = Voice & {
  align?: 'left' | 'right';
};

export function ChatBubble({ structure, text, align = 'left' }: ChatBubbleProps) {
  const isRight = align === 'right';
  return (
    <div className={`flex flex-col gap-1 ${isRight ? 'items-end' : 'items-start'}`}>
      <span className="text-xs font-semibold text-indigo-400">{structure}</span>
      <div
        className={`max-w-sm px-4 py-2.5 rounded-2xl text-sm leading-relaxed text-zinc-100 ${
          isRight
            ? 'bg-indigo-800/60 rounded-tr-sm'
            : 'bg-zinc-700/80 rounded-tl-sm'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
