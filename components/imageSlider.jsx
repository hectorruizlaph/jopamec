import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Autoplay} from "swiper"

import Image from "next/image"

import {sliderData} from "../utils/heroSlider"

const Slide = ({slideImage}) => {
  return (
    <>
      <div className="flex justify-center items-center md:hidden">
        <Image
          src={`/images/categories/${slideImage}`}
          width={192}
          height={230}
          alt="slider1"
        />
      </div>
      <div
        className="hidden 
      md:block
      lg:hidden
      xl:block
      2xl:hidden"
      >
        <Image
          src={`/images/categories/${slideImage}`}
          width={284}
          height={360}
          alt="slider1"
        />
      </div>
      <div
        className="hidden
      lg:block
      xl:hidden
      2xl:block"
      >
        <Image
          src={`/images/categories/${slideImage}`}
          width={384}
          height={460}
          alt="slider1"
        />
      </div>
    </>
  )
}

const Slider = () => {
  // SwiperOptions,Controller,FreeMode,Manipulation, Navigation, Pagination
  SwiperCore.use([Autoplay])
  return (
    <div
      className="max-w-[192px] 
    sm:max-w-lg
    2xl:-ml-[200px]"
    >
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        cssMode={true}
      >
        {sliderData.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <Slide slideImage={image.img} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Slider
