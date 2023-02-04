import React from 'react'
import Link from 'next/link'
import Image from "next/image"

function Footer() {
    return (
        <footer className="relative p-4 sm:p-6 dark:bg-gray-900 flex flex-col items-center bottom-0 ">
            <div className="md:flex md:justify-between md:gap-40 text-sm lg:max-w-[80%] pt-36">
                <div className="mb-2 md:mb-0 flex items-center">
                    {/* <Image src="/images/logo.svg" width={300} height={50} alt="logo" /> */}
                    <Image src="/images/icono-jopamec.svg" width={300} height={50} alt="25" />
                </div>
                <div>
                    <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">Productos</h2>
                    <ul className="text-gray-600 dark:text-gray-400 md:min-w-[220px]">
                        <li className="">
                            <Link href="/productos/reconocimientos" className="hover:text-[#c89210] hover:text-base">Reconocimientos</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Placas fundidas y fotograbadas</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Placas tipo industrial</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Yetis</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Pines</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Llaveros</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Platos/Charolas</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Gafetes</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Señalamientos</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Porta escritorio</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Placa grabada</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">INFORMACIÓN</h2>
                    <ul className="text-gray-600 dark:text-gray-400 md:min-w-[140px]">
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Galería</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Productos</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Acerca de nosotros</Link>
                        </li>
                        <li className="">
                            <Link href="/productos" className="hover:text-[#c89210] hover:text-base">Contacto</Link>
                        </li>
                    </ul>

                </div>
                <div className="pr-32">
                    <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">CONTACTO</h2>
                    <ul className="text-gray-600 dark:text-gray-400 md:min-w-[280px]">
                        <li className="">
                            <a href="https://goo.gl/maps/ai5mLXdXqCEPYtQM6" className="flex">
                                <div className="group flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:w-5 hover:h-5 group-hover:text-[#c89210] hover:text-base">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <div className="flex flex-col ml-2">
                                        <p className="hover:text-[#c89210] hover:text-base md:min-h-[25px]">Enrique C. Livas 314, Monterrey, NL</p>
                                        <p className="hover:text-[#c89210] hover:text-base md:min-h-[25px]">¿Cómo llegar?</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="flex md:min-h-[40px]">
                            <div className="group flex items-center mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:w-5 hover:h-5 group-hover:text-[#c89210] hover:text-base">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <a href="#" className="hover:text-[#c89210] hover:text-base ml-2">monterrey@placasjopamec.com</a>
                            </div>
                        </li>
                        <li className="flex mt-4">
                            <div className="group flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:w-5 hover:h-5 group-hover:text-[#c89210] hover:text-base">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <div className="flex flex-col">
                                    <a href="tel:+528183469582" className="hover:text-[#c89210] hover:text-[15px] ml-2 md:min-h-[25px]">+52 81 8346 9582</a>
                                    <a href="tel:+528181148501" className="hover:text-[#c89210] hover:text-base ml-2 md:min-h-[25px]">+52 81 8346 9582</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white mt-4">HORARIOS</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
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
            <hr className="w-[60%] h-[2px] my-4 border-0 rounded"></hr>
            <div className="flex text-sm">
                <p className="text-center flex justify-center items-center">© Placas y Reconocimientos JOPAMEC 2023 &nbsp;&nbsp; | &nbsp;&nbsp; Todos los derechos reservados &nbsp;&nbsp; | &nbsp;&nbsp; Creado por <a href="https://my-app.mx/" className="flex justify-center items-center">&nbsp; My App &nbsp; <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504 473" width="25">
                    <title>My App</title>
                    <desc>Logotipo My App</desc>
                    <path fill="#239de3" d="M387 383a92 92 0 01-27 64 91 91 0 01-64 26H91a91 91 0 01-91-90V177a92 92 0 0127-64 91 91 0 0164-26h205a91 91 0 0191 90v206z"></path>
                    <path fill="#d3556b" d="M397 118a56 56 0 01-57 56 58 58 0 01-40-16 55 55 0 01-17-40 56 56 0 0117-40 57 57 0 0188 8c6 10 9 21 9 32z"></path>
                    <path fill="#fff" d="M234 191a95 95 0 0147 82v77l-1 6a17 17 0 01-17 11c-3 0-7-1-10-3l-6-8c-1-2-2-4-1-6v-13a86 86 0 01-142-15 102 102 0 010-97 94 94 0 01130-34zm-16 138c9-6 16-14 22-24 5-9 8-21 8-32 0-12-4-23-8-33a59 59 0 00-53-31 58 58 0 00-52 31 67 67 0 000 66 58 58 0 0052 31c11 0 21-3 31-8z"></path>
                </svg></a></p>
            </div>
        </footer>

    )
}

export default Footer