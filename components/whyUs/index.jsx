import React from "react"
import WhyUsCard from "./whyUsCard"

const WhyUs = () => {
  return (
    <div className="">
      <h1 className="font-bold text-[24px] sm:text-[32px] pb-[40px] sm:pb-[30px] text-center leading-8 sm:leading-4">
        ¿Por qué elegir <span className="text-gold">Jopamec</span>?
      </h1>
      <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-28 gap-12">
        <div>
          <WhyUsCard
            img="rectangle.svg"
            title="Amplio Catálogo"
            description="Descubre la amplia variedad de 
productos con los que contamos "
          />
        </div>
        <div>
          <WhyUsCard
            img="trust.svg"
            title="Confianza"
            description="Tenemos más de 25 años ayudando 
a clientes alrededor de la republica Mexicana"
          />
        </div>
        <div>
          <WhyUsCard
            img="24.svg"
            title="Rapidez"
            description="Entregas Inmediatas en menos
de 24 horas, dependiendo del pedido"
          />
        </div>
      </div>
    </div>
  )
}

export default WhyUs
