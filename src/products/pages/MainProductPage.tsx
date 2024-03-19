import { useEffect, useState } from "react"
import { TableProductComponent } from "../components/TableProductComponent"
import { Product } from "../interfaces/Product.interface"
import { ProductService } from "../services/ProductService"
import { SearchBarComponents } from "../components/SearchBarComponents"
import { FetchApiUtils } from "../../shared/utils/FetchApiUtils"


export const MainProductPage = () => {

  const [listProduct, setListProduct] = useState<Product[]>([])

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

  const searchProduct=async (text:string)=>{
    console.log("searching; ", text);
      try {
        const result =await ProductService.findProductByName(text);
        console.log("searched ", result);
        setListProduct(result)
      } catch (error) {
        setListProduct([])
        console.error("[ERROR]", error);
      }
  }

  return (
    <>
      <SearchBarComponents onSearchProduct={searchProduct} onListProducts={loadProducts}></SearchBarComponents>
      <TableProductComponent listProducts={listProduct}>
      </TableProductComponent>
      </>
  )
}
