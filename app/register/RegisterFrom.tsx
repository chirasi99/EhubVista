"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import Heading from '@/app/components/Heading';
import Input from '@/app/components/inputs/Input';
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from '../components/products/Button';
import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { SafeUser } from '@/types';
import { useEffect } from 'react';


interface RegisterFormProps{
        currentUser: SafeUser | null;
}

const RegisterFrom:React.FC<RegisterFormProps> = ({currentUser}) => {
        const [isLoading, setIsLoading] = React.useState(false);
        const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
                defaultValues: {
                        name: '',
                        email: '',
                        password: '',
                },
        });
        
        const router = useRouter(); 
        useEffect(() => {
                if(currentUser){
                        router.push('/cart')
                        router.refresh();    
                }
                
        },[]);
        
        const onSubmit: SubmitHandler<FieldValues> = (data) => {
                setIsLoading(true);
                console.log(data);
                axios.post('/api/register', data).then(()=>{
                        toast.success('Account created successfully');
                  signIn('credentials', {
                        email: data.email,
                        password: data.password,
                        redirect: false,
                  }).then((callback)=>{
                        if(callback?.ok){
                                router.push('/cart')
                                router.refresh()
                                toast.success('Logged in')
                                
                        }
                        if(callback?.error){
                                toast.error(callback.error)
                        }
                  });   
                }).catch(()=> toast.error('Something went wrong')).finally(()=> {setIsLoading(false);});
        };
        
        if(currentUser) return <p className='text-center'>Logged in. Redirecting.....</p>
                
        
  return (
    <>
        <Heading title="Continue with E-HubVista"/>
        <Button outline label="Continue with Google" icon={AiOutlineGoogle} onClick={()=>{signIn('google')}} />
        <hr className='w-full h-px bg-slate-300'/>
        <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
        <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password" />
        <Button label = {isLoading ? 'Loading...' : 'Sign Up'} onClick={handleSubmit(onSubmit)} />
        <p className='text-sm'>Already have an account? <Link className='underline' href="/login">Login</Link> 
        </p>
    </>
  )
}

export default RegisterFrom