"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';
import { useCart } from '@/hooks/useCart';


const CartCount = () => {
        const router = useRouter();
        const {cartTotalQty} = useCart();
        
  return (
    <div className='relative cursor-pointer' onClick={()=> router.push('/cart') }>
       <div className='text-3xl'>
                <CiShoppingCart />
        </div> 
        <span className='absolute top-[-10px] right-[-10px] bg-slate-700 h-6 w-6 text-white rounded-full flex items-center justify-center text-sm'>{cartTotalQty}</span>
    </div>
  )
}

export default CartCount;