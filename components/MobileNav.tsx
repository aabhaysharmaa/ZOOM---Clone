"use client"
import React from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
const MobileNav = () => {
	  const pathname = usePathname();
	  
  return (
	<section className='w-full max-w-[236px]' >
		<Sheet>
  <SheetTrigger asChild>
	<Image src={"/icons/hamburger.svg"} alt='hamburger image' height={36} width={36}  className='cursor-pointer' title='Menu' />
  </SheetTrigger>
  <SheetContent side='left' className='border-none bg-[#1C1F2E] max-sm:hidden' >
 <Link href="/" className='flex items-center gap-1 '>
    <Image src="/icons/logo.svg" alt="Yoom logo" className='max-sm:size-10' width={40} height={40} />
    <p className='text-[26px] font-extrabold text-white max-sm:hidden '>Yoom</p>
    </Link>
	<div className="flex h-[calc(100vh - 72px)] flex-col  justify-between overflow-auto">
  <SheetClose asChild>
	<section className='flex h-full flex-col gap-6 pt-16 text-white'>

		 {sidebarLinks.map((link)=>{
        const isActive = pathname === link.route
         return (
         <Link href={link.route} key={link.label} className={cn("flex gap-4 items-center p-4 rounded-lg justify-start" , {  "bg-[#0E78F9] " : isActive  },)} >
     <Image src={link.imageUrl} alt={link.label} width={24} height={24}/>
	 <p className='text-lg font-semibold max-lg:hidden]'>{link.label}</p>
         </Link>
         )
      })}
	</section>
  </SheetClose>
	</div>
  </SheetContent>
</Sheet>
	</section >
  )
}

export default MobileNav;