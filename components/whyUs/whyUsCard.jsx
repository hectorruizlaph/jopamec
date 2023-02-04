import Image from "next/image"
import React from "react"

const WhyUsCard = ({img, title, description}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[270px]">
      <Image src={`/images/whyUs/${img}`} width={64} height={64} alt="icon" />
      <h2 className="font-bold text-[20px]">{title}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  )
}

export default WhyUsCard
