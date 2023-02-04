import React from "react"
import Image from "next/image"
import Link from "next/link"

const Product = ({img, title, url}) => {
  return (
    <Link href={`/${url}`}>
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center h-[380px]">
          <Image
            src={`/${img}`}
            alt="client"
            width={280}
            height={380}
            className="max-h-[380px] hover:fill-gold"
          />
        </div>
        <div>
          <h2>{title}</h2>
          <button>Ver Producto</button>
        </div>
      </div>
    </Link>
  )
}

export default Product
