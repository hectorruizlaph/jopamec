import Image from "next/image"
import Link from "next/link"
import React from "react"

function HorizontalCard({image, name, articles, link}) {
  return (
    <Link href={`/${link}`}>
      <div className="md:w-[500px] md:h-[180px] bg-[#b6b9c2] rounded-[30px] hover:ring-2 hover:ring-gold ">
        <div className="ml-4 rounded-[30px]">
          <Image
            width={241}
            height={300}
            src={`/${image}`}
            alt="card-img"
            className="absolute object-cover h-[180px] opacity-[0.6]"
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

export default HorizontalCard
