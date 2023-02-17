import Image from "next/image"
import Link from "next/link"
import React from "react"
import {useGlobalContext} from "../../../context/store"

function HorizontalCard({image, name, articles, id}) {
  const {setCategoryContext} = useGlobalContext()

  return (
    <Link href="/productos" onClick={() => setCategoryContext(id)}>
      <div className="group w-[300px] h-[150px] sm:w-[500px] sm:h-[180px] bg-[#b6b9c2] rounded-[30px] hover:bg-opacity-90">
        <div className="ml-4 rounded-[30px]">
          <Image
            width={241}
            height={300}
            src={`/${image}`}
            alt="card-img"
            className="absolute object-cover w-[120px] h-[150px] sm:h-[180px] sm:w-[220px] opacity-[0.6] ease-in-out duration-500 group-hover:opacity-[1]"
          />
        </div>
        <div className="flex flex-col items-end text-background font-bold text-xl sm:w-[500px] sm:pt-[30px] sm:pr-[50px] pt-1 pr-2">
          <p className="flex font-bold text-xl sm:w-[200px] justify-end text-end">
            {name}
          </p>
          <p className="flex font-normal text-base">{articles} artículos</p>
        </div>
      </div>
    </Link>
  )
}

export default HorizontalCard
