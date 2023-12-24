'use client';

import { CartProductType, selectedImgType  } from "@/app/product/[productId]/ProductDetails";


interface SetColorProps {
        images: selectedImgType[];
        cartProduct: CartProductType;
        handleColorSelect: (color: selectedImgType) => void;
}
const SetColor: React.FC<SetColorProps> = ({images,cartProduct,handleColorSelect,}) => {
        return(
          <div>
                <div className="flex items-center gap-4">
                        <span className="font-semibold">COLOR:</span>
                <div className="flex gap-1">
                        {images.map((image)=> {
                        return (
                                <div key={image.color} onClick={()=> handleColorSelect(image)} className={`h-7 w-7 rounded-full border-teal-300 flex items-center ${cartProduct.selectedImg.color == image.color ? "border-[1.5px]" : "border-none"}`}>
                                <div style={{background: image.colorCode}} className="w-5 h-5 border-[1.2px] rounded-full cursor-pointer border-slate-300">
                                        
                                </div>
                </div>
                );
                })}
               
         </div>
                </div>
          </div>
        );

};

export default SetColor;