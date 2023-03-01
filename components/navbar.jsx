import React, {useState} from "react"
import {useRouter} from "next/router"

import Image from "next/image"
import Link from "next/link"

function Navbar() {
  const [isMenuMovilOpen, setMenuMovilOpen] = useState(false)

  const router = useRouter()
  const currentRoute = router.pathname

  //Navbar movil toggle
  const handleNavbarClick = () => {
    setMenuMovilOpen(!isMenuMovilOpen)
  }

  return (
    <nav
      className="fixed top-0 z-50 w-full bg-background
    sm:relative"
    >
      <div
        className="flex w-full justify-between z-50
      sm:flex-wrap sm:items-center sm:mx-auto"
      >
        <div>
          <Link href="/" className="flex items-center py-2 z-50 px-4">
            <Image src="/images/logo.svg" width={130} height={50} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="">
            <button
              type="button"
              className="absolute right-6 top-4 p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-50
              md:hidden"
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
                <ul className="fixed flex flex-col font-bold justify-center gap-2 items-center h-full w-full left-0 top-14 bg-background z-20">
                  <li className="flex justify-center items-center w-[95%] border-2 border-gray-100 rounded-lg">
                    <Link
                      href="/productos"
                      className={`py-3 ${
                        currentRoute === "/productos"
                          ? "text-gold font-semibold"
                          : ""
                      }`}
                      onClick={() => setMenuMovilOpen(false)}
                    >
                      Productos
                    </Link>
                  </li>
                  <li
                    className="flex justify-center items-center w-[95%] border-2 border-gray-100 rounded-lg"
                    onClick={() => setMenuMovilOpen(false)}
                  >
                    <Link
                      href="/nosotros"
                      className={`py-3 ${
                        currentRoute === "/nosotros"
                          ? "text-gold font-semibold"
                          : ""
                      }`}
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li
                    className="flex justify-center items-center w-[95%] border-2 border-gray-100 rounded-lg"
                    onClick={() => setMenuMovilOpen(false)}
                  >
                    <Link
                      href="/contacto"
                      className={`py-3 ${
                        currentRoute === "/contacto"
                          ? "text-gold font-semibold"
                          : ""
                      }`}
                    >
                      Contacto
                    </Link>
                  </li>
                  <li
                    className="flex justify-center items-center w-[95%] border-2 border-gray-100 rounded-lg"
                    onClick={() => setMenuMovilOpen(false)}
                  >
                    <Link
                      href="/galeria"
                      className={`py-3 ${
                        currentRoute === "/galeria"
                          ? "text-gold font-semibold"
                          : ""
                      }`}
                    >
                      Galería
                    </Link>
                  </li>
                  <div
                    className="w-full"
                    onClick={() => setMenuMovilOpen(false)}
                  >
                    <Link
                      href="/cotizar"
                      className="flex justify-center items-center"
                    >
                      <button className="bg-gold w-[95%]  py-[12px] rounded-lg text-background">
                        Cotizar
                      </button>
                    </Link>
                  </div>
                </ul>
              </div>
            ) : null}
          </div>
          <div
            className="hidden w-full text-lg
          md:block sm:w-auto"
          >
            <ul className="flex flex-row p-4 mt-4 space-x-8 text-lg font-medium text-gray-700">
              <li className="min-w-[50px]">
                <Link
                  href="/productos"
                  className={`block py-2 pl-3 pr-4 hover:text-[#c89210] active:text-[#c89210] hover:font-bold sm:p-0 text-center ${
                    currentRoute === "/productos"
                      ? "text-gold font-semibold"
                      : ""
                  }`}
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className={`block py-2 pl-3 pr-4 hover:text-[#c89210] active:text-[#c89210] hover:font-bold sm:p-0 text-center ${
                    currentRoute === "/nosotros"
                      ? "text-gold font-semibold"
                      : ""
                  }`}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className={`block py-2 pl-3 pr-4 hover:text-[#c89210] active:text-[#c89210] hover:font-bold sm:p-0 text-center ${
                    currentRoute === "/contacto"
                      ? "text-gold font-semibold"
                      : ""
                  }`}
                >
                  Contacto
                </Link>
              </li>
              <li className="min-w-[50px]">
                <Link
                  href="/galeria"
                  className={`block py-2 pl-3 pr-4 hover:text-[#c89210] active:text-[#c89210] hover:font-bold sm:p-0 text-center ${
                    currentRoute === "/galeria" ? "text-gold font-semibold" : ""
                  }`}
                >
                  Galería
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link href="/cotizar">
            <button
              className="hidden text-lg bg-gold px-[18px] py-[12px] rounded-lg text-background shadow-lg hover:shadow-xl
            md:block"
            >
              Cotizar
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
