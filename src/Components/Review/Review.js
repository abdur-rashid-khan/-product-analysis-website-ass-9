import React from 'react';
import UseReview from '../Hooks/UseReview/UseReview';
import ReviewProducts from '../ReviewProducts/ReviewProducts';

const Review = () => {
   const {review , setReview} = UseReview();
   return (
      <div className='sm:container md:container lg:container xl:container mx-auto px-3'>
         <div className="review-header">
            <div className="pt-12 ">
               <h1 className='text-2xl font-bold py-5 '>AirPods (3rd generation) in Review  :-</h1>
            </div>
            <div className="review-items">
               {
                  review.map(products => <ReviewProducts data={products} key={products.id}></ReviewProducts>)
               }
            </div>
         </div>
         
      </div>
   );
};

export default Review;