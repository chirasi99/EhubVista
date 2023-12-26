"use client";

import React from 'react'
import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import { formatPrice } from "@/utils/formatPrice";
import Link from 'next/link';
import { truncateText } from '@/utils/truncateText';
import Image from 'next/image';
import SetQuantity from '../components/products/SetQuantity';
import { useCart } from '@/hooks/useCart';




interface ItemContentProps {
        item: CartProductType;
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {
        const {handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease} = useCart();
  return (
    <div className="grid grid-cols-5 gap-4 text-sm border-t-[1.5px] md:text-sm border-slate-200 py-4 items-center">
        <div className="flex col-span-2 gap-2 justify-self-start md:gap-4">
                        <Link href={`/product/${item.id}`}>
                                <div className='relative w-[70px] aspect-square'>
                                        <Image src={item.selectedImg.image} fill alt={item.name} className="object-contain" />
                                </div>
                        </Link>
                <div className='flex flex-col justify-between'>
                        <Link href={`/product/${item.id}`}>
                                {truncateText(item.name)}
                        </Link>   
                        <div>{item.selectedImg.color}</div> 
                        <div className='w-[70px]'>
                                <button onClick={()=> {handleRemoveProductFromCart(item)}} className='underline text-slate-500 hover:text-slate-700'>Remove</button>
                        </div>
                </div>
        </div>
        <div className='justify-self-center'>{formatPrice(item.price)}</div>
        <div className='justify-self-center'><SetQuantity cartCounter={true} cartProduct={item} handleQtyIncrease={() => {handleCartQtyIncrease(item)}} handleQtyDecrease={()=>{handleCartQtyDecrease(item)}} /></div>
        <div className='font-semibold justify-self-end'>{formatPrice(item.price * item.quantity)}</div>
        

    </div>
  );
};

export default ItemContent;