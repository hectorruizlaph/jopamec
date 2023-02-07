import React, {useRef, useState} from "react"
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
import Client from "./client"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
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
        <h1 className="font-bold text-[24px] md:text-[32px] pb-[60px] text-center leading-8 md:leading-4">
          Ellos confían en Placas y Reconocimientos{" "}
          <span className="text-gold">JOPAMEC</span>
        </h1>
      </div>
      <div>
        <div className="hidden md:block">
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
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
        <div className="md:hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
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
