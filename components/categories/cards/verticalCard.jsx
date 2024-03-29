import Image from "next/image"
import Link from "next/link"
import React from "react"
import {useGlobalContext} from "../../../context/store"

const VerticalCrad = ({image, name, articles, id}) => {
  const {setCategoryContext} = useGlobalContext()

  return (
    <Link href="/productos" onClick={() => setCategoryContext(id)}>
      <div className="group w-[180px] h-full sm:w-[180px] sm:h-[400px] bg-[#b6b9c2] rounded-[30px] sm:pt-6 hover:bg-opacity-90 ">
        <div className="sm:mt-3">
          <Image
            width={241}
            height={300}
            src={`/${image}`}
            alt="card-img"
            className="absolute object-cover w-[180px] h-[300px] sm:w-[] opacity-[0.6] mt-6 ease-in-out duration-500 group-hover:opacity-[1]"
          />
        </div>
        <div className="flex flex-col items-end text-background font-bold text-xl sm:w-[180px] sm:pr-2">
          <p className="flex font-bold text-xl sm:w-[180px] justify-end text-end pr-3">
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
