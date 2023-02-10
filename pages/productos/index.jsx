import {useState, useEffect} from "react"
import {data} from "../../data/data"
import ProductCard from "../../components/products/product"
import uuid from "react-uuid"

export const getStaticProps = async () => {
  return {
    props: {
      data,
    },
  }
}

const Productos = ({data}) => {
  const [productsList, setProductsList] = useState(data?.products)
  const [input, setInput] = useState("")

  const categoryList = data?.categories

  const handleInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const displayAllClick = (categoryObj) => {
    categoryList.map((category) => (category.active = false))
    categoryList.map((category) =>
      category?.subcategories
        ? category?.subcategories?.map((subcategory) => {
            subcategory.active = false
          })
        : null
    )
  }

  const handleCategoryClick = (categoryObj) => {
    categoryList.map((category) => (category.active = false))
    categoryList.map((category) =>
      category?.subcategories
        ? category?.subcategories?.map((subcategory) => {
            subcategory.active = false
          })
        : null
    )
    categoryObj.active = true
    if (categoryObj.id == "0") {
      setProductsList(data?.products)
    } else {
      setProductsList(
        data?.products.filter(
          (product) => product.categories_ids[0] === categoryObj.id
        )
      )
    }
  }

  const handleSubcategoryClick = (subcategoryObj) => {
    categoryList.map((category) =>
      category?.subcategories
        ? category?.subcategories?.map((subcategory) => {
            subcategory.active = false
          })
        : null
    )
    subcategoryObj.active = true
    setProductsList(
      data?.products?.filter(
        (product) => product.subcategories_ids === subcategoryObj.id
      )
    )
  }

  return (
    <div className="pt-16 md:pt-0">
      <div className="flex justify-center items-center h-12 bg-darkBlue text-background mb-2">
        <p className="text-[12px] md:text-base">
          Entregas urgentes en menos de 24 horas
        </p>
        <span className="text-[10px] md:text-xs">
          &nbsp;&nbsp;*Aplican restricciones
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex p-2 mb-2">
          <input
            type="text"
            onChange={handleInputChange}
            value={input}
            placeholder="Busca tu producto..."
            className="py-2 w-full max-w-[355px] bg-background rounded-lg px-4 shadow-md"
          />
          <span
            className="absolute flex justify-center items-center ml-[315px] mt-[6px] text-darkBlue"
            onClick={() => setInput("")}
          >
            {input ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mx-auto my-auto text-darkBlue cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mx-auto my-auto text-darkBlue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </span>
        </div>
        <div>
          <div>
            <h1>Categorias</h1>
            <div className="flex py-2 overflow-x-auto scrollbar-none mb-2">
              {categoryList.map((category) => {
                return (
                  <>
                    <div
                      key={uuid()}
                      className={`px-2 py-1 m-1 rounded-md my-auto text-sm w-fit border-0 cursor-pointer max-h-7 whitespace-nowrap shadow-md ${
                        category.active
                          ? "shadow-none"
                          : "hover:bg-[#efefef] text-darkBlue"
                      }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.name}
                    </div>
                  </>
                )
              })}
            </div>
          </div>
          <div>
            {categoryList.map((category) =>
              category.active && category.subcategories ? (
                <div key={uuid()}>
                  <h1>Subcategorias</h1>
                  <div className="flex py-2 overflow-x-auto scrollbar-none">
                    {category.subcategories.map((subcategory) => (
                      <div
                        key={uuid()}
                        className={`px-2 py-1 m-1 rounded-md my-auto text-sm w-fit border-0 cursor-pointer max-h-7 whitespace-nowrap shadow-md ${
                          subcategory.active
                            ? "shadow-none"
                            : "hover:bg-[#efefef] text-darkBlue"
                        }`}
                        onClick={() => handleSubcategoryClick(subcategory)}
                      >
                        {subcategory?.name}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="md:flex md:flex-wrap md:gap-5 md:mt-5">
          {productsList.map((product) => {
            if (product?.title?.toLowerCase().includes(input) || input === "")
              return (
                <div key={uuid()}>
                  <ProductCard
                    img={`images/allProducts/${product?.images[0]}`}
                    title={product?.title}
                    url={product?.slug}
                  />
                </div>
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default Productos
