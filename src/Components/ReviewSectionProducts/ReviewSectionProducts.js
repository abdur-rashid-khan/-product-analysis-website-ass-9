import React from 'react';

const ReviewSectionProducts = ({data}) => {
   const {img, name , rating , comment}=data;
   return (
      <div id='reviewUser' className='md:flex items-center'>
         <div id='reviewUserImg'>
            <img className='m-auto' src={img} alt="" />
         </div>
         <div className="review-text sm:pt-3 md:pl-6 text-left">
            <p>name: <strong>{name}</strong></p>
            <p>Rating : <strong>{rating}</strong></p>
            <p>Comment : <strong>{comment}</strong></p>
         </div>
      </div>
   );
};

export default ReviewSectionProducts;