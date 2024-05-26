import React from 'react'
import { products } from '../utils/constants'
import Product from './Product'

const ProductsPage = () => {
  return (
    <>
        {products.map(item=>{
            return(
                <div key={item.id}>
                    <Product data={item}/>
                </div>
            )
        })}
    </>
  )
}

export default ProductsPage