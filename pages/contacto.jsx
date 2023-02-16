import React from "react"
import {Form} from "../components/contactForm/Form"
import useWindowSize from "../hooks/useWindowSize"

const Contacto = () => {
  const windowSize = useWindowSize()

  return (
    <div className="flex flex-col justify-center items-center pt-32 gap-20 lg:gap-36 xl:gap-48">
      <div>
        <h1
          className="text-[28px] font-bold leading-8 mb-8 text-center 
        sm:text-start sm:text-[32px]"
        >
          ¿En qué podemos ayudarte?
        </h1>
        <Form />
      </div>
      <div className="flex flex-col items-center justify-center min-h-[50px] min-w-full">
        <h1
          className="font-bold text-[24px] pb-[60px] text-center leading-8 
        sm:text-[32px] sm:leading-10"
        >
          Visítanos
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14381.771982783455!2d-100.3535984!3d25.6897528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629609627a0b5f%3A0xc4499d984ac189ab!2sPlacas%20JOPAMEC!5e0!3m2!1sen!2smx!4v1676336708802!5m2!1sen!2smx"
          width={windowSize.width - 0.3 * windowSize.width}
          height={320}
          style={{border: "0"}}
          allowFullscreen=""
          loading="lazy"
          className="rounded-lg shadow-lg "
        ></iframe>
      </div>
    </div>
  )
}

export default Contacto
