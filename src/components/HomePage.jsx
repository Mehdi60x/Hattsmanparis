import HeroSection from './HeroSection'
import MarqueeBand from './MarqueeBand'
import CategoryCards from './CategoryCards'
import ProductGrid from './ProductGrid'
import BrandSection from './BrandSection'
import Newsletter from './Newsletter'

export default function HomePage() {
  return (
    <div className="page-fade">
      <HeroSection />
      <MarqueeBand />
      <CategoryCards />
      <ProductGrid />
      <BrandSection />
      <Newsletter />
    </div>
  )
}
