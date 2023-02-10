import Image from "next/image"
import {data} from "../../data/data"
import ProductCard from "../../components/products/product"
export const getStaticPaths = async () => {
  const paths = data.products.map((product) => {
    return {params: {slug: product.slug}}
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug
  const product = data.products.filter((p) => p.slug === slug)
  return {
    props: {product},
  }
}

//       title: "Placa fundida en bronce",
//       slug: "placa-fundida-01",
//       folder: "fundicion/placas-fundidas",
//       images: ["PLACA-FUNDIDA-CECILIO.png"],
//       content: "Placa fundida en bronce. Una sola pieza con espesor de 1 cm",
//       categories_ids: ["2"],
//       subcategories_ids: "101",

const Product = ({product}) => {
  const cleanProduct = product[0]
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-7 pt-[60px]">
        <div className="hidden md:block py-10 md:min-w-[50%]">
          <Image
            src={`/images/allProducts/${cleanProduct.images[0]}`}
            width={600}
            height={600}
            alt="producto"
            className="mx-auto"
          />
        </div>
        <div className="md:hidden py-10">
          <Image
            src={`/images/allProducts/${cleanProduct.images[0]}`}
            width={330}
            height={330}
            alt="producto"
            className="mx-auto"
          />
        </div>
        <div className="md:flex md:flex-col md:gap-14 md:justify-center">
          <div>
            <p className="text-lg font-bold md:text-2xl">
              {cleanProduct.title}
            </p>
            <p className="text-base">{cleanProduct.content}</p>
          </div>
          <div>
            <p className="text-center font-semibold text-lg md:text-start">
              Personalizamos tu proyecto
            </p>
            <p>
              Se pueden hacer distintas combinaciones de tipografía, textos y
              materiales. Contáctanos para más información.
            </p>
          </div>
          <div className="flex">
            <button className="w-full py-3 rounded-3xl bg-gold text-background font-manrope text-lg">
              Cotizar ahora
            </button>
            <a
              href={`https://wa.me/528123789941?text=Me+podrían+dar+más+información+sobre+el+producto:+${cleanProduct.title},+ https://placasjopamec.com/productos/${cleanProduct.slug}`}
              rel="noreferrer"
              target="_blank"
              className=" flex items-center justify-center h-[52px] w-[52px]"
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
        {/* //  title: "Placa fundida en bronce",
//       slug: "placa-fundida-01",
//       folder: "fundicion/placas-fundidas",
//       images: ["PLACA-FUNDIDA-CECILIO.png"],
//       content: "Placa fundida en bronce. Una sola pieza con espesor de 1 cm",
//       categories_ids: ["2"],
//       subcategories_ids: "101", */}
      </div>
      <div>
        <div className="flex justify-center items-center py-8 gap-5">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Image
              height={32}
              width={32}
              src="/icons/facebook.svg"
              alt="whatsapp"
              className="cursor-pointer"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Image
              height={32}
              width={32}
              src="/icons/twitter.svg"
              alt="whatsapp"
              className="cursor-pointer"
            />
          </a>
        </div>
        {data.products.map((product) => {
          cleanProduct.categories_ids[0] == product.categories_ids[0] ? (
            <ProductCard
              img={`images/allProducts/${product?.images[0]}`}
              title={product.title}
              url={product.slug}
            />
          ) : null
        })}
      </div>
    </div>
  )
}

export default Product
