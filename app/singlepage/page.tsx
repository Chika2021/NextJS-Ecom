import { getProduct } from '@/lib/products/getProduct';
import Image from 'next/image';
import React from 'react'

type Props = {
  searchParams: { [key: string] : string | string[] | undefined};
};

export default async function SingleProduct ({searchParams}: Props) {

  const _idString = searchParams?._id;
  const _id = Number(_idString)
  const product = await getProduct(_id)


 
  return (
    <div className='max-w-screen-xl mx-auto flex items-center gap-10 xl:gap-0'>
      <Image 
        src={product?.image}
        alt ='Product Image'
        width={500}
        height={500}
      />

      <div className='flex flex-col gap-2'>
        <p className='text-xl font-semibold'>{product?.title}</p>
        <p>{product?.description}</p>
        <p>Price ${product?.price}</p>
        <p>Category: {product?.category}</p>
        <p>{product?.isNew && 'New Item'}</p>
      </div>

    </div>
  )
}
