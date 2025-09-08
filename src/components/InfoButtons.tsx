import BotoesConvite from "./Botoes";

export function InfoButtons() {
  return (
    <div id="secao2" className="flex flex-col items-center w-full">
      <div className="flex flex-col items-stretch p-8 text-white md:flex-row md:justify-center md:items-stretch md:gap-8 gap-8 w-full max-w-[1600px]">
        <div className="w-full max-w-[600px] p-6 rounded-lg border-2 border-white/70 shadow-[0_0_20px_10px_rgba(255,255,255,0.3)] flex flex-col flex-1">
          <div className="text-3xl font-bold border-b-2 border-white pb-2 text-center">
            SEXTA-FEIRA
          </div>

          <div className="flex flex-col justify-between flex-1 text-lg h-full mt-4">
            <div className="flex justify-between items-center gap-4 py-2">
              <span className="font-bold">19:00</span>
              <span>CHECK-IN</span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2">
              <span className="font-bold">19:30</span>
              <span>INÍCIO</span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2">
              <span className="font-bold">21:45</span>
              <span>ENCERRAMENTO</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[600px] p-6 rounded-lg border-2 border-white/70 shadow-[0_0_20px_10px_rgba(255,255,255,0.3)] flex flex-col flex-1">
          <div className="text-3xl font-bold border-b-2 border-white pb-2 text-center">
            SÁBADO
          </div>

          <div className="flex flex-col justify-between flex-1 text-lg h-full mt-4">
            <div className="flex justify-between items-center gap-4 py-2">
              <span className="font-bold">13:30</span>
              <span>CHECK-IN</span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2">
              <span className="font-bold">14:00</span>
              <span>ABERTURA</span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2">
              <span className="font-bold">16:30</span>
              <span>INTERVALO</span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2">
              <span className="font-bold">21:00</span>
              <span>ENCERRAMENTO</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="opacity-55 text-gray-50">
          Programação sujeita a alteração.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
        <BotoesConvite />
      </div>
    </div>
  );
}
