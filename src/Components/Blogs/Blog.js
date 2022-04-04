import React from 'react';

const Blog = () => {
   return (
      <div className='sm:container md:container lg:container xl:container mx-auto px-4 pt-20'>
         <div>
            <p>1. what is contextApi?</p>
            <strong> Ans : Prop drilling also called threading refers to the process you have to go through to get data to parts of the React Component tree . and have a other powerfull works .
and easy to used and send data other place</strong>
         </div>
         <br />
         <div>
            <p>2 . what is Semantic </p>
            <strong>
               Ans : A semantic element clearly describes its meaning to both the browser and the developer. And
               for eyeless person understander  used  
               <strong>tag : article,aside,details,figcaption and other </strong>
            </strong>
         </div>
         <div>
            <br />
            <p>3. Inline block vs line elements </p>
            <strong> block element
               <br />
               <ol>
                  <li>1. Takes up full width and supported any style without problems</li>
                  <li>
                     2 .block element name is  p , div , h1 , ul and other , 
                  </li>
                  <li>
                     3.face line breacks.
                  </li>
               </ol>
            </strong>
            <br />
            <strong>
            Inline block :
            <p>1. not supported any style general</p>
            <p>2. don't face line breacks  </p>
            <p>3. tackes up only as much width as nessarly</p>
            </strong>
         </div>
      </div>
   );
};

export default Blog;