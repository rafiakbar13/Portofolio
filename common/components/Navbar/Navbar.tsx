'use client'
import React, { useState, useEffect } from 'react';
import { MENU } from '@/common/constant/Menu';
import Link from 'next/link';
import { ThemeSwitcher } from '../ThemeSwitcher';
import useIsMobile from '@/hooks/useIsMobile';
import { useMenu } from '@/context/menu';
import MobileMenu from './MobileMenu';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';


export type Variants = {
    hidden: { y?: number, opacity: number, scale?: number };
    visible: { y?: number; opacity: number, scale?: number, transition?: any };
};

const container: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemMenu: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
};


const Navbar = () => {
    const pathName = usePathname();

    const isMobile = useIsMobile();
    const { isOpen, toggleMenu } = useMenu();
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 70) {
                setScroll(true);
            } else {
                setScroll(false);
            }
            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`sticky top-0 left-0 right-0 z-10 bg-white dark:bg-black p-4 ${scroll ? 'shadow-md' : ""}`}>
                <div className='mx-auto flex items-center justify-between w-5/6'>
                    <div>
                        <h2 className='text-lg lg:text-2xl font-semibold'>&lt;Rafi /&gt;</h2>
                    </div>
                    <motion.div variants={container} initial="hidden" animate="visible" className='sm:flex items-center gap-3 lg:gap-5 border-slate-400 hidden text-sm md:text-base'>
                        {MENU.map((item, index) => (
                            <motion.div variants={itemMenu} key={index}>
                                <Link
                                    href={item.url}
                                    key={item.id}
                                    className={`hover:text-purple-400 hover:border-b-[1px] transition duration-300 ${pathName === item.url ? "text-purple-400 border-b-[1px]" : ""}`}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        <div className='pl-5 border-l-2 gap-x-5'>
                            <ThemeSwitcher />
                        </div>
                    </motion.div>
                    <button className='cursor-pointer sm:hidden  flex top-0 right-0 z-20 relative w-10 h-10 text-black focus:outline-none ' onClick={toggleMenu}>
                        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <span
                                className={`absolute h-0.5 w-5 bg-black dark:bg-white transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                                    }`}
                            ></span>
                            <span
                                className={`absolute h-0.5 bg-black dark:bg-white transform transition-all duration-200 ease-in-out ${isOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                                    }`}
                            ></span>
                            <span
                                className={`absolute h-0.5 w-5 bg-black dark:bg-white transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </nav>
            {isMobile && <MobileMenu />}
        </>
    );
};

export default Navbar;
