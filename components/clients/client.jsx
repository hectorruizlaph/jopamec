import React from "react"
import Image from "next/image"

const Client = ({path}) => {
  return (
    <div className="flex justify-center items-center max-h-[118px]">
      <Image
        src={`/${path}`}
        alt="client"
        width={200}
        height={118}
        className="max-h-[118px] hover:fill-gold text-gold"
      />
    </div>
  )
}

export default Client
