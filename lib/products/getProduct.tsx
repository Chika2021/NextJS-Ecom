import React from 'react'

export default async function getAllProducts() {

    const res = await fetch('https://jsonserver.reactbd.com/phone')

    if(!res.ok)
        throw new Error('Error Fetching User')

    return res.json()

}



export const getProduct = async (_id:number) => {
    const product  = await getAllProducts()
    const singleProduct = await product.find((product:any) => product._id = _id)

  return singleProduct
}
