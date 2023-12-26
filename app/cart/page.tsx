import React from 'react'
import Container from '../components/Container';
import CardClient from './CartClient';

const Cart = () => {
  return (
    <div className='pt-8'>
      <Container>
        <CardClient />
      </Container>
    </div>
  )
}

export default Cart;