import {data} from "../../data/data"

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

const Product = ({product}) => {
  const cleanProduct = product[0]
  return (
    <div>
      <p className="text-gold pt-32">{cleanProduct.title}</p>
      {/* <p>{product.name}</p>
      <p>{product.slug}</p> */}
    </div>
  )
}

export default Product
