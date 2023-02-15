import React, {useState, useEffect} from "react"
import {Form} from "../components/contactForm/Form"
import Map from "../components/map"

const Contacto = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>Contacto</div>
      <div>
        <Form />
      </div>
      <div>
        <Map height={200} width={0.3} />
      </div>
    </div>
  )
}

export default Contacto
