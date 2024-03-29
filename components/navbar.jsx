import React, {useState} from "react"
import {useRouter} from "next/router"

import Image from "next/image"
import Link from "next/link"

import {Sling as Hamburger} from "hamburger-react"

function Navbar() {
  const [isMenuMovilOpen, setMenuMovilOpen] = useState(false)

  const router = useRouter()
  const currentRoute = router.pathname

  const handleClick = () => {
    setMenuMovilOpen(false)
  }
  return (
    <nav
      className=" font-roboto fixed top-0 z-50 w-full bg-background
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
          <div className="absolute mt-2 right-2 z-50 md:hidden">
            <Hamburger
              toggled={isMenuMovilOpen}
              toggle={setMenuMovilOpen}
              size={20}
              rounded
              duration={0.6}
            />
            <div
              className={
                isMenuMovilOpen
                  ? "fixed left-0 animate-openmenu h-full w-full bg-background z-20"
                  : "fixed animate-closemenu left-[100vw] h-full w-full bg-background z-20"
              }
            >
              <ul className="flex flex-col font-bold justify-center gap-2 items-center h-full w-full left-0 top-14">
                <li className="flex justify-center items-center w-[95%] border-2 border-gray-100 rounded-lg">
                  <Link
                    href="/productos"
                    className={`py-3 w-full text-center ${
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
                    className={`py-3 w-full text-center ${
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
                    className={`py-3 w-full text-center ${
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
                    className={`py-3 w-full text-center ${
                      currentRoute === "/galeria"
                        ? "text-gold font-semibold"
                        : ""
                    }`}
                  >
                    Galería
                  </Link>
                </li>
                <Link href="/contacto" className="w-full" onClick={handleClick}>
                  <div className="flex justify-center items-center">
                    <button className="bg-gold w-[95%]  py-[12px] rounded-lg text-background">
                      Hacer pedido
                    </button>
                  </div>
                </Link>
              </ul>
            </div>
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
          <Link href="/contacto">
            <button
              className="hidden text-lg bg-gold px-[18px] py-[12px] rounded-lg text-background shadow-lg hover:shadow-xl
            md:block"
            >
              Hacer pedido
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
