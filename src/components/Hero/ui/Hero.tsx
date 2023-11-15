'use client'

import {Navigation, Autoplay, EffectFade} from 'swiper/modules'

import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import {slideData} from '../data/slideData'
import {Locale} from '@/i18n/settings'
import {useTranslation} from '@/i18n/client'

export const Hero = ({lang}: {lang: Locale}) => {
  const {t} = useTranslation(lang)

  return (
    <Swiper
      modules={[Navigation, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      autoplay={{delay: 5000}}
      longSwipesMs={800}
      longSwipesRatio={1}
      loop
      id="home"
      className="flex max-h-[670px] min-h-[270px] w-full items-center justify-center">
      {slideData.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="relative">
          {({isActive}) => (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.name}
                className="h-[270px] w-full object-cover object-center sm:h-[370] md:h-[470px] lg:h-[670px]"
              />
              <div className="absolute top-0 h-full w-full bg-black opacity-40 " />
              <div
                className={`transition duration-1000 ${
                  isActive ? 'opacity-100 ' : 'opacity-0 '
                } absolute top-0 flex h-full w-full flex-col items-center justify-center gap-3`}>
                <h2
                  className={`text-xl text-white transition duration-1000 sm:text-xl  md:text-4xl ${
                    isActive ? 'translate-x-0' : '-translate-x-60'
                  }`}>
                  {t(slide.title)}
                </h2>
                <p
                  className={`text-base font-bold text-white transition duration-1000 sm:text-lg md:text-xl ${
                    isActive ? 'translate-x-0' : 'translate-x-60'
                  }`}>
                  {t(slide.desc)}
                </p>
              </div>
            </>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
