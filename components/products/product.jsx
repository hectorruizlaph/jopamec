import React from "react"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({img, title, url}) => {
  return (
    <Link href={`/productos/${url}`}>
      <div className="group flex flex-col justify-between items-center md:w-[290px] rounded-3xl shadow-xl hover:shadow-md my-7">
        <div className="flex justify-center items-center h-[320px] transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1 duration-300">
          <Image
            src={`/${img}`}
            alt="client"
            width={280}
            height={380}
            className="max-h-[380px]"
          />
        </div>
        <p className="py-2 max-w-[90%] text-center">{title}</p>
      </div>
    </Link>
  )
}

export default ProductCard
