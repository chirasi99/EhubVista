import React from 'react';
import Container from '@/app/components/Container';
import FormWrap from '@/app/components/FormWrap';
import RegisterFrom from './RegisterFrom';
import { getCurrentUser } from '@/actions/getCurrentUser';



const Register = async() => {
  const currentUser = await getCurrentUser();
  return (
    <Container> 
        <FormWrap>
          <RegisterFrom currentUser={currentUser}/>
        </FormWrap>
    </Container> 
  );
};

export default Register;