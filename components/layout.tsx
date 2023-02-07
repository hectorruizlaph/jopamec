import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="bg-[#FCFCFC] font-manrope md:px-32 md:pt-[40px] text-base">
            <Navbar />
            <main className="px-3">{children}</main>
            <Footer />
        </div>
    )
}