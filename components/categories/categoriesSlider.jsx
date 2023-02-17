import React from "react"
import HorizontalCrad from "./cards/horizontalCard"
import VerticalCrad from "./cards/verticalCard"
import Link from "next/link"
import {useGlobalContext} from "../../context/store"
import {data} from "../../data/data"

const categoryList = data?.categories
const categories = [
  {
    id: "1",
    name: "Reconocimientos",
    slug: "reconocimientos",
    img: "reconocimientos-01.png",
    articles: 46,
  },
  {
    id: "2",
    name: "Placas fundidas y fotograbadas",
    slug: "placas",
    img: "placas-01.png",
    articles: 21,
  },
  {
    id: "3",
    name: "Placas tipo industrial",
    slug: "placas-tipo-industrial",
    img: "placas-tipo-industrial-00.png",
    articles: 7,
  },
  {
    id: "4",
    name: "Grabados Laser",
    slug: "yetis",
    img: "grabado-laser-01.png",
    articles: 14,
  },
  {id: "5", name: "Pines", slug: "pines", img: "pines-01.png", articles: 6},
  {
    id: "6",
    name: "Llaveros",
    slug: "llaveros",
    img: "llaveros-01.png",
    articles: 7,
  },
  {
    id: "9",
    name: "Platos/Charolas",
    slug: "platos-charolas",
    img: "platos-charolas-01.png",
    articles: 18,
  },
  {
    id: "10",
    name: "Gafetes",
    slug: "gafetes",
    img: "gafetes-01.png",
    articles: 3,
  },
  {
    id: "11",
    name: "Señalamientos",
    slug: "senalamientos",
    img: "senalamientos-01.png",
    articles: 4,
  },
  {
    id: "12",
    name: "Porta escritorio",
    slug: "porta-escritorio",
    img: "porta-escritorio-01.png",
    articles: 6,
  },
  {
    id: "13",
    name: "Placa grabada",
    slug: "placa-grabada",
    img: "placa-grabada-01.png",
    articles: 6,
  },
]

// const categories2 = [
//   {
//     id: "1",
//     name: "Reconocimientos",
//     slug: "reconocimientos",
//     img: "reconocimientos-01.png",
//     articles: 0,
//   },
//   {
//     id: "2",
//     name: "Placas fundidas y fotograbadas",
//     slug: "placas",
//     img: "placas-01.png",
//     articles: 0,
//   },
//   {
//     id: "3",
//     name: "Placas tipo industrial",
//     slug: "placas-tipo-industrial",
//     img: "placas-tipo-industrial-00.png",
//     articles: 0,
//   },
//   {
//     id: "4",
//     name: "Grabados Laser",
//     slug: "yetis",
//     img: "grabado-laser-01.png",
//     articles: 0,
//   },
//   {id: "5", name: "Pines", slug: "pines", img: "pines-01.png", articles: 0},
//   {
//     id: "6",
//     name: "Llaveros",
//     slug: "llaveros",
//     img: "llaveros-01.png",
//     articles: 0,
//   },
//   {
//     id: "7",
//     name: "Platos/Charolas",
//     slug: "platos-charolas",
//     img: "platos-charolas-01.png",
//     articles: 0,
//   },
//   {
//     id: "8",
//     name: "Gafetes",
//     slug: "gafetes",
//     img: "gafetes-01.png",
//     articles: 0,
//   },
//   {
//     id: "9",
//     name: "Señalamientos",
//     slug: "senalamientos",
//     img: "senalamientos-01.png",
//     articles: 0,
//   },
//   {
//     id: "10",
//     name: "Porta escritorio",
//     slug: "porta-escritorio",
//     img: "porta-escritorio-01.png",
//     articles: 0,
//   },
// ]

const CategoriesSlider = () => {
  const {categoryContext, setCategoryContext} = useGlobalContext()

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:gap-10 font-bold text-[24px] sm:text-[32px] pb-[30px] leading-8 sm:leading-4">
        <h1 className="">Explora nuestras categorias </h1>
      </div>
      <div className="relative flex gap-7 overflow-x-auto overflow-y-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-[#B6B9C2] scrollbar-corner-orange-600 pb-5">
        <div className="flex flex-col gap-7 justify-between">
          <HorizontalCrad
            image={"images/categories/" + categoryList[1].img}
            name={categoryList[1].name}
            articles={categoryList[1].articles}
            id={categoryList[1].id}
          />
          <HorizontalCrad
            image={"images/categories/" + categoryList[2].img}
            name={categoryList[2].name}
            articles={categoryList[2].articles}
            id={categoryList[2].id}
          />
        </div>
        <div className="flex gap-7 justify-between">
          <VerticalCrad
            image={"images/categories/" + categoryList[3].img}
            name={categoryList[3].name}
            articles={categoryList[3].articles}
            id={categoryList[3].id}
          />
          <VerticalCrad
            image={"images/categories/" + categoryList[4].img}
            name={categoryList[4].name}
            articles={categoryList[4].articles}
            id={categoryList[4].id}
          />
        </div>
        <div className="flex flex-col gap-7 justify-between">
          <HorizontalCrad
            image={"images/categories/" + categoryList[5].img}
            name={categoryList[5].name}
            articles={categoryList[5].articles}
            id={categoryList[5].id}
          />
          <HorizontalCrad
            image={"images/categories/" + categoryList[6].img}
            name={categoryList[6].name}
            articles={categoryList[6].articles}
            id={categoryList[6].id}
          />
        </div>
        <div className="flex gap-7 justify-between">
          <VerticalCrad
            image={"images/categories/" + categoryList[7].img}
            name={categoryList[7].name}
            articles={categoryList[7].articles}
            id={categoryList[7].id}
          />
          <VerticalCrad
            image={"images/categories/" + categoryList[8].img}
            name={categoryList[8].name}
            articles={categoryList[8].articles}
            id={categoryList[8].id}
          />
        </div>
        <div className="flex flex-col gap-7 justify-between">
          <HorizontalCrad
            image={"images/categories/" + categoryList[9].img}
            name={categoryList[9].name}
            articles={categoryList[9].articles}
            id={categoryList[9].id}
          />
          <HorizontalCrad
            image={"images/categories/" + categoryList[10].img}
            name={categoryList[10].name}
            articles={categoryList[10].articles}
            id={categoryList[10].id}
          />
        </div>
      </div>
      <div>
        <Link
          href="/productos"
          className="group flex justify-center items-center gap-4 mt-16"
        >
          <p className="text-xl font-bold">Ver todas</p>
          <span className="group-hover:animate-rigthArrow">
            <svg
              fill="#000000"
              width="26px"
              height="26px"
              viewBox="0 0 1920.00 1920.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.019200000000000002"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="38.4"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="m1304.824 345.002-81.25 81.249 476.466 476.582H0v114.922h1700.04l-476.466 476.465 81.25 81.25L1920 960.293z"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default CategoriesSlider
