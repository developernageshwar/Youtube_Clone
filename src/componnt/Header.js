import React, { useContext, useState } from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import ytLogo from '../images/logo2.webp'
import ytLogoMobile from '../images/logo2.webp'
import {SlMenu}from 'react-icons/sl';
import {IoIosSearch}from 'react-icons/io';
import {RiVideoAddLine}from 'react-icons/ri';
import {FiBell}from 'react-icons/fi';
import {CgClose}from 'react-icons/cg';


import { context } from '../context/Contextapi';
import Loader from '../shared/Loader'; 





 export const Header = () => {
  const [searchQuery,setSearchQuery]=useState('');

  const {loading,mobileMenu,setMobileMenu}=useContext(context);

  const navigate = useNavigate();

  const searchQueryHandler =(event)=>{
    if((event?.key ==='Enter'|| event ==='searchButton')&& searchQuery?.length>0){
       navigate(`/searchResult/${searchQuery}`);

    }

  }
  const mobileMenuToggle =()=>{
    setMobileMenu(!mobileMenu)

  };

  const {pathname}=useLocation();
  const pagename = pathname?.split('/')?.filter(Boolean)?.[0];






  return (
    <div className='sticky z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5  bg-black'>
      {loading && <Loader/>}
      <div className='flex h-5 items-center'>
        {pagename !=='video'&&(
          <div className='flex md:hidden md:mr-6 cursor-pointer  items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'
           onClick={mobileMenuToggle}> {mobileMenu ?(<CgClose className='text-white text-xl
             '/>):(<SlMenu className='text-white text-xl'/>
                )}
          </div>
           )}
           <Link to='' className='flex h-5 items-center'>
           <img className='h-8 hidden md:block'
            src={ytLogo}
             alt="Youtube"/>

            <img className='h-full md:hidden'
            src={ytLogoMobile}
             alt="Youtube" />
             </Link>
      </div>
      <div className='group flex items-center'>
        <div className='flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
          <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
           <IoIosSearch className ='text-white text-xl' />
           </div>
        <input 
        type="text" 
        className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        onChange ={(e)=>setSearchQuery(e.target.value)}
        />
       </div>
      <button className='w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'
      onClick={() => searchQueryHandler("searchButton")}
      >
        <IoIosSearch  className = 'text-white text-xl'/>
      </button>
     </div>
     <div className='flex items-center'>
      <div className='hidden md:flex'>
       </div>
      <div className='flex h-8 w-8 overflow-hidden rounded-full md:ml-4'>
          <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="profile pic" />
        </div>

        <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
          <FiBell className='text-white text-xl cursor-pointer'/>
        </div>

        <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
          <RiVideoAddLine className='text-white text-xl cursor-pointer'/>
        </div>
      
      
     </div>
     </div>
    
  
  );
};

