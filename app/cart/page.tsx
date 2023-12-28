import React from 'react'
import Container from '../components/Container';
import CardClient from './CartClient';
import { getCurrentUser } from '@/actions/getCurrentUser';



const Cart = async() => {
  const currentUser = await getCurrentUser();
  
  return (
    <div className='pt-8'>
      <Container>
        <CardClient currentUser ={currentUser}/>
      </Container>
    </div>
  )
}

export default Cart;