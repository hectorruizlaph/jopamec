import Image from "next/image"
import React from "react"
import Slider from "../imageSlider"

const BlobSlider = () => {
  return (
    <div>
      <Image src="/images/blob.svg" width={560} height={560} alt="blob" />
      <div className="absolute -mt-[460px] -ml-20">
        <Slider />
      </div>
    </div>
  )
}

export default BlobSlider
