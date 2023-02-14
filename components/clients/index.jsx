import React from "react"
import Client from "./client"

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import {Pagination, Autoplay, Navigation} from "swiper"

const clients = [
  "tec",
  "arenamty",
  "banorte",
  "cfe",
  "clubdeleones",
  "clubindustrial",
  "femsa",
  "fresnillo",
  "harleydavidson",
  "imss",
  "oxxo",
  "pemex",
  "penoles",
  "sanpedro",
  "soriana",
  "uanl",
]

const Clients = () => {
  return (
    <div>
      <div>
        <h1
          className="font-bold text-[24px] pb-[60px] text-center leading-8 
        sm:text-[32px] sm:leading-10"
        >
          Ellos confían en Placas y Reconocimientos{" "}
          <span className="text-gold">JOPAMEC</span>
        </h1>
      </div>
      <div>
        <div>
          <Swiper
            spaceBetween={40}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1080: {
                slidesPerView: 3,
              },
              1680: {
                slidesPerView: 4,
              },
              1900: {
                slidesPerView: 5,
              },
              2450: {
                slidesPerView: 6,
              },
            }}
          >
            {clients.map((client) => {
              return (
                <SwiperSlide key={client}>
                  <Client path={client} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Clients
