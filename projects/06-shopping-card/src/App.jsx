import { products as initialProducts} from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { useState } from 'react'
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()


  const filteredPoducts = filterProducts(products)
  
  return (
    <>
      <Header/>
      <Products products={ filteredPoducts } />
      { IS_DEVELOPMENT && <Footer  /> }
    </>

  )
}

export default App