import React, {useRef, useState} from "react"
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
import Client from "./product"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import {Pagination, Autoplay, Navigation} from "swiper"

import {data} from "../../data/data"

const products = data?.products

const Products = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-[24px] md:text-[32px] pb-[30px] leading-8 md:leading-4">
          Explora nuestros productos
        </h1>
      </div>
      <div>
        <div className="hidden md:block">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {products?.map((product) => {
              return (
                <SwiperSlide key={product?.slug}>
                  <Client
                    img={`images/allProducts/${product?.images[0]}`}
                    title={product?.title}
                    url={product?.slug}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {products?.map((product) => {
              return (
                <SwiperSlide key={product?.slug}>
                  <Client
                    img={`images/allProducts/${product?.images[0]}`}
                    title={product?.title}
                    url={product?.slug}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Products
