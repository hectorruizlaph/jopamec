import Image from "next/image"
import Link from "next/link"
import React from "react"

const VerticalCrad = ({image, name, articles, link}) => {
  return (
    <Link href={`/${link}`}>
      <div className="group w-[180px] h-full md:w-[180px] md:h-[400px] bg-[#b6b9c2] rounded-[30px] md:pt-6 hover:bg-opacity-90 ">
        <div className="md:mt-3">
          <Image
            width={241}
            height={300}
            src={`/${image}`}
            alt="card-img"
            className="absolute object-cover w-[180px] h-[300px] md:w-[] opacity-[0.6] mt-6 ease-in-out duration-500 group-hover:opacity-[1]"
          />
        </div>
        <div className="flex flex-col items-end text-background font-bold text-xl md:w-[180px] md:pr-5">
          <p className="flex font-bold text-xl md:w-[180px] justify-end text-end pr-3">
            {name}
          </p>
          <p className="flex font-normal text-base pr-3">
            {articles} artículos
          </p>
        </div>
      </div>
    </Link>
  )
}

export default VerticalCrad
