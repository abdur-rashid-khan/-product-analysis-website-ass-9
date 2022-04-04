import { useEffect, useState } from "react";

const UseReview = () => {
   const [review , setReview] = useState([]);
   useEffect(()=>{
      fetch('products-review.json')
      .then(res => res.json())
      .then(data =>setReview(data))
   },[]);
   return {review,setReview}
};

export default UseReview;