"use client";

import Link from "next/link";

export default function BotoesConvite() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">
      <Link target="_blank" href="https://www.instagram.com/morelifersl/">
        <button className="cursor-pointer w-48 px-8 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-red-500/40 hover:scale-105 transition">
          Instagram
        </button>
      </Link>

      <Link
        target="_blank"
        href="https://chat.whatsapp.com/IaDLqM5aVj16M8SamyB2kx"
      >
        <button className="cursor-pointer w-48 px-8 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-red-500/40 hover:scale-105 transition">
          WhatsApp
        </button>
      </Link>

      <Link
        target="_blank"
        href="https://ivida.com.br/eventos/1064459/on-fire-2025"
      >
        <button className="cursor-pointer w-48 px-8 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-red-500/40 hover:scale-105 transition">
          Inscrição
        </button>
      </Link>
    </div>
  );
}
