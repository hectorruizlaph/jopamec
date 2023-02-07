import Image from "next/image"
import React from "react"
import BlobSlider from "../components/sliders/blobSlider"
import TextSlider from "./textSlider"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-48 justify-center items-center md:pb-32 sm:text-center sm:max-w-fit md:mx-auto">
      <div className="mt-[120px]">
        <div className="pb-8 text-center md:text-start">
          <h1 className="font-manrope font-bold leading-[70px] md:text-[54px] text-darkBlue text-[24px]">
            25 años creando
          </h1>
          <h1 className="font-manrope font-bold md:leading-[70px] text-[24px] md:text-[54px] text-lightBlue">
            <TextSlider />
          </h1>
        </div>
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start pb-8 max-w-[300px] text-center md:text-start px-24 md:px-0">
          <p className="font-bold">
            Entregas de trabajos urgentes en menos de 24 horas
          </p>
          <p className="text-sm">*Aplican restricciones</p>
        </div>
        <div className="flex  justify-center items-center md:justify-start gap-7 text-background">
          <button className="bg-darkBlue px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
            Ver Productos
          </button>
          <button className="bg-gold px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
            Solicitar Ahora
          </button>
        </div>
      </div>
      <div className="md:mt-[125px] pt-7 ">
        <BlobSlider />
      </div>
    </div>
  )
}

export default Hero
