import React, {useRef, useState} from "react"
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
import ProductCard from "./product"
import Link from "next/link"

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
      <div className="flex flex-col md:flex-row md:gap-10 font-bold text-[24px] md:text-[32px] pb-[30px] leading-8 md:leading-4">
        <h1 className="">Explora nuestros productos </h1>
        <Link href="/productos" className="underline md:hover:text-gold">
          Ver todos
        </Link>
      </div>
      <div>
        <div className="hidden md:block">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {products?.map((product) => {
              return (
                <SwiperSlide key={product?.slug}>
                  <ProductCard
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
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {products?.map((product) => {
              return (
                <SwiperSlide key={product?.slug}>
                  <ProductCard
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
