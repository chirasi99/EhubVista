
import React from 'react'

const FormWrapNew = ({children}:{children:React.ReactNode}) => {
  return (
    // not include image here
    <div className='flex items-center justify-center h-full pt-24 pb-12 min-h-fit'>
       <div className='max-w-[650px] w-full flex-col flex gap-6 items-center shadow-xl shadow-slate-200 rounded-md p-4 md:p-8'>
        {children}
        </div>
    </div>
  );
};

export default FormWrapNew;