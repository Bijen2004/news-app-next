import Link from 'next/link'
import React from 'react'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='grid grid-cols-3  h-[100px] items-center '>
        <div className='text-2xl pl-[20px]'>
            <FaBars />
        </div>
        <Link href='/'>
        <h1 className='text-center text-2xl'>
            The <span className='underline decoration-orange-600'>News</span> Paper
        </h1>
        </Link>
        <div className='flex items-center justify-end space-x-2'>
           <button className='hidden md:inline  bg-black px-4 py-2 lg:py-4 lg:px-8 text-white rounded-[20px] w-fit'>
           Subscribe Now
            </button>
        </div>
    </div>
  )
}

export default Header