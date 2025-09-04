"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  "/IMG_7003.png",
  "/IMG_7002.png",
  "/IMG_7001.png",
  "/IMG_7004.png",
  "/IMG_7005.png",
  "/IMG_7007.png",
  "/IMG_7008.png",
];

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      loop
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full"
    >
      {slides.map((src, idx) => (
        <SwiperSlide
          key={idx}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_25px_5px_rgba(255,80,0,0.6)] aspect-[16/9]"
        >
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            className="object-cover bg-black" // bg-black evita fundo branco
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
