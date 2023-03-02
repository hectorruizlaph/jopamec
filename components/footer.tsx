import React, { useState } from 'react'
import Link from 'next/link'


function Footer() {
    const [active, setActive] = useState(0)
    const [toggle, setToggle] = useState(false)

    const handleClick = (id: number, toggle: boolean) => {
        setToggle(!toggle)
        setActive(id)
    }

    return (
        <footer className="flex flex-col items-center bottom-0 pt-16 md:pt-36">
            {/* Mobile */}
            <div className="text-sm flex flex-col min-w-[90%]
            lg:hidden">
                <div className="border-t-2">
                    <h2 className="text-sm font-semibold uppercase my-4" onClick={() => handleClick(1, toggle)}>Productos</h2>
                    <ul className={active === 1 && toggle === true ? "text-gray-600 sm:min-w-[220px] pl-3 pb-3" : "hidden"}>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Reconocimientos</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Placas fundidas y fotograbadas</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Placas tipo industrial</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Yetis</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Pines</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Llaveros</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Platos/Charolas</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Gafetes</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Señalamientos</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Porta escritorio</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Placa grabada</Link>
                        </li>
                    </ul>
                </div>
                <div className="border-t-2">
                    <h2 className="text-sm font-semibold uppercase my-4" onClick={() => handleClick(2, toggle)}>INFORMACIÓN</h2>
                    <ul className={active === 2 && toggle === true ? "text-gray-600 sm:min-w-[140px] pl-3 pb-3" : "hidden"}>
                        <li className="">
                            <Link href="/galeria" className="hover:text-[#c89210] ">Galería</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Productos</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Acerca de nosotros</Link>
                        </li>
                        <li className="">
                            <Link href="/nosotros" className="hover:text-[#c89210] ">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="border-t-2">
                    <h2 className="text-sm font-semibold uppercase my-4" onClick={() => handleClick(3, toggle)}>CONTACTO</h2>
                    <ul className={active === 3 && toggle === true ? "text-gray-600 sm:min-w-[280px] pl-3 pb-3" : "hidden"}>
                        <li>
                            <a href="https://goo.gl/maps/ai5mLXdXqCEPYtQM6" className="flex" target="_blank" rel="noreferrer">
                                <div className="group flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:text-[#c89210] ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <div className="flex flex-col ml-2">
                                        <p className="hover:text-[#c89210]  sm:min-h-[25px]">Enrique C. Livas 314, Monterrey, NL</p>
                                        <p className="hover:text-[#c89210]  sm:min-h-[25px]">¿Cómo llegar?</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="flex sm:min-h-[40px]">
                            <div className="group flex items-center mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:text-[#c89210] ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <a href="#" className="hover:text-[#c89210]  ml-2">monterrey@placasjopamec.com</a>
                            </div>
                        </li>
                        <li className="flex mt-4">
                            <div className="group flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:text-[#c89210] ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <div className="flex flex-col">
                                    <a href="tel:+528183469582" className="hover:text-[#c89210]  ml-2 sm:min-h-[25px]">+52 81 8346 9582</a>
                                    <a href="tel:+528181148501" className="hover:text-[#c89210]  ml-2 sm:min-h-[25px]">+52 81 8346 9582</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="border-t-2">
                    <h2 className="text-sm font-semibold uppercase my-4" onClick={() => handleClick(4, toggle)}>HORARIOS</h2>
                    <ul className={active === 4 && toggle === true ? "text-gray-600 w-[230px] pl-3 pb-3" : "hidden"}>
                        <li className="flex justify-between mb-1">
                            <p className="">Lunes a viernes:</p>
                            <p>10:00am - 6:30pm</p>
                        </li>
                        <li className="flex justify-between mb-1">
                            <p className="">Sábado:</p>
                            <p>10:30am - 2:00pm</p>
                        </li>
                        <li className="flex justify-between">
                            <p className="">Domingo:</p>
                            <p>Cerrado</p>
                        </li>
                    </ul>
                </div>

            </div>
            {/* Desktop */}
            <div className="hidden text-sm gap-6
            md:max-w-[80%]
            lg:flex lg:flex-row lg:justify-between lg:flex-wrap lg:max-w-[90%]">
                <div>
                    <h2 className="mb-2 text-sm font-semibold uppercase">Productos</h2>
                    <ul className="text-gray-600 sm:min-w-[220px]">
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Reconocimientos</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Placas fundidas y fotograbadas</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Placas tipo industrial</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Yetis</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Pines</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Llaveros</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Platos/Charolas</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Gafetes</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Señalamientos</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Porta escritorio</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Placa grabada</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-2 text-sm font-semibold uppercase">INFORMACIÓN</h2>
                    <ul className="text-gray-600 sm:min-w-[140px]">
                        <li className="">
                            <Link href="/galeria" className="hover:text-[#c89210] ">Galería</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Productos</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] ">Acerca de nosotros</Link>
                        </li>
                        <li className="">
                            <Link href="/nosotros" className="hover:text-[#c89210] ">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-2 text-sm font-semibold uppercase">CONTACTO</h2>
                    <ul className="text-gray-600 sm:min-w-[280px]">
                        <li>
                            <a href="https://goo.gl/maps/ai5mLXdXqCEPYtQM6" className="flex" target="_blank" rel="noreferrer">
                                <div className="group flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:text-[#c89210] ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <div className="flex flex-col ml-2">
                                        <p className="hover:text-[#c89210]  sm:min-h-[25px]">Enrique C. Livas 314, Monterrey, NL</p>
                                        <p className="hover:text-[#c89210]  sm:min-h-[25px]">¿Cómo llegar?</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="flex sm:min-h-[40px]">
                            <div className="group flex items-center mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:text-[#c89210] ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <a href="#" className="hover:text-[#c89210]  ml-2">monterrey@placasjopamec.com</a>
                            </div>
                        </li>
                        <li className="flex mt-4">
                            <div className="group flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:text-[#c89210] ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <div className="flex flex-col">
                                    <a href="tel:+528183469582" className="hover:text-[#c89210]  ml-2 sm:min-h-[25px]">+52 81 8346 9582</a>
                                    <a href="tel:+528181148501" className="hover:text-[#c89210]  ml-2 sm:min-h-[25px]">+52 81 8346 9582</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="mb-2 text-sm font-semibold uppercase">HORARIOS</h2>
                    <ul className="text-gray-600 w-[230px]">
                        <li className="flex justify-between mb-1">
                            <p className="">Lunes a viernes:</p>
                            <p>10:00am - 6:30pm</p>
                        </li>
                        <li className="flex justify-between mb-1">
                            <p className="">Sábado:</p>
                            <p>10:30am - 2:00pm</p>
                        </li>
                        <li className="flex justify-between">
                            <p className="">Domingo:</p>
                            <p>Cerrado</p>
                        </li>
                    </ul>
                </div>

            </div>
            <hr className="w-[90%] h-[2px] my-4 border-2 rounded"></hr>
            <div className="flex flex-col justify-center items-center text-center text-xs mb-4 md:flex-row"><p>© Placas y Reconocimientos JOPAMEC {new Date().getFullYear()}</p> <span className="hidden lg:block px-2">|</span><p>Todos los derechos reservados</p>  <span className="hidden lg:block px-2">|</span> <div className="flex whitespace-nowrap justify-center items-center">Creado por <a href="https://my-app.mx/" target="_blank" rel="noreferrer" className="flex justify-center items-center">&nbsp; My App &nbsp; <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504 473" width="18">
                <title>My App</title>
                <desc>Logotipo My App</desc>
                <path fill="#239de3" d="M387 383a92 92 0 01-27 64 91 91 0 01-64 26H91a91 91 0 01-91-90V177a92 92 0 0127-64 91 91 0 0164-26h205a91 91 0 0191 90v206z"></path>
                <path fill="#d3556b" d="M397 118a56 56 0 01-57 56 58 58 0 01-40-16 55 55 0 01-17-40 56 56 0 0117-40 57 57 0 0188 8c6 10 9 21 9 32z"></path>
                <path fill="#fff" d="M234 191a95 95 0 0147 82v77l-1 6a17 17 0 01-17 11c-3 0-7-1-10-3l-6-8c-1-2-2-4-1-6v-13a86 86 0 01-142-15 102 102 0 010-97 94 94 0 01130-34zm-16 138c9-6 16-14 22-24 5-9 8-21 8-32 0-12-4-23-8-33a59 59 0 00-53-31 58 58 0 00-52 31 67 67 0 000 66 58 58 0 0052 31c11 0 21-3 31-8z"></path>
            </svg></a></div></div>
        </footer>

    )
}

export default Footer