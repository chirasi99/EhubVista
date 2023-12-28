import React from 'react'
import FormWrapNew from '@/app/components/FormWrapNew';
import Container from '@/app/components/Container';
import CheckoutClient from '@/app/checkout/CheckoutClient';


const Checkout = () => {
  return (
    <div className='p-8'>
        <Container>
                <FormWrapNew>
                      <CheckoutClient />
                </FormWrapNew>
        </Container>
    </div>
  )
}

export default Checkout