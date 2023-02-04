import Image from "next/image"
import React from "react"
import BlobSlider from "../components/sliders/blobSlider"
import TextSlider from "./textSlider"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-48 justify-center items-center pb-32">
      <div>
        <div className="pb-8">
          <h1 className="font-manrope font-bold leading-[70px] text-[54px] text-darkBlue">
            25 años creando
          </h1>
          <h1 className="font-manrope font-bold leading-[70px] text-[54px] text-lightBlue">
            <TextSlider />
          </h1>
        </div>
        <div className="pb-8">
          <p>Entregas de trabajos urgentes en menos de 24 horas</p>
          <p className="text-sm">*Aplican restricciones</p>
        </div>
        <div className="flex gap-7 text-background">
          <button className="bg-darkBlue px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
            Ver Productos
          </button>
          <button className="bg-gold px-[22px] py-[16px] rounded-xl shadow-md hover:shadow-xl">
            Solicitar Ahora
          </button>
        </div>
      </div>
      <div className="md:mt-[125px]">
        <BlobSlider />
        {/* <Image src="/images/blob.svg" width={520} height={520} alt="blob" />
        <div className="absolute">
          <BlobSlider />
        </div> */}
      </div>
    </div>
  )
}

export default Hero
