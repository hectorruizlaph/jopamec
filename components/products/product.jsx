import React from "react"
import Image from "next/image"
import Link from "next/link"

const Product = ({img, title, url}) => {
  return (
    <Link href={`/productos/${url}`}>
      <div className="flex flex-col justify-between items-center md:h-[500px] bg-[#e4e4e4] hover:bg-[#eeeeee] rounded-3xl py-6">
        <h2 className="font-manrope text-lg font-bold pl-4">{title}</h2>

        <div className="flex flex-col justify-center items-center h-[320px] md:h-[380px]">
          <Image
            src={`/${img}`}
            alt="client"
            width={280}
            height={380}
            className="max-h-[380px]"
          />
        </div>
        <div>
          <button className="ring-2 ring-gold py-1 px-3 rounded-3xl mt-2 hover:bg-background">
            Ver Producto
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Product
