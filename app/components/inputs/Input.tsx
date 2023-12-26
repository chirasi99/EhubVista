"use client";
import React from 'react'
import { FieldErrors, UseFormRegister, FieldValues } from 'react-hook-form';

interface InputProps {
        id:string;
        label:string;
        type?:string;
        disabled?:boolean;
        required?:boolean;
        register: UseFormRegister<FieldValues>;
        errors: FieldErrors;
}       

const Input:React.FC<InputProps> = ({id, label, type, disabled,required, register, errors}) => {
  return (
        <div className='relative w-full'>
        <input autoComplete='off' id={id} disabled={disabled} {...register(id, {required})} type={type} placeholder='' 
                className={`w-full p-4 pt-6 font-light transition border-2 rounded-md outline-none peer bg-white disabled:opacity-70 disabled:cursor-not-allowed
                ${errors[id] ? 'border-red-500 peer-focus:border-red-500' : 'border-slate-200 peer-focus:border-slate-500'}`} />
        <label htmlFor={id} className={`absolute z-10 duration-150 transform -translate-y-3 cursor-text text-md top-5 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}>
                {label}</label>
        </div>
  )
};

export default Input;