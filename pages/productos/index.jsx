import {useState, useEffect} from "react"
import {data} from "../../data/data"
import ProductCard from "../../components/products/product"
import uuid from "react-uuid"
import Faq from "../../components/faq"

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

  const handleCategoryClick = (categoryObj) => {
    categoryList.map((category) => (category.active = false))
    setInput("")
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
    <div className="pt-16 sm:pt-0">
      <div className="flex justify-center items-center h-12 bg-darkBlue text-background mb-2 sm:absolute sm:min-w-full sm:left-0">
        <p className="text-[12px] sm:text-base">
          Entregas urgentes en menos de 24 horas
        </p>
        <span className="text-[10px] sm:text-xs">
          &nbsp;&nbsp;*Aplican restricciones
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:pt-12">
        {/* left section */}
        <div className="sm:mt-10">
          {/* searchbar */}
          <div className="flex justify-between p-2 mb-2 sm:w-[350px] sm:mb-5">
            <input
              type="text"
              onChange={handleInputChange}
              value={input}
              placeholder="Busca tu producto..."
              className="py-2 w-full bg-background rounded-lg px-4 shadow-md "
            />
            <span className="absolute  sm:relative sm:right-9 sm:-mr-7 flex justify-center items-center right-6 sm:mt-0 mt-[6px] text-darkBlue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-8 h-8 mx-auto my-auto text-darkBlue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {/* )} */}
            </span>
          </div>
          {/* Desktop categories and subcategories */}
          <div className="hidden sm:block">
            {categoryList?.map((category) => (
              <div key={uuid()} id={category.id}>
                <div
                  className={`py-3 pl-4 border-l-2 border-darkBlue my-auto cursor-pointer ${
                    category.active
                      ? "border-l-4 border-gold font-semibold"
                      : "hover:bg-[#efefef] text-darkBlue rounded-r-lg"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.name}
                </div>
                <div>
                  {category.active && category.subcategories ? (
                    <div className="ml-6">
                      {category?.subcategories?.map((subcategory) => (
                        <div
                          key={subcategory.id}
                          className={`py-3 pl-4 border-l-2 border-darkBlue my-auto cursor-pointer ${
                            subcategory.active
                              ? "border-l-4 border-gold font-semibold"
                              : "hover:bg-[#efefef] text-darkBlue rounded-r-lg"
                          }`}
                          onClick={() => handleSubcategoryClick(subcategory)}
                        >
                          {subcategory.name}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          {/* Mobil categories and subcategories */}
          <div className="sm:hidden">
            <div>
              <h1 className="text-sm">Categorias</h1>
              <div className="flex py-2 overflow-x-auto scrollbar-none mb-2">
                {categoryList.map((category) => {
                  return (
                    <>
                      <div
                        key={uuid()}
                        className={`px-2 py-1 m-1 rounded-md my-auto text-sm w-fit border-0 cursor-pointer max-h-7 whitespace-nowrap shadow-md ${
                          category.active
                            ? "bg-lightBlue text-background"
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
                    <h1 className="text-sm">Subcategorias</h1>
                    <div className="flex py-2 overflow-x-auto scrollbar-none">
                      {category.subcategories.map((subcategory) => (
                        <div
                          key={uuid()}
                          className={`px-2 py-1 m-1 rounded-md my-auto text-sm w-fit border-0 cursor-pointer max-h-7 whitespace-nowrap shadow-md ${
                            subcategory.active
                              ? "bg-lightBlue text-background"
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
        </div>
        <div className="sm:flex sm:flex-wrap sm:gap-5 sm:mt-5 sm:ml-10">
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
      <Faq />
    </div>
  )
}

export default Productos
