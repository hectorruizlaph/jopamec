import {useState, useEffect} from "react"
import {data} from "../../data/data"

export const getStaticProps = async () => {
  return {
    props: {
      data,
    },
  }
}

// const listItem = ({id, slug, name, sub}) => {
//   return (
//     <li key={category.id}>
//       {category.subcategories === false ? (
//         <a
//           href="#"
//           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//         >
//           <span className="flex-1 ml-3 whitespace-nowrap">{category.name}</span>
//         </a>
//       ) : (
//         <div
//           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//           onClick={handleToggleClick(category.id)}
//         >
//           <span className="flex-1 ml-3 whitespace-nowrap">{category.name}</span>
//           <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
//             +
//           </span>
//         </div>
//       )}
//     </li>
//   )
// }

const Productos = ({data}) => {
  //   const [categories, setCategories] = useState(categories)
  // const [toggle, setToggle] = useState(false)

  // const handleToggleClick = (id) => {
  //   setToggle(!toggle)
  // }
  //   useEffect(() => {
  //     setCategories(categories)
  //   }, [])
  // console.log(data)

  return (
    <div>
      <div className="flex justify-center items-center h-12 bg-[#141B39]">
        <p className="text-base text-slate-50">
          Entregas urgentes en menos de 24 horas
        </p>
        <span className="text-xs">&nbsp;&nbsp;*Aplican restricciones</span>
      </div>
      <div className="flex w-full">
        <aside
          id="sidebar-multi-level-sidebar"
          className="w-fit h-full transition-transform -translate-x-full sm:translate-x-0 pl-12 pt-24"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
            <ul className="space-y-2">
              {data.categories.map((category) => (
                <li key={category.id}>
                  {category.subcategories === false ? (
                    <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer w-full">
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        {category.name}
                      </span>
                    </div>
                  ) : (
                    <select
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer w-full"
                      // onClick={handleToggleClick(category.id)}
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        {category.name}
                      </span>
                      {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        +
                      </span> */}
                      {category.subcategories.map((sub) => {
                        return (
                          <option key={sub.id} value="audi">
                            {sub.name}
                          </option>
                        )
                      })}
                    </select>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64"></div>
        <div></div>
      </div>
    </div>
  )
}

export default Productos
