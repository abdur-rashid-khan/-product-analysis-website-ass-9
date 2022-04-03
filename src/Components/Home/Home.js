import React from 'react';
import banner from './img/MME73.png';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
   return (
      <div className='bg-slate-400'
      id='banner-size'>
         <div className='sm:container md:container lg:container xl:container mx-auto px-3 py-4'>
            <div id="total-content">
               <div className="main-content">
                  <h1 className='sm:text-xl md:text-5xl py-10 font-bold'>AirPods (3rd generation)</h1>
                  <strong className='md:text-xl'>A closer look at AirPods.</strong>
                  <p>Spatial audio with dynamic head tracking places sound all around you.</p>
                  <button className='mt-10 text-white bg-blue-700 text-xl px-8 py-1 rounded'> Explorer <span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </span></button>
               </div>
               <div className="header-img md:py-20">
                  <img src={banner} alt="Header photos" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;