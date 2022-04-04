import React from 'react';
import CustomLink from '../Active/Active';
import './Navbar.css'

const Navbar = () => {
   return (
      <nav className='bg-slate-700 py-3 fixed w-full'>
         <div className="sm:container md:container lg:container xl:container mx-auto px-3">
            <div className="navbar-items flex justify-between items-center">
               <div className="logo">
                  <a className='text-2xl text-white' href='/home'>The Gadget Zone</a>
               </div>
               <div className="mane-items flex">
               {/* <CustomLink  className='text-xl' to='/'></CustomLink> */}
               <CustomLink  className='pl-5 text-lg' to='/'>HOME</CustomLink>
               <CustomLink  className='pl-5 text-lg' to='/reviews'>REVIEWS</CustomLink>
               <CustomLink  className='pl-5 text-lg' to='/dashboard'>DASHBOARD</CustomLink>
               <CustomLink  className='pl-5 text-lg' to='/blogs'>BLOGS</CustomLink>
               <CustomLink  className='pl-5 text-lg' to='/about'>ABOUT</CustomLink>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;