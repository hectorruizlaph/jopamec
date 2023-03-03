import Image from "next/image"
import React from "react"
import BlobSlider from "../components/sliders/blobSlider"
import TextSlider from "./textSlider"
import Link from "next/link"
import {useGlobalContext} from "../context/store"

const Hero = () => {
  const {setContactText, setContactProductText} = useGlobalContext()

  const handleClick = () => {
    setContactProductText("")
    setContactText("Me urge tener un pedido en menos de 24 horas")
  }

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center
    sm:flex-row sm:gap-48 sm:pb-32 sm:text-center sm:mx-auto"
      >
        <div
          className="flex flex-col justify-center items-center mt-[120px]
      sm:justify-start sm:items-start"
        >
          <div
            className="pb-4 text-center max-w-[350px]
        sm:pb-8 sm:text-start sm:max-w-full"
          >
            <h1
              className="font-bold leading-relaxed text-darkBlue text-[42px]
          sm:leading-[70px] sm:text-[54px]"
            >
              25 años creando
            </h1>
            <h1 className="text-lightBlue font-bold leading-[42px] text-[42px] sm:text-[54px] sm:leading-[70px]">
              <TextSlider />
            </h1>
          </div>

          {/* <div
          className="flex flex-col text-center pb-8 max-w-[300px]
        sm:text-start"
        >
          <p className="font-bold">
            Entregas de trabajos urgentes en menos de 24 horas
          </p>
          <p className="text-sm">*Aplican restricciones</p>
        </div> */}
          <div
            className="flex flex-col text-center pb-8 max-w-[300px]
        sm:text-start"
          >
            <p className="font-bold">
              Hacemos de nuestros trabajos verdaderas obras de arte
            </p>
            {/* <p className="text-sm">verdaderas obras de arte</p> */}
          </div>

          <div className="xl:hidden mb-6">
            <BlobSlider />
          </div>
          <div
            className="flex justify-center items-center gap-7 text-background
        md:justify-start"
          >
            {/* <button className="bg-darkBlue px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
            Ver Productos
          </button> */}
            <Link href="/productos">
              <button className="bg-gold px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
                Ver Productos
              </button>
            </Link>
          </div>
        </div>
        <div className="xl:mt-[125px] pt-7 hidden xl:block">
          <BlobSlider />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/contacto" onClick={handleClick}>
          <div className="flex">
            <div className=" flex justify-center items-center text-center rounded-md py-2 px-4 cursor-pointer text-xl border border-gray-500 shadow-md hover:shadow-lg">
              <p>Realizar pedido urgente</p>
              <Image
                src="/images/whyUs/24.svg"
                width={34}
                height={34}
                alt="icon"
                className="ml-2"
              />
            </div>
            <span class="-ml-2 -mt-1 relative flex h-3 w-3 z-50">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 z-50"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-gold z-50"></span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Hero
