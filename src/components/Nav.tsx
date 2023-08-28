'use client'

import React from 'react';
import { categories } from '../../constants';
import NavLinks from './NavLinks';
import {usePathname} from'next/navigation';

const Nav = () => {
  const pathname = usePathname();
  const isActive =(path:String)=>{
    return pathname?.split('/').pop()===path;
  }
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto  border-b'>
      {categories.map((category) => (
        <NavLinks key={category} category={category} isActive={isActive(category)}/>
      ))}
    </nav>
  );
};

export default Nav;
