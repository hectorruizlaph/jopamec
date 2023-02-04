import React from "react"
import HorizontalCrad from "./cards/horizontalCard"
import VerticalCrad from "./cards/verticalCard"

const categories = [
  {
    id: "1",
    name: "Reconocimientos",
    slug: "reconocimientos",
    img: "reconocimientos-01.png",
    articles: 0,
  },
  {
    id: "2",
    name: "Placas fundidas y fotograbadas",
    slug: "placas",
    img: "placas-01.png",
    articles: 0,
  },
  {
    id: "3",
    name: "Placas tipo industrial",
    slug: "placas-tipo-industrial",
    img: "placas-tipo-industrial-00.png",
    articles: 0,
  },
  {
    id: "4",
    name: "Grabados Laser",
    slug: "yetis",
    img: "grabado-laser-01.png",
    articles: 0,
  },
  {id: "5", name: "Pines", slug: "pines", img: "pines-01.png", articles: 0},
  {
    id: "6",
    name: "Llaveros",
    slug: "llaveros",
    img: "llaveros-01.png",
    articles: 0,
  },
  {
    id: "7",
    name: "Platos/Charolas",
    slug: "platos-charolas",
    img: "platos-charolas-01.png",
    articles: 0,
  },
  {
    id: "8",
    name: "Gafetes",
    slug: "gafetes",
    img: "gafetes-01.png",
    articles: 0,
  },
  {
    id: "9",
    name: "Señalamientos",
    slug: "senalamientos",
    img: "senalamientos-01.png",
    articles: 0,
  },
  {
    id: "10",
    name: "Porta escritorio",
    slug: "porta-escritorio",
    img: "porta-escritorio-01.png",
    articles: 0,
  },
]

const categories2 = [
  {
    id: "1",
    name: "Reconocimientos",
    slug: "reconocimientos",
    img: "reconocimientos-01.png",
    articles: 0,
  },
  {
    id: "2",
    name: "Placas fundidas y fotograbadas",
    slug: "placas",
    img: "placas-01.png",
    articles: 0,
  },
  {
    id: "3",
    name: "Placas tipo industrial",
    slug: "placas-tipo-industrial",
    img: "placas-tipo-industrial-00.png",
    articles: 0,
  },
  {
    id: "4",
    name: "Grabados Laser",
    slug: "yetis",
    img: "grabado-laser-01.png",
    articles: 0,
  },
  {id: "5", name: "Pines", slug: "pines", img: "pines-01.png", articles: 0},
  {
    id: "6",
    name: "Llaveros",
    slug: "llaveros",
    img: "llaveros-01.png",
    articles: 0,
  },
  {
    id: "7",
    name: "Platos/Charolas",
    slug: "platos-charolas",
    img: "platos-charolas-01.png",
    articles: 0,
  },
  {
    id: "8",
    name: "Gafetes",
    slug: "gafetes",
    img: "gafetes-01.png",
    articles: 0,
  },
  {
    id: "9",
    name: "Señalamientos",
    slug: "senalamientos",
    img: "senalamientos-01.png",
    articles: 0,
  },
  {
    id: "10",
    name: "Porta escritorio",
    slug: "porta-escritorio",
    img: "porta-escritorio-01.png",
    articles: 0,
  },
]

const CategoriesSlider = () => {
  return (
    <div>
      <h1 className="font-bold text-[32px] pb-[30px]">
        Explora nuestras categorias
      </h1>
      <div className="">
        <div className="flex gap-7 justify-between animate-scrollRigth">
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
        </div>
      </div>
      <div className="flex gap-7 justify-between animate-scrollLeft">
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
      </div>
    </div>
  )
}

export default CategoriesSlider
