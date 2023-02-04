import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Autoplay} from "swiper"
import "swiper/css"

const sliderData = [
  {
    id: "1",
    name: "Reconocimientos",
    slug: "reconocimientos",
    img: "reconocimientos-01.png",
  },
  {
    id: "2",
    name: "Placas fundidas",
    slug: "placas",
    img: "placas-01.png",
  },
  {
    id: "3",
    name: "Placas industriales",
    slug: "placas-tipo-industrial",
    img: "placas-tipo-industrial-00.png",
  },
  {id: "4", name: "Grabados Laser", slug: "yetis", img: "grabado-laser-01.png"},
  {id: "5", name: "Pines", slug: "pines", img: "pines-01.png"},
  {id: "6", name: "Llaveros", slug: "llaveros", img: "llaveros-01.png"},
  {
    id: "7",
    name: "Platos/Charolas",
    slug: "platos-charolas",
    img: "platos-charolas-01.png",
  },
  {id: "8", name: "Gafetes", slug: "gafetes", img: "gafetes-01.png"},
  {
    id: "9",
    name: "Señalamientos",
    slug: "senalamientos",
    img: "senalamientos-01.png",
  },
  {
    id: "10",
    name: "Porta escritorios",
    slug: "porta-escritorio",
    img: "porta-escritorio-01.png",
  },
]

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
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
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
