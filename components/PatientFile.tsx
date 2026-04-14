"use client";

import { Player, Big5 } from "@/hooks/useGameState";

type PatientFileProps = {
  player: Player;
  onClose: () => void;
};

const STAT_META: Array<{
  key: keyof Big5;
  shortLabel: string;
  fullLabel: string;
  color: string;
}> = [
  { key: "n", shortLabel: "N", fullLabel: "Neurotyczność", color: "#ec1763" },
  { key: "e", shortLabel: "E", fullLabel: "Ekstrawersja", color: "#f37826" },
  { key: "o", shortLabel: "O", fullLabel: "Otwartość", color: "#ceeaee" },
  { key: "a", shortLabel: "U", fullLabel: "Ugodowość", color: "#cdd629" },
  { key: "c", shortLabel: "S", fullLabel: "Sumienność", color: "#5568af" },
];

function getStatStatus(value: number): { label: string; color: string } {
  if (value > 85) return { label: "KRYTYCZNIE WYSOKO ⚠", color: "text-red-400" };
  if (value > 65) return { label: "Powyżej normy", color: "text-orange-400" };
  if (value >= 35) return { label: "W normie", color: "text-lime-400" };
  if (value >= 20) return { label: "Poniżej normy", color: "text-orange-400" };
  return { label: "KRYTYCZNIE NISKO ⚠", color: "text-red-400" };
}

function getEra(age: number): string {
  if (age < 6) return "Era I: Wczesnodziecięca";
  if (age < 13) return "Era II: Szkolna";
  if (age < 20) return "Era III: Early Access";
  if (age < 30) return "Era IV: Wczesna Dorosłość";
  if (age < 50) return "Era V: Dorosłość";
  return "Era VI: Dojrzałość";
}

function getDominantStructure(big5: Big5): string {
  if (big5.n > 70) return "🔥 Ciało Migdałowate (tryb alarmu)";
  if (big5.e > 70) return "🌀 Jądro Ogoniaste (poszukiwanie nagrody)";
  if (big5.c < 30) return "🧠 Kora Przedczołowa (brak kontroli)";
  if (big5.a > 70) return "🌊 Wyspa (orientacja społeczna)";
  if (big5.o > 70) return "🐎 Hipokamp (tryb eksploracji)";
  return "⚖️ System w równowadze";
}

export function PatientFile({ player, onClose }: PatientFileProps) {
  const era = getEra(player.age);
  const dominant = getDominantStructure(player.big5);

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-zinc-950/70 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="relative z-10 w-full max-w-sm h-full overflow-y-auto animate-slide-in-right"
        style={{
          background: "#0d0d10",
          borderLeft: "2px solid #5568af",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.8)",
        }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-5 py-4"
          style={{ background: "#0d0d10", borderBottom: "1px solid #5568af33" }}
        >
          <div>
            <div className="text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest mb-0.5">
              // DANE KLASYFIKOWANE
            </div>
            <h2 className="font-retro text-2xl text-[#ceeaee]">AKTA OBIEKTU</h2>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 transition-colors text-2xl font-mono-custom leading-none"
          >
            ✕
          </button>
        </div>

        <div className="px-5 py-5 space-y-6">
          {/* Section 1: Era & Profile */}
          <section>
            <div className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-3">
              01 / ERA I PROFIL
            </div>
            <div
              className="p-3 border border-[#5568af] bg-[#5568af]/10"
              style={{ borderRadius: "3px" }}
            >
              <div className="text-[10px] font-mono-custom text-zinc-500 uppercase mb-1">Aktywna Era</div>
              <div className="font-retro text-xl text-[#ceeaee]">{era}</div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div
                className="p-3 border border-zinc-800 bg-zinc-900/50"
                style={{ borderRadius: "3px" }}
              >
                <div className="text-[10px] font-mono-custom text-zinc-600 uppercase mb-1">Wiek</div>
                <div className="font-retro text-3xl text-gray-200">{player.age}</div>
              </div>
              <div
                className="p-3 border border-zinc-800 bg-zinc-900/50"
                style={{ borderRadius: "3px" }}
              >
                <div className="text-[10px] font-mono-custom text-zinc-600 uppercase mb-1">Status</div>
                <div className="text-xs text-lime-400 font-mono-custom">● AKTYWNY</div>
              </div>
            </div>
          </section>

          {/* Section 2: Big5 */}
          <section>
            <div className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-3">
              02 / PROFIL BIG-5
            </div>
            <div className="space-y-2.5">
              {STAT_META.map(({ key, shortLabel, fullLabel, color }) => {
                const value = player.big5[key];
                const status = getStatStatus(value);
                return (
                  <div key={key}>
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-retro text-base" style={{ color }}>
                          {shortLabel}
                        </span>
                        <span className="text-xs text-zinc-500">{fullLabel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono-custom ${status.color}`}>
                          {status.label}
                        </span>
                        <span className="font-retro text-base text-zinc-300">{value}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-zinc-800 overflow-hidden" style={{ borderRadius: "1px" }}>
                      <div
                        className="h-full transition-all duration-700"
                        style={{ width: `${value}%`, background: color, borderRadius: "1px" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 3: Tags */}
          <section>
            <div className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-3">
              03 / 🏷️ AKTYWNE IDENTYFIKATORY
            </div>
            <div className="flex flex-wrap gap-2">
              {player.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono-custom text-zinc-300 bg-zinc-800 border border-zinc-700"
                  style={{ borderRadius: "20px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Section 4: Substances */}
          <section>
            <div className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-3">
              04 / STATUS CHEMICZNY
            </div>
            <div className="space-y-2.5">
              {Object.entries(player.substances).map(([name, level]) => (
                <div key={name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-zinc-400 capitalize font-mono-custom">{name}</span>
                    <span className="font-retro text-sm text-zinc-300">{level}</span>
                  </div>
                  <div className="h-2 bg-zinc-800 border border-zinc-700 overflow-hidden" style={{ borderRadius: "2px" }}>
                    <div
                      className="h-full bg-orange-500/70 transition-all duration-700"
                      style={{ width: `${Math.min(100, level)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Diagnosis */}
          <section>
            <div className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-3">
              05 / DIAGNOZA
            </div>
            <div
              className="p-4 border border-[#ec1763]/40 bg-[#ec1763]/5"
              style={{ borderRadius: "3px" }}
            >
              <div className="text-[10px] font-mono-custom text-zinc-500 uppercase mb-1.5">
                Dominująca Struktura
              </div>
              <p className="text-sm text-gray-200 leading-snug">{dominant}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
