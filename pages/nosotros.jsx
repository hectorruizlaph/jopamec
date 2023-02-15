import React from "react"
import Map from "../components/map"
import Link from "next/link"
import Image from "next/image"
import Clients from "../components/clients/index"
import WhyUsCard from "../components/whyUs/whyUsCard"
import Faq from "../components/faq"

const Nosotros = () => {
  return (
    <div className="pt-20 flex flex-col items-center justify-center gap-20 lg:gap-36 xl:gap-48">
      <div className="flex flex-col justify-center items-center gap-6 mt-8 px-[10%] xl:px-[20%] 2xl:px-[27%]">
        <div className="flex flex-col justify-center items-start gap-6">
          <h1 className="font-bold text-[32px]">JOPAMEC</h1>
          <p>
            Somos una empresa de sólido prestigio especializada en el grabado
            láser, punta de diamante y sublimación de reconocimientos creativos,
            placas, letras fundidas, medallas, pines, llaveros, platos,
            charolas, señalamientos y mucho más.
          </p>
          <p className="text-start">
            Ofrecemos un servicio integral de calidad y atendemos pedidos
            urgentes en menos de 24 horas.
          </p>
        </div>
        <div className="flex items-start justify-start h-10 w-full">
          <Link
            href="/productos"
            className="flex justify-center items-center cursor-pointer px-[18px] bg-gold shadow-md hover:shadow-lg rounded-lg text-background h-full"
          >
            Nuestros Productos
          </Link>
          <a
            href="https://wa.me/528123789941?text=Me+podrían+dar+más+información+sobre+los+productos+que+ofrecen"
            rel="noreferrer"
            target="_blank"
            className=" flex items-center justify-center h-full w-[50px] bg-[#D9D9D9] rounded-lg ml-3 shadow-lg hover:shadow-xl"
          >
            <Image
              height={32}
              width={32}
              src="/icons/whatsapp.svg"
              alt="whatsapp"
            />
          </a>
        </div>
      </div>
      <div>
        {" "}
        <Clients />{" "}
      </div>
      {/* Cards */}
      <div className="flex flex-col justify-center items-center gap-12 xl:flex-row xl:gap-28">
        <WhyUsCard
          img="location.svg"
          title="Ubicación"
          description="Enrique C. Livas 314, Monterrey, NL"
        />

        <div className="flex flex-col justify-center items-center gap-5 w-[270px]">
          <Image
            src="/images/whyUs/tools.svg"
            width={64}
            height={64}
            alt="icon"
          />
          <h2 className="font-bold text-[20px]">Contacto</h2>
          <p className="text-sm text-center whitespace-nowrap">
            Teléfono: +52 81 8346 9582 y +52 81 8114 8501 <br /> Correo:
            monterrey@placasjopamec.com
          </p>
        </div>

        <WhyUsCard
          img="contact.svg"
          title="Tecnicas"
          description="
            Impresión en sublimación -
            Punta de diamante -
            Grabado láser -
            Fundición
            "
        />
      </div>
      {/* 25 años */}
      <div className="flex justify-center items-center">
        <div
          className="flex justify-between py-[1%] px-[2%] bg-lightBlue rounded-[30px] shadow-xl 
        lg:py-[3%] lg:px-[10%] xl:min-w-[1000px]"
        >
          <Image
            src="/images/icono-jopamec.svg"
            width={100}
            height={100}
            alt="25 años"
            className="lg:hidden"
          />
          <Image
            src="/images/icono-jopamec.svg"
            width={200}
            height={200}
            alt="25 años"
            className="hidden lg:block"
          />
          <div
            className="flex justify-center items-center text-background leading-[30px]
            md:text-[24px]
            lg:leading-[50px] lg:text-[34px]
            xl:text-[42px]
          xl:ml-[40px]"
          >
            <div className="min-w-full">
              Creando productos de calidad desde 19 de Octubre de 1996
            </div>
            <div className="hidden min-w-full">
              <p className="whitespace-nowrap">Creando productos de</p>
              <p className="whitespace-nowrap">calidad desde 19 de Octubre</p>
              <p>de 1996</p>
            </div>
          </div>
        </div>
      </div>
      <Map width={400} height={0.4} />
      <Faq />
    </div>
  )
}

export default Nosotros
