import Image from "next/image"
import React from "react"
import BlobSlider from "../components/sliders/blobSlider"
import TextSlider from "./textSlider"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-48 justify-center items-center md:pb-32 sm:text-center mx-auto">
      <div className="flex flex-col md:justify-start md:items-start mt-[120px]">
        <div className="pb-4 md:pb-8 text-start  max-w-[350px] md:max-w-full">
          <h1 className="font-manrope font-bold leading-[40px] md:leading-[70px] md:text-[54px] text-darkBlue text-[24px]">
            25 años creando
          </h1>
          <h1 className="font-manrope font-bold md:leading-[70px] text-[24px] md:text-[54px] text-lightBlue">
            <TextSlider />
          </h1>
        </div>

        <div className="flex flex-col justify-start items-start pb-8 max-w-[300px] text-start">
          <p className="font-bold">
            Entregas de trabajos urgentes en menos de 24 horas
          </p>
          <p className="text-sm">*Aplican restricciones</p>
        </div>
        <div className="md:hidden mb-6">
          <BlobSlider />
        </div>
        <div className="flex max-w-[350px] mx-auto md:mx-0 md:items-start md:justify-start gap-7 w-full text-background">
          <button className="bg-darkBlue px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
            Ver Productos
          </button>
          <button className="bg-gold px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
            Solicitar Ahora
          </button>
        </div>
      </div>
      <div className="md:mt-[125px] pt-7 hidden md:block">
        <BlobSlider />
      </div>
    </div>
  )
}

export default Hero
