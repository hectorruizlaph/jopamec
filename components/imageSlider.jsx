import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Autoplay} from "swiper"
import "swiper/css"
import Image from "next/image"

const sliderData = [
  {
    id: "1",
    name: "Reconocimientos",
    slug: "reconocimientos",
    img: "reconocimientos-01.png",
  },
  {
    id: "2",
    name: "Placas fundidas y fotograbadas",
    slug: "placas",
    img: "placas-01.png",
  },
  {
    id: "3",
    name: "Placas tipo industrial",
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
    name: "Porta escritorio",
    slug: "porta-escritorio",
    img: "porta-escritorio-01.png",
  },
]

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
        }}
      >
        {sliderData.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              {<Slide slideImage={image.img} />}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Slider
