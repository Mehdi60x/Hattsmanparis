import { useState } from 'react'
import { StoreProvider, useStore } from './context/StoreContext'
import SplashScreen from './components/SplashScreen'
import Header from './components/Header'
import CartSidebar from './components/CartSidebar'
import Toast from './components/Toast'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
import ProductPage from './components/ProductPage'
import AboutPage from './components/AboutPage'

function Router() {
  const { route } = useStore()

  switch (route.page) {
    case 'category':
      return <CategoryPage categorySlug={route.categorySlug} />
    case 'product':
      return <ProductPage productId={route.productId} />
    case 'about':
      return <AboutPage />
    default:
      return <HomePage />
  }
}

function Shell() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
      <CartSidebar />
      <Toast />
    </>
  )
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <StoreProvider>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <Shell />
    </StoreProvider>
  )
}
