"use client"
import React from 'react'
import HeroBgAnimation from './HeroBgAnimation'
import Profile from './Profile'
import Introduction from './Introduction'
import { motion } from 'framer-motion'
import { Button } from "@nextui-org/button";
import Link from 'next/link'

const RESUME_URL = "https://res.cloudinary.com/druic0cle/image/upload/v1696232127/Muhammad_Rafi_Akbar_Resume-2_page-0001_tedx05.jpg"


const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='flex justify-center relative clip-path-polygon-[0_0,_100%_0,_100%_100%,_70%_95%,_0_100%] h-[820px] lg:h-[510px] py-24 z-[1] mt-24'>
            <div className='absolute flex justify-end top-8 right-0 bottom-0 -left-16 lg:-left-10 w-full h-full overflow-hidden' >
                <HeroBgAnimation />
            </div>
            <article
                className='absolute flex flex-col items-center justify-between gap-x-12 gap-y-5 md:flex-row-reverse md:px-0 w-5/6 z-[2]'>
                <Profile image={'/images/Avatar.png'} className='rounded-full w-72 h-72' />
                <Introduction />
            </article>
        </motion.section>
    )
}

export default Hero
