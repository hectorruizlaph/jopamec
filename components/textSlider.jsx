import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Autoplay} from "swiper"

import {sliderData} from "../utils/heroSlider"

const Slide = ({slideText}) => {
  return <h1 className="">{slideText}</h1>
}

const textSlider = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className="max-w-lg">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        cssMode={true}
      >
        {sliderData.map((text) => {
          return (
            <SwiperSlide key={text.id}>
              {<Slide slideText={text.name} />}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default textSlider
