import Image from "next/image"
import {data} from "../../data/data"
import ProductCard from "../../components/products/product"

import {Swiper, SwiperSlide} from "swiper/react"
import Link from "next/link"
import "swiper/css"
import {Autoplay, Navigation} from "swiper"
import Faq from "../../components/faq"

import {useGlobalContext} from "../../context/store"

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

const Product = ({product}) => {
  const {setContactProductText, setContactText} = useGlobalContext()

  // update satate in contact form
  const handleClick = (product) => {
    setContactProductText(product)
    setContactText("")
  }

  const cleanProduct = product[0]
  return (
    <div className="flex flex-col gap-14 sm:gap-20 my-28 sm:py-0 ">
      <div className="pl-2 sm:pl-0 flex flex-col justify-center items-center sm:flex-row gap-2 sm:mt-[3%] ">
        {/* desktop image */}
        <div className="hidden sm:flex flex-col justify-center items-center">
          <Image
            src="/images/gray-blob.png"
            width={416}
            height={451}
            alt="blob"
            className="w-[80%] ml-0 -mt-[10px] sm:w-full sm:ml-[60px] sm:-mt-[10px]"
          />
          <div className="-mt-[90%] sm:-mt-[80%] ">
            <Image
              src={`/images/allProducts/${cleanProduct.images[0]}`}
              width={400}
              height={400}
              alt="producto"
            />
          </div>
        </div>
        {/* mobil image */}

        <div className="flex flex-col justify-center items-center sm:hidden">
          <Image
            src="/images/gray-blob.png"
            width={316}
            height={351}
            alt="blob"
            className="w-[80%] ml-0 -mt-[10px] sm:w-full sm:ml-[60px] sm:-mt-[10px]"
          />
          <div className="-mt-[90%] sm:-mt-[80%] ">
            <Image
              src={`/images/allProducts/${cleanProduct.images[0]}`}
              width={300}
              height={300}
              alt="producto"
            />
          </div>
        </div>
        <div className="min-h-full flex justify-center items-center">
          <div className="flex flex-col gap-8 sm:justify-center sm:align-middle sm:w-[80%] sm:mt-[10%] sm:ml-[10%]">
            <p className="text-2xl font-bold sm:text-[32px] text-darkBlue">
              {cleanProduct.title}
            </p>
            <p className="text-base w-[80%]">{cleanProduct.content}</p>

            <div className="w-[90%]">
              <p className="font-semibold text-lg text-start">
                Personalizamos tu proyecto
              </p>
              <p>
                Se pueden hacer distintas combinaciones de tipografía, textos y
                materiales. Contáctanos para más información.
              </p>
            </div>
            <div className="flex">
              <Link href="/contacto">
                <button
                  className="px-[18px] h-[40px] rounded-lg bg-gold text-background text-lg shadow-lg hover:shadow-xl"
                  onClick={() => handleClick(cleanProduct.title)}
                >
                  Hacer pedido
                </button>
              </Link>
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
          <div>
            <Swiper
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
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
      <Faq />
    </div>
  )
}

export default Product
