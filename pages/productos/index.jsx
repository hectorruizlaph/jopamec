import {useState, useEffect} from "react"
import {data} from "../../data/data"
import ProductCard from "../../components/products/product"
import uuid from "react-uuid"
import Faq from "../../components/faq"
import {useGlobalContext} from "../../context/store"
import Image from "next/image"
import {Tooltip} from "@material-tailwind/react"

export const getStaticProps = async () => {
  return {
    props: {
      data,
    },
  }
}

// Index for filter input with error margin
// let correctIndex

const Productos = ({data}) => {
  const {categoryContext} = useGlobalContext()

  const [productsList, setProductsList] = useState(data?.products)
  const [input, setInput] = useState("")
  const [listItems, setListItems] = useState(8)

  const categoryList = data?.categories
  // Context category for category clicked on home page
  useEffect(() => {
    if (categoryContext != "0") {
      categoryList.map((category) => (category.active = false))
      setProductsList(
        data.products.filter(
          (product) => product.categories_ids[0] === categoryContext
        )
      )
      categoryList.map((category) =>
        category.id === categoryContext ? (category.active = true) : null
      )
    }
  }, [categoryContext, categoryList, data.products])

  // Input filter for products
  // useEffect(() => {
  //   if (input !== "") {
  //     const res = data?.products?.filter((item, index) => {
  //       if (item.title.toLowerCase().includes(input)) {
  //         correctIndex = input.length
  //         return item.title.toLowerCase().includes(input)
  //       } else {
  //         return item.title
  //           .toLowerCase()
  //           .includes(input.substring(0, correctIndex))
  //       }
  //     })
  //     setProductsList(data?.products.filter((product) => product.title === res))
  //   } else {
  //     setProductsList(data?.products)
  //   }
  // }, [input, productsList, data?.products])

  const handleInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleCategoryClick = (categoryObj) => {
    setListItems(8)
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
    setListItems(8)
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
      <div
        className="flex justify-center items-center h-12 bg-darkBlue text-background mb-2 
      md:absolute md:min-w-full md:left-0"
      >
        <p className="text-[12px] md:text-base">
          Entregas urgentes en menos de 24 horas
        </p>
        <span className="text-[10px] md:text-xs">
          &nbsp;&nbsp;*Aplican restricciones
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:pt-12">
        {/* left section */}
        <div className="md:mt-10">
          {/* searchbar */}
          <div className="flex justify-between p-2 mb-2 md:w-[350px] md:mb-5">
            <input
              type="text"
              onChange={handleInputChange}
              value={input}
              placeholder="Busca tu producto..."
              className="py-2 w-full bg-background rounded-lg px-4 shadow-md focus:outline-0"
            />
            <span className="absolute  sm:relative sm:right-9 sm:-mr-7 flex justify-center items-center right-6 md:mt-0 mt-[6px] text-darkBlue">
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
          <div className="hidden md:block">
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
          <div className="md:hidden">
            <div>
              <p className="text-sm">Categorias</p>
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
                    <p className="text-sm">Subcategorias</p>
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
        <div className="flex flex-col justify-center items-center">
          <div
            className="flex flex-wrap w-full justify-center items-center 
          lg:justify-start lg:items-start md:gap-5 md:mt-5 md:ml-10"
          >
            {productsList.slice(0, listItems).map((product) => {
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
          {productsList.length > 8 ? (
            <div className="flex flex-col justify-center items-center">
              <Tooltip
                content="Ver más"
                placement="bottom"
                // animate={{
                //   mount: {scale: 1, y: 0},
                //   unmount: {scale: 0, y: 25},
                // }}
                className="bg-transparent text-gray-900"
              >
                <div
                  className="mt-4 cursor-pointer animate-bounce flex justify-center items-center rounded-full shadow-lg p-4"
                  onClick={() => setListItems(listItems + 8)}
                >
                  <Image
                    src="/icons/chevron-down.svg"
                    width={24}
                    height={24}
                    type="svg"
                    className=""
                    alt="chevron-down"
                  />
                </div>
              </Tooltip>
            </div>
          ) : null}
        </div>
      </div>
      <Faq />
    </div>
  )
}

export default Productos
