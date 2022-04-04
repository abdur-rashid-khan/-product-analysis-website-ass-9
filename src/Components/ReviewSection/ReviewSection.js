import React from 'react';
import CustomLink from '../Active/Active';
import UseReview from '../Hooks/UseReview/UseReview';
import ReviewSectionProducts from '../ReviewSectionProducts/ReviewSectionProducts';
import './ReviewSection.css'

const ReviewSection = () => {
   const {review , setReview} = UseReview();
   let sliceProducts=review.slice(0,3);
   return (
      <div className="bg-slate-200">
         <div className="sm:container md:container lg:container xl:container mx-auto px-3 py-4 text-center">
            <div id="review-aria">
               <div className="review-header">
                  <h1 className='text-4xl pt-5 font-bold'>Review Products</h1>
               </div>
               <div id="review-content">
                  {
                     sliceProducts.map(products => <ReviewSectionProducts data={products} key={products.id}></ReviewSectionProducts>)
                  }
               </div>
               <CustomLink id='showAllProducts'  to='/reviews'>Review More</CustomLink>
            </div>
         </div>
      </div>
   );
};

export default ReviewSection;