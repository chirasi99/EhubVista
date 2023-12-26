import React from 'react';
import Container from '@/app/components/Container';
import ProductDetails from './ProductDetails';
import ListRating from '@/app/components/products/ListRating';
import { products } from '@/utils/products';

interface IPrams {
        productId?: string
}

const Product = ({params}: {params: IPrams}) => {
        console.log('params', params)
        
const product = products.find((item) => item.id === params.productId);

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