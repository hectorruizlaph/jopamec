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
        <h1 className="font-bold text-[32px] pb-[30px] text-center">
          Ellos confían en Placas y Reconocimientos{" "}
          <span className="text-gold">JOPAMEC</span>
        </h1>
      </div>
      <div>
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
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
                  <Client path={`images/clients/${client}.svg`} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </>
      </div>
    </div>
  )
}

export default Clients
