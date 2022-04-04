import React from 'react';
import CustomLink from '../Active/Active';
import './Navbar.css'

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
               <CustomLink  className='pl-5 text-xl' to='/home'>HOME</CustomLink>
               <CustomLink  className='pl-5 text-xl' to='/reviews'>REVIEWS</CustomLink>
               <CustomLink  className='pl-5 text-xl' to='/dashboard'>DASHBOARD</CustomLink>
               <CustomLink  className='pl-5 text-xl' to='/blogs'>BLOGS</CustomLink>
               <CustomLink  className='pl-5 text-xl' to='/about'>ABOUT</CustomLink>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;