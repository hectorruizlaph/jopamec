import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="bg-[#FCFCFC] font-manrope px-32 pt-[40px] text-base">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}