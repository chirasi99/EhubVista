'use client';
import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import React from 'react'

interface SetQuantityProps {
          cartCounter? : boolean;
          cartProduct : CartProductType;
          handleQtyIncrease : () => void;
          handleQtyDecrease : () => void;
        }

const btnStyles = 'px-2 border-[1.2px] border-slate-300 roundedr';

const SetQuantity:React.FC<SetQuantityProps> = ({
                cartCounter,
                cartProduct,
                handleQtyIncrease,
                handleQtyDecrease,
}) => (
        <div className='flex items-center gap-8'>
                {cartCounter ? null : <div className='font-semibold'>QUANTITY</div>}
                <div className='flex items-center gap-4 text-base'>
                        <button onClick={handleQtyDecrease} className='btnStyles'>-</button>
                        <div>{cartProduct.quantity}</div>
                        <button onClick={handleQtyIncrease} className='btnStyles'>+</button>
                </div>
        </div>
)

export default SetQuantity