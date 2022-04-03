import React from 'react';
import CustomLink from '../Active/Active';

const Navbar = () => {
   return (
      <nav className='bg-slate-700 py-2 fixed w-full'>
         <div className="sm:container md:container lg:container xl:container mx-auto px-3">
            <div className="navbar-items flex justify-between items-center">
               <div className="logo">
                  <a className='text-3xl text-white' href='/home'>Review</a>
               </div>
               <div className="mane-items flex">
               {/* <CustomLink  className='text-xl' to='/'></CustomLink> */}
               <CustomLink  className='pl-5 text-xl' to='/home'>Home</CustomLink>
               <CustomLink  className='pl-5 text-xl' to='/review'>Review</CustomLink>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;