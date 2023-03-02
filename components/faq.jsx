import {Fragment, useState} from "react"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"

function Icon({id, open}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-[32px] font-bold mb-[32px] leading-normal mt-14">
        Preguntas Frecuentes
      </h1>
      <div className="flex flex-col justify-center items-center sm:max-w-[70%]">
        <Fragment>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`px-5 py-5 border border-[#eeeeee] rounded-lg text-start  ${
                open === 1
                  ? "border-b border-b-[#eeeeee] rounded-b-none "
                  : "shadow-lg mb-6"
              }`}
            >
              ¿Que tipo de placas conmemorativas realizan?
            </AccordionHeader>
            <AccordionBody
              className={`px-5 py-5 border border-[#eeeeee] border-t-0  rounded-b-lg text-xl ${
                open === 1 ? "shadow-lg mb-6" : "shadow-lg"
              }`}
            >
              Realizamos placas grabadas con punta de diamante, placas
              fotograbadas, placas fundidas en bronce o aluminio.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`px-5 py-5 border border-[#eeeeee] rounded-lg text-start ${
                open === 2
                  ? "border-b border-b-[#eeeeee] rounded-b-none "
                  : "shadow-lg mb-6"
              }`}
            >
              ¿Cuál es el tiempo de entrega de un pedido?
            </AccordionHeader>
            <AccordionBody
              className={`px-5 py-5 border border-[#eeeeee] border-t-0  rounded-b-lg text-xl ${
                open === 2 ? "shadow-lg mb-6" : "shadow-lg"
              }`}
            >
              Generalmente el tiempo de entrega varía entre 2 y 3 días hábiles,
              una vez que el cliente haya autorizado el diseño previo. Sin
              embargo para trabajos más grandes, se extenderá el tiempo
              dependiendo del pedido. <br />
              Contamos también con el servicio de trabajos urgentes, con un
              cargo adicional.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`px-5 py-5 border border-[#eeeeee] rounded-lg text-start ${
                open === 3
                  ? "border-b border-b-[#eeeeee] rounded-b-none "
                  : "shadow-lg mb-6"
              }`}
            >
              ¿Hacen envíos nacionales o internacionales?
            </AccordionHeader>
            <AccordionBody
              className={`px-5 py-5 border border-[#eeeeee] border-t-0  rounded-b-lg text-xl ${
                open === 3 ? "shadow-lg mb-6" : "shadow-lg"
              }`}
            >
              Si, realizamos envíos. <br />
              Los pasos a seguir para realizar tu pedido son los mismos, con la
              excepción que debe quedar liquidado antes de ser enviado. Contamos
              con precios preferenciales en servicio de paquetería, que deberá
              correr por cargo del cliente dependiendo del del destino.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  )
}
