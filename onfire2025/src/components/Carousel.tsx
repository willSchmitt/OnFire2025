"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ImageOne from "../../public/IMG_7001.png";

export default function Carousel() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 }, // celular
          768: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
        }}
        className="!text-white bg-transparent"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_5px_rgba(255,80,0,0.6)] bg-transparent">
            <img
              src="/IMG_7003.png"
              alt="Imagem 2"
              className="w-full h-64 object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_5px_rgba(255,50,0,0.6)] bg-transparent">
            <img
              src="/IMG_7002.png"
              alt="Imagem 2"
              className="w-full h-64 object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_5px_rgba(255,80,0,0.6)] bg-transparent">
            <img
              src="/IMG_7001.png"
              alt="Imagem 2"
              className="w-full h-64 object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_5px_rgba(255,30,0,0.7)] bg-transparent">
            <img
              src="/IMG_7004.png"
              alt="Imagem 2"
              className="w-full h-64 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_5px_rgba(255,30,0,0.7)] bg-transparent">
            <img
              src="/IMG_7005.png"
              alt="Imagem 2"
              className="w-full h-64 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_5px_rgba(255,30,0,0.7)] bg-transparent">
            <img
              src="/IMG_7007.png"
              alt="Imagem 2"
              className="w-full h-64 object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_5px_rgba(255,30,0,0.7)] bg-transparent">
            <img
              src="/IMG_7008.png"
              alt="Imagem 2"
              className="w-full h-64 object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Estilo customizado dos botões e paginação */}
      <style jsx global>{`
        .swiper {
          background: transparent !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #ff3b3b;
          text-shadow: 0 0 10px rgba(255, 60, 0, 0.8);
        }
        .swiper-pagination-bullet {
          background: #ff3b3b !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #ff8000 !important;
          box-shadow: 0 0 10px rgba(255, 80, 0, 0.9);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
