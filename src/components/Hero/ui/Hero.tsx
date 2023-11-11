/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { slideData } from "../data/slideData";

export const Hero = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      autoplay={{ delay: 5000 }}
      longSwipesMs={800}
      longSwipesRatio={1}
      loop
      className="w-full max-h-[670px] min-h-[270px] flex items-center justify-center"
    >
      {slideData.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          {({ isActive }) => (
            <>
              <img
                src={slide.src}
                alt={slide.name}
                className="object-cover object-center min-h-[270px] max-h-[670px] w-full"
              />
              <div className="absolute bg-black opacity-40 w-full h-full top-0 " />
              <div
                className={`transition duration-1000 ${
                  isActive ? "opacity-100 " : "opacity-0 "
                } absolute flex items-center justify-center gap-3 flex-col w-full h-full top-0`}
              >
                <h2
                  className={`transition duration-1000 text-white text-lg sm:text-xl  md:text-3xl ${
                    isActive ? "translate-x-0" : "-translate-x-60"
                  }`}
                >
                  {slide.title}
                </h2>
                <p
                  className={`transition duration-1000 text-white text-sm sm:text-base md:text-lg font-bold ${
                    isActive ? "translate-x-0" : "translate-x-60"
                  }`}
                >
                  {slide.title}
                </p>
              </div>
            </>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
