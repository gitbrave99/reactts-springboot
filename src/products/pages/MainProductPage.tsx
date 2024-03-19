import { useContext, useEffect, useState } from "react"
import { TableProductComponent } from "../components/TableProductComponent"
import { Product } from "../interfaces/Product.interface"
import { ProductService } from "../services/ProductService"
import { SearchBarComponents } from "../components/SearchBarComponents"
import { ProductContext } from "../context/ProductContext"
import { ProductProvider } from "../context/ProductProvider"


export const MainProductPage = () => {

  const [listProduct, setListProduct] = useState<Product[]>([])
  const { product, setProduct } = useContext(ProductContext)

  useEffect(() => {
    loadProducts();
    return () => {

    }
  }, [])

  const loadProducts = async () => {
    try {
      const result = await ProductService.getListProducts();
      setListProduct(result);
    } catch (error) {
      setListProduct([]);
      console.error("[ERROR]", error);
    }
  }

  const searchProduct = async (text: string) => {
    console.log("searching; ", text);
    try {
      const result = await ProductService.findProductByName(text);
      console.log("searched ", result);
      setListProduct(result)
    } catch (error) {
      setListProduct([])
      console.error("[ERROR]", error);
    }
  }

  function resetProduct():void {
    setProduct({
      category:null,
      productName:"it works",
      status:2,
      stock:3,
      unitPrice:45,
      idProduct:0
    })
  }

  return (
    <>
      
        <br /><br />  
        <div>
        JSON {JSON.stringify(product)}
        </div>
        <br /><br />
        <button className="btn btn-success"
        onClick={resetProduct}
        >setear context prod</button>
        <SearchBarComponents onSearchProduct={searchProduct} onListProducts={loadProducts}></SearchBarComponents>
        <TableProductComponent listProducts={listProduct}/>
      
    </>
  )
}
