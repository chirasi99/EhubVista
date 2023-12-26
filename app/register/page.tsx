import React from 'react';
import Container from '@/app/components/Container';
import FormWrap from '@/app/components/FormWrap';
import RegisterFrom from './RegisterFrom';


const Register = () => {
  return (
    <Container> 
        <FormWrap>
          <RegisterFrom />
        </FormWrap>
    </Container> 
  );
};

export default Register;