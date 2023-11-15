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
import { Locale } from "@/i18n/settings";
import { useTranslation } from "@/i18n/client";

export const Hero = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang);

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
      id="home"
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
                  className={`transition duration-1000 text-white text-xl sm:text-xl  md:text-4xl ${
                    isActive ? "translate-x-0" : "-translate-x-60"
                  }`}
                >
                  {t(slide.title)}
                </h2>
                <p
                  className={`transition duration-1000 text-white text-base sm:text-lg md:text-xl font-bold ${
                    isActive ? "translate-x-0" : "translate-x-60"
                  }`}
                >
                  {t(slide.desc)}
                </p>
              </div>
            </>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
