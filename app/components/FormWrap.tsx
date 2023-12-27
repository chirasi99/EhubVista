
import React from 'react'

const FormWrap = ({children}:{children:React.ReactNode}) => {
  return (
    // not include image here
    // <div className='flex items-center justify-center h-full pt-24 pb-12 min-h-fit'>
    //    <div className='max-w-[650px] w-full flex-col flex gap-6 items-center shadow-xl shadow-slate-200 rounded-md p-4 md:p-8'>
    //     {children}
    //     </div>
    // </div>
    <div className='flex items-center justify-center h-full pt-10 pb-12 min-h-fit'>
      <div className='w-1/2'>
        <img
          src='https://images.pexels.com/photos/6214472/pexels-photo-6214472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  
          alt='Your Image Alt Text'
          className='h-[586px] rounded-md w-auto'
        />
      </div>
      <div className='w-1/2 max-w-[550px] h-[586px] flex-col flex gap-6 items-center shadow-xl shadow-slate-200 rounded-md p-4 md:p-8'>
        {children}
      </div>
    </div>
  );
};

export default FormWrap;