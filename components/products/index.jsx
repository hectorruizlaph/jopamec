import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import ProductCard from "./product"
import Link from "next/link"
import "swiper/css"
import {Autoplay, Navigation} from "swiper"

import {data} from "../../data/data"

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px

const products = data?.products

const Products = () => {
  // const screenWidth = window.innerWidth
  // const [windowWidth, setWindowWidth] = useState(screenWidth)

  // useEffect(() => {
  //   console.log(windowWidth)
  // }, [windowWidth])
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:gap-10 font-bold text-[24px] sm:text-[32px] pb-[30px] leading-8 sm:leading-4">
        <h1 className="">Explora nuestros productos </h1>
      </div>
      <div>
        <div>
          <Swiper
            spaceBetween={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1200: {
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
            {products?.map((product) => {
              return (
                <SwiperSlide key={product?.slug} className="mx-auto">
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
              strokeWidth="0.019200000000000002"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="38.4"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="m1304.824 345.002-81.25 81.249 476.466 476.582H0v114.922h1700.04l-476.466 476.465 81.25 81.25L1920 960.293z"
                  fillRule="evenodd"
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
