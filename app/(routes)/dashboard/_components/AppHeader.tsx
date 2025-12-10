import { UserButton } from '@clerk/nextjs'
import { index } from 'drizzle-orm/gel-core'
import { div, option } from 'motion/react-client'
import Link from 'next/link'
import React from 'react'

function AppHeader() {
    const menuOption = [
        {
            id:1,
            name:"Home",
            path:'/dashboard'
        },
                {
            id:2,
            name:"History",
            path:'/dashboard/history'
        },
                {
            id:3,
            name:"Pricing",
            path:'/pricing'
        },
                {
            id:4,
            name:"Profile",
            path:'/profile'
        },
    ]
  return (
    <div className='flex justify-between items-center p-4 shadow  px-10 md:px-24 lg:px-40'>
        <img src="/logo.svg" alt="logo" />
        <div className='hidden md:flex gap-12 items-center'>
            {menuOption.map((option, index) => (
                <div key={index}>
                    <Link href={option.path} className='hover:font-bold cursor-pointer transition-all duration-300 hover:scale-110'>{option.name}</Link>
                </div>
            ))}
            
        </div>
        <UserButton />
    </div>
  )
}

export default AppHeader