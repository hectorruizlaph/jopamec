import React, {useState, useRef} from "react"
import {useOnHoverOutside} from "../hooks/useOnHoverOutside"
import ProductsMenue from "./productsMenu"

import Image from "next/image"
import Link from "next/link"

function Navbar() {
  const dropdownRef = useRef(null) // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false)
  const [isMenuMovilOpen, setMenuMovilOpen] = useState(false)

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false)
  }
  useOnHoverOutside(dropdownRef, closeHoverMenu) // Call the hook

  //Navbar movil toggle

  const handleNavbarClick = () => {
    setMenuMovilOpen(!isMenuMovilOpen)
  }

  return (
    <nav className="fixed md:relative z-50 w-full bg-background">
      <div className="flex w-full md:flex-wrap md:items-center justify-between md:mx-auto z-50">
        <div>
          <Link href="/" className="flex items-center py-2 z-50 px-4">
            <Image src="/images/logo.svg" width={130} height={50} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="">
            <button
              type="button"
              className="absolute right-6 top-4 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-50"
              onClick={handleNavbarClick}
            >
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
            {isMenuMovilOpen ? (
              <div className="md:hidden overflow-hidden">
                <ul className="fixed flex flex-col gap-8 h-full w-full left-0 top-14 bg-background z-20">
                  <li className="pt-8">
                    <Link
                      href="/productos"
                      className="font-bold  text-left p-6"
                    >
                      Productos
                    </Link>
                  </li>
                  <li
                    className="min-w-[50px]"
                    onClick={() => setMenuMovilOpen(false)}
                  >
                    <Link href="/galeria" className="font-bold  text-left p-6">
                      Galería
                    </Link>
                  </li>
                  <li onClick={() => setMenuMovilOpen(false)}>
                    <Link href="/nosotros" className="font-bold  text-left p-6">
                      Nosotros
                    </Link>
                  </li>
                  <li onClick={() => setMenuMovilOpen(false)}>
                    <Link href="/contacto" className="font-bold  text-left p-6">
                      Contacto
                    </Link>
                  </li>
                  <div onClick={() => setMenuMovilOpen(false)}>
                    <Link href="/cotizar" className="font-bold  text-left p-6">
                      <button className="bg-gold px-[18px] py-[12px] rounded-lg text-background shadow-lg hover:shadow-2xl">
                        Cotizar
                      </button>
                    </Link>
                  </div>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="hidden w-full md:block md:w-auto">
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
          <Link href="/cotizar">
            <button className="bg-gold px-[18px] py-[12px] rounded-lg hidden md:block text-background shadow-lg hover:shadow-2xl">
              Cotizar
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
