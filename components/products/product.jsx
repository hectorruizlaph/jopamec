import React from "react"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({img, title, url}) => {
  return (
    <Link href={`/productos/${url}`}>
      <div className="group flex flex-col justify-between items-center md:w-[290px] rounded-3xl shadow-xl hover:shadow-md my-7">
        <div className="flex flex-col justify-center items-center h-[320px] transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1 duration-300">
          <Image
            src={`/${img}`}
            alt="client"
            width={280}
            height={380}
            className="max-h-[380px]"
          />
        </div>
        <div className="md:hidden md:group-hover:block md:my-auto md:bg-background md:z-20 md:w-[290px] md:h-[320px] md:absolute md:rounded-3xl md:opacity-50">
          {/* <button className="ring-2 ring-gold py-1 px-3 rounded-xl mt-2 md:hidden md:group-hover:block md:mx-auto">
            Ver Producto
          </button> */}
        </div>
        <div className="md:hidden md:group-hover:block md:absolute md:mt-[50%] font-manrope md:w-full md:text-center text-darkBlue z-30 ">
          <div className=" flex justify-center align-middle">
            <div className="p-3 bg-background rounded-xl max-w-fit my-auto shadow-lg md:hover:border-2 md:hover:border-gold">
              {title}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
