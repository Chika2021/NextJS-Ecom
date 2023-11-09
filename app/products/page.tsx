import getAllProducts from '@/lib/products/getAllProducts'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import React from 'react'




const metadata: Metadata = {
    title: 'Products'
}

async function ProductPage() {

    const productData: Promise<Product[]> =   getAllProducts()

    const products = await productData

    // console.log(products)

    return (
        <div  className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10'>

            {
                products.map(product => {
                    return (
                       
                        <div>
                         
                         <Link href={{pathname:'/singlepage' , query:{_id:product?._id}}} key={product._id} >

                                <div className='border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300'>
                                    
                                    <Image 
                                        src={product?.image}
                                        width={500}
                                        height={500}
                                        alt='product image'
                                        className='w-full h-80 object-cover'
                                    />
                                </div>
                                <div className='px-4 pb-2 text-sm flex flex-col gap-1'>
                                    <p className='text-gray-600'>{product?.title }</p>
                                    <p className='font-semibold'>${product?.price }</p>

                                    <div className='flex items-center justify-between'>
                                        <button>Add To Cart</button>
                                        <button className='uppercase text-xs font-semibold hover:text-blue-700 duration-200'>More Info</button>
                                    </div>
                                </div>
                        </Link>
                       </div>
                    )
                })
            }
        </div>
    )



}

export default ProductPage
