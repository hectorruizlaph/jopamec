import Image from "next/image"
import {data} from "../../data/data"
import ProductCard from "../../components/products/product"

import {Swiper, SwiperSlide} from "swiper/react"
import Link from "next/link"
import "swiper/css"
import {Autoplay, Navigation} from "swiper"

const products = data?.products

export const getStaticPaths = async () => {
  const paths = data.products.map((product) => {
    return {params: {slug: product.slug}}
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug
  const product = data.products.filter((p) => p.slug === slug)
  return {
    props: {product},
  }
}

//       title: "Placa fundida en bronce",
//       slug: "placa-fundida-01",
//       folder: "fundicion/placas-fundidas",
//       images: ["PLACA-FUNDIDA-CECILIO.png"],
//       content: "Placa fundida en bronce. Una sola pieza con espesor de 1 cm",
//       categories_ids: ["2"],
//       subcategories_ids: "101",

const Product = ({product}) => {
  const cleanProduct = product[0]
  return (
    <div className="flex flex-col sm:gap-20">
      <div className="flex flex-col justify-center items-center sm:flex-row gap-10 sm:gap-2 sm:mt-[3%]">
        {/* desktop image */}
        <div className="hidden sm:flex sm:flex-col sm:justify-center sm:items-center">
          <Image
            src="/images/gray-blob.svg"
            width={550}
            height={550}
            alt="blob"
            className="ml-[60px] -mt-[10px]"
          />
          <div className="-mt-[80%] ">
            <Image
              src={`/images/allProducts/${cleanProduct.images[0]}`}
              width={400}
              height={400}
              alt="producto"
            />
          </div>
        </div>
        {/* mobil image */}
        <div className="sm:hidden py-10">
          <Image
            src={`/images/allProducts/${cleanProduct.images[0]}`}
            width={330}
            height={330}
            alt="producto"
            className="mx-auto"
          />
        </div>
        <div className="sm:min-h-full sm:flex sm:justify-center sm:items-center">
          <div className="sm:flex sm:flex-col sm:gap-8 sm:justify-center sm:align-middle sm:w-[80%] sm:mt-[10%] sm:ml-[10%]">
            <p className="text-lg font-bold sm:text-[32px] text-darkBlue">
              {cleanProduct.title}
            </p>
            <p className="text-base sm:w-[80%]">{cleanProduct.content}</p>
            <div className="sm:w-[90%]">
              <p className="text-center font-semibold text-lg sm:text-start">
                Personalizamos tu proyecto
              </p>
              <p>
                Se pueden hacer distintas combinaciones de tipografía, textos y
                materiales. Contáctanos para más información.
              </p>
            </div>
            <div className="flex">
              <button className="px-[18px] h-[40px] rounded-lg bg-gold text-background font-manrope text-lg shadow-lg hover:shadow-xl">
                Cotizar ahora
              </button>
              <a
                href={`https://wa.me/528123789941?text=Me+podrían+dar+más+información+sobre+el+producto:+${cleanProduct.title},+ https://placasjopamec.com/productos/${cleanProduct.slug}`}
                rel="noreferrer"
                target="_blank"
                className=" flex items-center justify-center h-[40px] w-[50px] bg-[#D9D9D9] rounded-lg ml-3 shadow-lg hover:shadow-xl"
              >
                <Image
                  height={32}
                  width={32}
                  src="/icons/whatsapp.svg"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        {data.products.map((product) => {
          cleanProduct.categories_ids[0] == product.categories_ids[0] ? (
            <ProductCard
              img={`images/allProducts/${product?.images[0]}`}
              title={product.title}
              url={product.slug}
            />
          ) : null
        })}
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:gap-10 font-bold text-[24px] sm:text-[32px] pb-[30px] leading-8 sm:leading-4">
          <h1 className="">Productos Relacionados</h1>
        </div>
        <div>
          <div className="hidden sm:block">
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
          <div className="sm:hidden">
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
                //       categories_ids: ["2"],
                //       subcategories_ids: "101",
                if (
                  product?.categories_ids[0] ==
                    cleanProduct?.categories_ids[0] ||
                  product?.subcategories_ids == cleanProduct?.subcategories_ids
                ) {
                  return (
                    <SwiperSlide key={product?.slug}>
                      <ProductCard
                        img={`images/allProducts/${product?.images[0]}`}
                        title={product?.title}
                        url={product?.slug}
                      />
                    </SwiperSlide>
                  )
                }
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
    </div>
  )
}

export default Product
