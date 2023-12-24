"use client";

import { CartProductType, selectedImgType } from '@/app/product/[productId]/ProductDetails';
import React from 'react';
import Image from 'next/image';


interface ProductImageProps {
        cartProduct: CartProductType;
        product: any;
        handleColorSelect : (value: selectedImgType) => void;
}

const ProductImage:React.FC<ProductImageProps> = ({
        cartProduct ,
        product,
        handleColorSelect,
        }) => {
        return <div className="grid grid-cols-6 h-full gap-2 max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                <div className='flex flex-col items-center justify-center h-full gap-4 border cursor-pointer max-h-[500px] min-h-[300px] sm:min-h-[400px]'>
                {product.images.map((image:selectedImgType) => {
                        return <div key={image.color} onClick={() => handleColorSelect(image)} className={`relative w-[80%] aspect-square rounded border-teal-300
                        ${cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none' }
                        `}>
                                <Image src={image.image} alt={image.color} fill className="object-contain" />
                        </div>
                })}
                        
                </div>
                 <div className='relative col-span-5 aspect-squre'>
                     <Image fill className='object-contain h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]' src={cartProduct.selectedImg.image} alt={cartProduct.selectedImg.color} />
                 </div>
        </div>    
};

export default ProductImage