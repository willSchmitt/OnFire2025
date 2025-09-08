"use client";
import Image from "next/image";

const fotos = ["/IMG_7004.png", "/IMG_7005.png", "/IMG_7001_1.png"];

export default function SlideVerticalLimited() {
  return (
    <div className="flex flex-col gap-6 mt-10 px-4 md:px-0 items-center">
      {fotos.map((src, i) => (
        <div
          key={i}
          className="w-full md:w-3/4 max-h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex justify-center items-center"
        >
          <Image
            src={src}
            alt={`Imagem ${i + 1}`}
            width={1200}
            height={800}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
