import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="bg-[#FCFCFC] font-manrope px-3 pt-[10px] md:px-32 md:pt-[40px] text-base">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}