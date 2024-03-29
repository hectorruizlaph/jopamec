import React from "react"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({img, title, url}) => {
  return (
    <Link
      href={`/productos/${url}`}
      className="w-full flex justify-center items-center"
    >
      <div
        className="group flex flex-col justify-center items-center rounded-2xl shadow-xl hover:shadow-md mx-6 my-7 border
      sm:w-[290px] sm:mx-0"
      >
        <div className="flex justify-center items-center h-[320px] transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1 duration-300">
          <Image
            src={`/${img}`}
            alt="client"
            width={280}
            height={380}
            className="max-h-[380px]"
          />
        </div>
        <p className="text-[#777] py-2 max-w-[90%] text-center text-lg">
          {title}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
