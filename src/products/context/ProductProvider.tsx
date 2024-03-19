

import React, { useState } from 'react'
import { ProductContext, ProductContextProps } from './ProductContext'
import { Product } from '../interfaces/Product.interface'

interface ProductProviderProps{
    children:JSX.Element| JSX.Element[]
}

export const ProductProvider = ({children}:ProductProviderProps) => {

    const [product, setProduct] = useState<Product>({
        category: null,
        productName:"",
        idProduct:1,
        status:1,
        stock:3,
        unitPrice:3
      })

    const INITVALUES:ProductContextProps={
        product,
        setProduct
    }


  return (
    <ProductContext.Provider value={INITVALUES}>
        {children}
    </ProductContext.Provider>
  )
}
