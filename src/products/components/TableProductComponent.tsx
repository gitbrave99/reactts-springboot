import React from 'react'
import { Product } from '../interfaces/Product.interface'

interface TableProductProps {
  listProducts: Product[],

}

export const TableProductComponent = ({ listProducts }: TableProductProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Category</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {
          listProducts?.map((prod) => (
            <tr key={prod.idProduct}>
              <th scope="row">{prod.idProduct}</th>
              <td>{prod.productName}</td>
              <td>{prod.unitPrice}</td>
              <td>{prod.stock}</td>
              <td>{prod.category?.categoryName}</td>
              <td>{prod.status}</td>
              <td>
                <button className="btn btn-danger">eliminar</button>
                <button className="btn btn-warning">edit</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
