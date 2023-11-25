'use client'
import React from 'react'
import { useMenu } from '@/context/menu'
import Link from 'next/link';
import { MENU } from '@/common/constant/Menu';
import { ThemeSwitcher } from '../ThemeSwitcher';

const MobileMenu = () => {
    const { isOpen } = useMenu()
    return (
        <nav className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen mt-16 bg-white text-black bg-opacity-100 transform delay-100 transition-all duration-300 dark:bg-black dark:text-white ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}>
            <div className="w-full flex flex-col items-center">
                <div className='flex flex-col items-center justify-center gap-y-5'>
                    {MENU.map((item, index) => (
                        <Link
                            href={item.url}
                            key={index}
                            className='hover:text-purple-400 hover:border-b-[1px] transition duration-300'
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className=''>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileMenu