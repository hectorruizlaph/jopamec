import Hero from '../components/hero'
import CategoriesSlider from '../components/categories/categoriesSlider'
import Clients from '../components/clients/index'
import Products from '../components/products/index'
import WhyUs from '../components/whyUs'

export default function Home() {
  return (
    <div className="flex flex-col gap-36 font-manrope overflow-x-hidden">
      <Hero />
      <CategoriesSlider />
      <Clients />
      <Products />
      <WhyUs />
    </div>
  )
}
