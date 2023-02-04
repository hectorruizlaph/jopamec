import {data} from "../../data/data2"

export const getStaticProps = async ({params}) => {
  const categories = data.categories.filter((p) => p.slug === params.slug)
  return {
    props: {
      category: data.categories[0],
    },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: data.categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

// import {useRouter} from "next/router"
// import fsPromises from "fs/promises"
// import path from "path"
// `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps(context) {
//   return {
//     Passed to the page component as props
//     props: {post: {}},
//   }
// }
const Product = ({category}) => {
  //   Render post...
  // }
  return (
    <div>
      <p>{category.id}</p>
      <p>{category.name}</p>
      <p>{category.slug}</p>
    </div>
  )
  // {
  //   categories.map((category) => (
  //     <div key={category.id}>
  //       <h1>{category.name}</h1>
  //     </div>
  //   ))
  // }
  // const Product = (props) => {
  //   const router = useRouter()
  //   const {slug} = router.query

  //   return (
  //     <>
  //       {/* <Head>
  //         <title>{data}</title>
  //         <meta title="description" content={data} />
  //       </Head>
  //       <div dangerouslySetInnerHTML={{__html: htmlString}} /> */}

  //       <h1>{slug}</h1>
  //       <h1>
  //         {props.products.categories.map((category) => {
  //           return (
  //             <div key={category.id}>
  //               <p>{category.slug}</p>
  //             </div>
  //           )
  //         })}
  //       </h1>

  //       {/* <div>
  //         {props.categories.map((category) => (
  //           <h2 key={category.id}>{category.slug}</h2>
  //         ))}
  //       </div> */}
  //     </>
  //   )
  // }

  // export const getStaticPaths = async () => {
  //   const paths = products.categories.map((category) => ({
  //     params: {
  //       slug: category.slug,
  //     },
  //   }))
  //   console.log("paths: ", paths)

  //   return {
  //     paths,
  //     fallback: false,
  //   }
  // }

  // export async function getStaticProps() {
  //   const products = (await import("../../data/data.json")).default

  //   const filePath = path.join(process.cwd(), "/data/data.json")
  //   const jsonData = await fsPromises.readFile(filePath)
  //   const objectData = JSON.parse(jsonData)
  //   console.log(objectData)
  //   console.log(objectData.categories[0].name)

  //   return {
  //     props: {products},
  //   }
}

export default Product
