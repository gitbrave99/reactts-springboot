
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { MainProductPage } from './products/pages/MainProductPage'
import { ProductProvider } from './products/context/ProductProvider'

function App() {

  return (
    <>
    <ProductProvider>
     <MainProductPage></MainProductPage>
     </ProductProvider>
    </>
  )
}

export default App
