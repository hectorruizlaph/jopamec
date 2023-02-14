import Image from "next/image"
import React from "react"
import Slider from "../imageSlider"

const BlobSlider = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-full
      md:hidden"
      >
        <Image src="/images/blob.svg" width={280} height={280} alt="blob" />
        <div className="absolute">
          <Slider />
        </div>
      </div>
      <div
        className="hidden flex-col justify-center items-center w-full
      md:flex
      lg:hidden"
      >
        <Image src="/images/blob.svg" width={400} height={400} alt="blob" />
        <div className="absolute">
          <Slider />
        </div>
      </div>
      <div
        className="hidden flex-col justify-center items-center w-full
      lg:flex"
      >
        <Image src="/images/blob.svg" width={560} height={560} alt="blob" />
        <div className="absolute">
          <Slider />
        </div>
      </div>
    </>
  )
}

export default BlobSlider
