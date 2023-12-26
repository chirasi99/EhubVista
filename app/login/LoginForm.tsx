"use client";
import React from 'react'
import Heading from '@/app/components/Heading';
import Input from '@/app/components/inputs/Input';
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from '../components/products/Button';
import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';



const LoginFrom = () => {
        const [isLoading, setIsLoading] = React.useState(false);
        const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
                defaultValues: {
                        email: '',
                        password: '',
                },
        });
        const onSubmit: SubmitHandler<FieldValues> = async (data) => {
                setIsLoading(true);
                console.log(data);
        }
  return (
    <>
        <Heading title="Sign In for E-HubVista"/>
        <Button outline label="Continue with Google" icon={AiOutlineGoogle} onClick={()=>{}} />
        <hr className='w-full h-px bg-slate-300'/>
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
        <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password" />
        <Button label = {isLoading ? 'Loading...' : 'Login'} onClick={handleSubmit(onSubmit)} />
        <p className='text-sm'>Do not have an account? <Link className='underline' href="/register">Sign Up</Link> 
        </p>
    </>
  )
}

export default LoginFrom