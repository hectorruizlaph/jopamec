import Image from "next/image"
import Link from "next/link"
import React from "react"

const VerticalCrad = ({image, name, articles, link}) => {
  return (
    <Link href={`/${link}`}>
      <div className="md:w-[180px] md:h-[400px] bg-[#b6b9c2] rounded-[30px]">
        <div className="">
          <Image
            width={241}
            height={300}
            src={`/${image}`}
            alt="card-img"
            className="absolute object-cover w-[180px] opacity-[0.6]"
          />
        </div>
        <div className="flex flex-col items-end text-background font-bold text-xl md:w-[500px] pt-[30px] pr-[50px]">
          <p className="flex font-bold text-xl md:w-[200px] justify-end text-end">
            {name}
          </p>
          <p className="flex font-normal text-base">{articles}</p>
        </div>
      </div>
    </Link>
  )
}

export default VerticalCrad
