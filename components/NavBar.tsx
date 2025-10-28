import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const NavBar = () => {
  return (
	<nav className='flex justify-between fixed z-50 w-full bg-[#1C1F2E] px-6 py-4 lg:px-10'>
    <Link href="/" className='flex items-center gap-1 '>
    <Image src="/icons/logo.svg" alt="Yoom logo" className='max-sm:size-10' width={40} height={40} />
    <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Yoom</p>
    </Link>
    <div className="flex-between gap-5">
      {/* Clerk - User Mangment */}

      <MobileNav/>
    </div>
  </nav >
  )
}

export default NavBar