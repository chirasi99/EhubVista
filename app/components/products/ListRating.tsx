"use client"
import React from 'react';
import { Rating } from '@mui/material';
import moment from 'moment';
import Heading from '@/app/components/Heading';
import Avatar from '@/app/components/Avatar';



interface ListRatingsProps {
        product : any;
}
const ListRatings: React.FC<ListRatingsProps> = ({product}) => {
  return (
    <div>
       <Heading title='Product Review' /> 
       <div className='mt-2 text-sm'>
        {product.reviews && product.reviews.map((review:any) => {
          return <div key={review.id} className="max-w-[300px]">
            <div className='flex items-center gap-2'>
              <Avatar src={review?.user.image } />
              <div className='font-semibold'>{review?.user.name}</div>
              <div className='font-light'>{moment(review.createdDate).fromNow()}</div>
            </div>
            <div className='mt-2'><Rating value={review.rating} readOnly/>
            <div className='ml-2'>{review.comment}</div>
            <hr className='mt-4 mb-4' />
            </div>
          </div>
        })}
       </div>
    </div>
  )
}

export default ListRatings