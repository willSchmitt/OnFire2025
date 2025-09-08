"use client";

export function Description() {
  return (
    <div className="max-w-4xl flex flex-col items-center gap-6">
      <p className="text-center text-xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
        Desde 2019, a Conferência ONFIRE tem reunido jovens para viverem algo
        diferente: um encontro com o amor de Jesus. Não se trata apenas de
        música, palavras bonitas ou encontros. Trata-se de vida sendo
        transformada, de esperança reacendida, de corações despertando para um
        propósito real.
      </p>

      <a
        href="https://ivida.com.br/eventos/1064459/on-fire-2025"
        target="_blank"
        className="border-2 border-red-700 text-white text-center text-2xl px-8 py-4 rounded-2xl font-bold 
               bg-red-950
               opacity-80
               hover:bg-red-600 hover:shadow-[0_0_30px_8px_rgba(255,120,0,0.9)] 
               transition-all duration-300
               "
      >
        🔥 Quero viver essa experiência
      </a>
    </div>
  );
}
