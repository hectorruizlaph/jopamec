import React, {useState, useRef} from "react"
import {useOnHoverOutside} from "../hooks/useOnHoverOutside"
import ProductsMenue from "./productsMenu"

import Image from "next/image"
import Link from "next/link"

function Navbar() {
  const dropdownRef = useRef(null) // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false)

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false)
  }

  useOnHoverOutside(dropdownRef, closeHoverMenu) // Call the hook
  return (
    <nav className="dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div>
          <Link href="/" className="flex items-center py-2">
            <Image src="/images/logo.svg" width={130} height={50} alt="logo" />
          </Link>
        </div>
        <div>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <div className="ml-[62px] mobile:hidden" ref={dropdownRef}>
                  <Link href="/productos">
                    <button
                      className="text-dark-grey-100 hover:text-[#c89210] active:text-[#c89210] hover:font-bold md:min-w-[70px] text-center"
                      onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
                    >
                      Productos
                    </button>
                  </Link>
                  {isMenuDropDownOpen && <ProductsMenue />}
                </div>
              </li>
              <li className="min-w-[50px]">
                <Link
                  href="/galeria"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#c89210] active:text-[#c89210] hover:font-bold md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-center"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#c89210] active:text-[#c89210] hover:font-bold md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:min-w-[65px] text-center"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#c89210] active:text-[#c89210] hover:font-bold md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:min-w-[65px] text-center"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="bg-gold px-[18px] py-[12px] rounded-lg text-background shadow-lg hover:shadow-2xl">
            Cotizar
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
