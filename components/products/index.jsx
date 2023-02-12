import React, {useRef, useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import ProductCard from "./product"
import Link from "next/link"
import "swiper/css"
import {Autoplay, Navigation} from "swiper"

import {data} from "../../data/data"

const products = data?.products

const Products = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-10 font-bold text-[24px] md:text-[32px] pb-[30px] leading-8 md:leading-4">
        <h1 className="">Explora nuestros productos </h1>
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
      <div>
        <Link
          href="/productos"
          className="group flex justify-center items-center gap-4 mt-8"
        >
          <p className="text-xl font-bold">Ver todos</p>
          <span className="group-hover:animate-rigthArrow">
            <svg
              fill="#000000"
              width="26px"
              height="26px"
              viewBox="0 0 1920.00 1920.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              stroke-width="0.019200000000000002"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="38.4"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="m1304.824 345.002-81.25 81.249 476.466 476.582H0v114.922h1700.04l-476.466 476.465 81.25 81.25L1920 960.293z"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Products
