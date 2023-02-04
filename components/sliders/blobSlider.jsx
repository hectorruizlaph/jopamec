import Image from "next/image"
import React from "react"
import Slider from "../imageSlider"

const BlobSlider = () => {
  return (
    <>
      <div className="hidden md:block">
        <Image src="/images/blob.svg" width={560} height={560} alt="blob" />
        <div className="absolute -mt-[460px] -ml-20">
          <Slider />
        </div>
      </div>
      <div className="md:hidden">
        <Image src="/images/blob.svg" width={280} height={280} alt="blob" />
        <div className="absolute -mt-[230px] left-0">
          <Slider />
        </div>
      </div>
    </>
  )
}

export default BlobSlider
