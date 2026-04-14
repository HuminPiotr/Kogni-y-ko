'use client';

import { useGameState } from '@/hooks/useGameState';
import { StatBar } from '@/components/StatBar';
import { ChatBubble } from '@/components/ChatBubble';
import { DecisionCard } from '@/components/DecisionCard';

const STAT_LABELS = [
  { key: 'n' as const, label: 'N', full: 'Neurotyczność' },
  { key: 'e' as const, label: 'E', full: 'Ekstrawersja' },
  { key: 'o' as const, label: 'O', full: 'Otwartość' },
  { key: 'a' as const, label: 'A', full: 'Ugodowość' },
  { key: 'c' as const, label: 'C', full: 'Sumienność' },
];

export default function Home() {
  const { player, currentEvent, selectedDecision, isGameOver, handleDecision, nextTurn } =
    useGameState();

  if (isGameOver) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-100">
        <div className="text-center space-y-3 p-8">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
            Koniec scenariusza
          </p>
          <h1 className="text-3xl font-bold">Twój mózg przeżył.</h1>
          <p className="text-zinc-400 text-sm">
            Wiek: {player.age} · N:{player.big5.n} E:{player.big5.e} O:{player.big5.o} A:
            {player.big5.a} C:{player.big5.c}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Górny pasek — wiek i statystyki */}
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-zinc-500 uppercase tracking-widest">Wiek</span>
          <span className="text-2xl font-bold font-mono ml-2">{player.age}</span>
        </div>
        <div className="flex gap-4 sm:gap-6">
          {STAT_LABELS.map(({ key, label }) => (
            <StatBar key={key} label={label} value={player.big5[key]} />
          ))}
        </div>
      </header>

      {/* Treść gry */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
        {/* Sekcja sceny */}
        <section className="space-y-5">
          <p className="text-lg font-semibold leading-relaxed text-zinc-100">
            {currentEvent.sceneText}
          </p>
          <div className="flex flex-col gap-3">
            {currentEvent.voices.map((voice, i) => (
              <ChatBubble
                key={i}
                structure={voice.structure}
                text={voice.text}
                align={i % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </section>

        {/* Sekcja decyzji */}
        <section className="space-y-3">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
            Co robisz?
          </p>
          {currentEvent.decisions.map((decision) => (
            <DecisionCard
              key={decision.id}
              decision={decision}
              isSelected={selectedDecision?.id === decision.id}
              isOtherSelected={
                selectedDecision !== null && selectedDecision.id !== decision.id
              }
              onSelect={handleDecision}
            />
          ))}
        </section>

        {/* Przycisk następnej tury */}
        {selectedDecision && (
          <div className="flex justify-end pb-4">
            <button
              onClick={nextTurn}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
            >
              Następna tura →
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
