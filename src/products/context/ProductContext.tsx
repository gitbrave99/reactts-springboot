import { Dispatch, SetStateAction, createContext } from "react";
import { Product } from "../interfaces/Product.interface";

export interface ProductContextProps{
    product: Product
    setProduct:Dispatch<SetStateAction<Product>>
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)