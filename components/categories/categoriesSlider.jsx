import React from "react"
import HorizontalCrad from "./cards/horizontalCard"
import VerticalCrad from "./cards/verticalCard"

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
    id: "7",
    name: "Platos/Charolas",
    slug: "platos-charolas",
    img: "platos-charolas-01.png",
    articles: 18,
  },
  {
    id: "8",
    name: "Gafetes",
    slug: "gafetes",
    img: "gafetes-01.png",
    articles: 3,
  },
  {
    id: "9",
    name: "Señalamientos",
    slug: "senalamientos",
    img: "senalamientos-01.png",
    articles: 4,
  },
  {
    id: "10",
    name: "Porta escritorio",
    slug: "porta-escritorio",
    img: "porta-escritorio-01.png",
    articles: 6,
  },
  {
    id: "11",
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
  return (
    <div>
      <h1 className="font-bold text-[24px] md:text-[32px] pb-[30px] leading-8 md:leading-4">
        Explora nuestras categorias
      </h1>
      <div className="relative flex gap-7 overflow-x-auto overflow-y-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-lightBlue pb-5">
        <div className="flex flex-col gap-7 justify-between">
          {/* {categories.map((card) => {
            return (
              <div key={card.id}>
                <HorizontalCrad
                  image={"images/categories/" + card.img}
                  name={card.name}
                  articles={card.articles}
                  link={card.slug}
                />
              </div>
            )
          })} */}
          <HorizontalCrad
            image={"images/categories/" + categories[0].img}
            name={categories[0].name}
            articles={categories[0].articles}
            link={categories[0].slug}
          />
          <HorizontalCrad
            image={"images/categories/" + categories[1].img}
            name={categories[1].name}
            articles={categories[1].articles}
            link={categories[1].slug}
          />
        </div>
        <div className="flex gap-7 justify-between">
          <VerticalCrad
            image={"images/categories/" + categories[2].img}
            name={categories[2].name}
            articles={categories[2].articles}
            link={categories[2].slug}
          />
          <VerticalCrad
            image={"images/categories/" + categories[3].img}
            name={categories[3].name}
            articles={categories[3].articles}
            link={categories[3].slug}
          />
        </div>
        <div className="flex flex-col gap-7 justify-between">
          <HorizontalCrad
            image={"images/categories/" + categories[4].img}
            name={categories[4].name}
            articles={categories[4].articles}
            link={categories[4].slug}
          />
          <HorizontalCrad
            image={"images/categories/" + categories[5].img}
            name={categories[5].name}
            articles={categories[5].articles}
            link={categories[5].slug}
          />
        </div>
        <div className="flex gap-7 justify-between">
          <VerticalCrad
            image={"images/categories/" + categories[6].img}
            name={categories[6].name}
            articles={categories[6].articles}
            link={categories[6].slug}
          />
          <VerticalCrad
            image={"images/categories/" + categories[7].img}
            name={categories[7].name}
            articles={categories[7].articles}
            link={categories[7].slug}
          />
        </div>
        <div className="flex flex-col gap-7 justify-between">
          <HorizontalCrad
            image={"images/categories/" + categories[8].img}
            name={categories[8].name}
            articles={categories[8].articles}
            link={categories[8].slug}
          />
          <HorizontalCrad
            image={"images/categories/" + categories[9].img}
            name={categories[9].name}
            articles={categories[9].articles}
            link={categories[9].slug}
          />
        </div>
        {/* <div className="flex gap-7 justify-between">
          <VerticalCrad
            image={"images/categories/" + categories[10].img}
            name={categories[10].name}
            articles={categories[10].articles}
            link={categories[10].slug}
          />
        </div> */}
      </div>
      {/* <div className="flex gap-7 justify-between animate-scrollLeft">
        {categories.map((card) => {
          return (
            <div key={card.id}>
              <HorizontalCrad
                image={"images/categories/" + card.img}
                name={card.name}
                articles={card.articles}
                link={card.slug}
              />
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default CategoriesSlider
