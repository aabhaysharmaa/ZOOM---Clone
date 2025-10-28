"use client";

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const SideBar = () => {
  const pathname = usePathname();
  console.log("Use pathName : ", pathname);
  return (
	<section className='sticky left-0 top-0 flex -h-screen flex-col justify-between bg-[#1C1F2E] p-6 pt-28 text-white sm:hidden lg:w-[264px] md:flex '>
    <div className="flex flex-col gap-6">
      {sidebarLinks.map((link)=>{
        const isActive = pathname === link.route
         return (
         <Link href={link.route} key={link.label} className={cn("flex gap-4 items-center p-4 rounded-lg justify-start" , {  "bg-[#0E78F9] " : isActive  },)} >
     <Image src={link.imageUrl} alt={link.label} width={24} height={24}/> <p className='text-lg font-semibold max-lg:hidden]'>{link.label}</p>
         </Link>
         )
      })}
    </div>
  </section>
  )
}

export default SideBar ;