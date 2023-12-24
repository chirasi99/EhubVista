import { product } from '@/utils/product';
import React from 'react';
import Container from '@/app/components/Container';
import ProductDetails from './ProductDetails';
import ListRating from '@/app/components/products/ListRating';

interface IPrams {
        productId?: string
}

const Product = ({params}: {params: IPrams}) => {
        console.log('params', params)
        
  return (
    <div className='p-8'>
        <Container>
        <ProductDetails product = {product} />
        <div className='flex flex-col gap-4 mt-20'>
          <div>Add Ratings</div>
          <div><ListRating product={product} /></div>
        </div>
        </Container>
    </div>
  );
};

export default Product;