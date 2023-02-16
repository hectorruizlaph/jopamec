import Navbar from './navbar'
import Footer from './footer'
import { GlobalContextProvider } from '../context/store'
interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="bg-[#FCFCFC] font-manrope text-base
        sm:px-2 sm:pt-[40px] 
        lg:px-32 lg:pt-[40px]">
            <Navbar />
            <GlobalContextProvider>
                <main className="px-2">{children}</main>
            </GlobalContextProvider>
            <Footer />
        </div>
    )
}

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }