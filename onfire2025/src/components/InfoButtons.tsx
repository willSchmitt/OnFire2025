export function InfoButtons() {
  return (
    <div id="secao2" className="flex flex-col items-center">
      <div className="flex flex-col items-stretch p-8 text-white md:flex-row md:justify-center md:items-stretch md:gap-8 gap-8 w-full">
        {/* Card SEXTA-FEIRA */}
        <div className="w-full md:w-[400px] lg:w-[450px] p-6 rounded-lg border-2 border-white/70 shadow-[0_0_20px_10px_rgba(255,255,255,0.3)] flex flex-col flex-1">
          <div className="text-3xl font-bold border-b-2 border-white pb-2 text-center">
            SEXTA-FEIRA
          </div>

          <div className="flex flex-col justify-between flex-1 text-lg h-full mt-4">
            <div className="flex justify-between py-2">
              <span className="font-bold">19:00</span>
              <span>CHECK-IN</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold">19:30</span>
              <span>INÍCIO</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold">21:45</span>
              <span>ENCERRAMENTO</span>
            </div>
          </div>
        </div>

        {/* Card SÁBADO */}
        <div className="w-full md:w-[400px] lg:w-[450px] p-6 rounded-lg border-2 border-white/70 shadow-[0_0_20px_10px_rgba(255,255,255,0.3)] flex flex-col flex-1">
          <div className="text-3xl font-bold border-b-2 border-white pb-2 text-center">
            SÁBADO
          </div>

          <div className="flex flex-col justify-between flex-1 text-lg h-full mt-4">
            <div className="flex justify-between py-2">
              <span className="font-bold">13:30</span>
              <span>CHECK-IN</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold">14:00</span>
              <span>ABERTURA</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold">16:30</span>
              <span>INTERVALO</span>
            </div>
            <div className="flex justify-between py-2">
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
        <a
          href="https://www.instagram.com/morelifersl/"
          target="_blank"
          className="bg-red-700 hover:bg-red-500 text-white text-xl px-8 py-4 rounded-2xl font-bold 
               shadow-[0_0_25px_6px_rgba(255,80,0,0.8)] 
               hover:shadow-[0_0_35px_12px_rgba(255,120,0,1)] 
               transition-all duration-300"
        >
          Instagram
        </a>

        <a
          href="https://chat.whatsapp.com/IaDLqM5aVj16M8SamyB2kx"
          target="_blank"
          className="border-2 border-red-700 text-white text-xl px-8 py-4 rounded-2xl font-bold 
               bg-transparent shadow-[0_0_20px_4px_rgba(255,80,0,0.6)] 
               hover:bg-red-600 hover:shadow-[0_0_30px_8px_rgba(255,120,0,0.9)] 
               transition-all duration-300"
        >
          WhatsApp
        </a>

        <a
          href="https://inchur.ch/enJXM"
          target="_blank"
          className="bg-red-700 hover:bg-red-500 text-white text-xl px-8 py-4 rounded-2xl font-bold 
               shadow-[0_0_25px_6px_rgba(255,80,0,0.8)] 
               hover:shadow-[0_0_35px_12px_rgba(255,120,0,1)] 
               transition-all duration-300"
        >
          Inscrição
        </a>
      </div>
    </div>
  );
}
