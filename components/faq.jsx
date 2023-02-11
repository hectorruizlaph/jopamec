// const FaqSection = ({question, answer}) => {
//   return (
//     <div className="flex justify-between whitespace-nowrap px-5 py-5 border border-[#eeeeee] shadow-lg rounded-lg w-[80%]">
//       <h1 className="text-2xl">{question}</h1>
//       <span>
//         <svg
//           fill="#000000"
//           width="32px"
//           height="32px"
//           viewBox="0 0 16.00 16.00"
//           xmlns="http://www.w3.org/2000/svg"
//           stroke="#000000"
//           stroke-width="0.00016"
//         >
//           <g id="SVGRepo_bgCarrier" stroke-width="0" />

//           <g
//             id="SVGRepo_tracerCarrier"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke="#CCCCCC"
//             stroke-width="0.032"
//           />

//           <g id="SVGRepo_iconCarrier">
//             <path d="M8 10.18 2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 0 0 .86.39 1.13 1.13 0 0 0 .85-.39l5.7-5.7-.88-.89z" />
//           </g>
//         </svg>
//       </span>
//     </div>
//   )
// }

// const Faq = () => {
//   return (
//     <div>
//       <h1 className="text-center text-[32px] font-bold mb-[32px]">
//         Preguntas Frecuentes
//       </h1>
//       <div className="flex flex-col gap-6 justify-center items-center">
//         <FaqSection question="¿Cuanto tarda un pedido?" />
//       </div>
//     </div>
//   )
// }

// export default Faq

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
      <div className="flex flex-col justify-center items-center md:max-w-[70%]">
        <Fragment>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`px-5 py-5 border border-[#eeeeee] rounded-lg  ${
                open === 1
                  ? "border-b border-b-[#eeeeee] rounded-b-none "
                  : "shadow-lg mb-6"
              }`}
            >
              ¿Cuanto tarda un pedido?
            </AccordionHeader>
            <AccordionBody
              className={`px-5 py-5 border border-[#eeeeee] border-t-0  rounded-b-lg text-xl ${
                open === 1 ? "shadow-lg mb-6" : "shadow-lg"
              }`}
            >
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
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
              ¿Puedo hacer un pedido especial?
            </AccordionHeader>
            <AccordionBody
              className={`px-5 py-5 border border-[#eeeeee] border-t-0  rounded-b-lg text-xl ${
                open === 2 ? "shadow-lg mb-6" : "shadow-lg"
              }`}
            >
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
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
              ¿Hay devoluciones?
            </AccordionHeader>
            <AccordionBody
              className={`px-5 py-5 border border-[#eeeeee] border-t-0  rounded-b-lg text-xl ${
                open === 3 ? "shadow-lg mb-6" : "shadow-lg"
              }`}
            >
              Las entregas son finales por lo que tienes que pedir una muestra
              digital de como se veria el producto final antes de crearlo.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`px-5 py-5 border border-[#eeeeee] rounded-lg text-start ${
                open === 4
                  ? "border-b border-b-[#eeeeee] rounded-b-none "
                  : "shadow-lg mb-6"
              }`}
            >
              ¿Donde estan localizados?
            </AccordionHeader>
            <AccordionBody
              className={`px-5 py-5 border border-[#eeeeee] border-t-0  rounded-b-lg text-xl ${
                open === 4 ? "shadow-lg mb-6" : "shadow-lg"
              }`}
            >
              Deserunt mollit culpa ut magna est eiusmod reprehenderit. Proident
              aliquip adipisicing ad dolore tempor fugiat excepteur ea officia.
              Cillum fugiat velit duis non. Excepteur anim enim sunt incididunt
              ea irure non Lorem deserunt mollit. Excepteur qui exercitation
              tempor eu proident laborum Lorem deserunt veniam mollit.
              Consectetur elit dolor dolore esse qui ad velit. Anim duis
              cupidatat non commodo deserunt laboris. Ex amet pariatur
              reprehenderit sunt adipisicing sunt nostrud nostrud. Consectetur
              amet et nulla consequat. Occaecat ullamco nostrud velit deserunt
              qui aliquip quis consequat quis quis proident cupidatat minim.
              Mollit ad ullamco adipisicing occaecat consequat ad ullamco.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  )
}
