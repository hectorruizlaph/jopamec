import Image from "next/image"
import React from "react"
import BlobSlider from "../components/sliders/blobSlider"
import TextSlider from "./textSlider"

const Hero = () => {
  return (
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
            className="font-manrope font-bold leading-[40px] text-darkBlue text-[24px]
          sm:leading-[70px] sm:text-[54px]"
          >
            25 años creando
          </h1>
          <h1 className="font-manrope font-bold sm:leading-[70px] text-[24px] sm:text-[54px] text-lightBlue">
            <TextSlider />
          </h1>
        </div>

        <div
          className="flex flex-col text-center pb-8 max-w-[300px]
        sm:text-start"
        >
          <p className="font-bold">
            Entregas de trabajos urgentes en menos de 24 horas
          </p>
          <p className="text-sm">*Aplican restricciones</p>
        </div>
        <div className="xl:hidden mb-6">
          <BlobSlider />
        </div>
        <div
          className="flex justify-center items-center gap-7 text-background
        md:justify-start"
        >
          <button className="bg-darkBlue px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
            Ver Productos
          </button>
          <button className="bg-gold px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
            Solicitar Ahora
          </button>
        </div>
      </div>
      <div className="xl:mt-[125px] pt-7 hidden xl:block">
        <BlobSlider />
      </div>
    </div>
  )
}

export default Hero
