import React from 'react';
import SocialMedia from './SocialMedia';
import { Button } from "@nextui-org/button";
import Link from 'next/link'

const RESUME_URL = "https://res.cloudinary.com/druic0cle/image/upload/v1696232127/Muhammad_Rafi_Akbar_Resume-2_page-0001_tedx05.jpg"

const Introduction = () => {
    return (
        <div className="md:w-[765px]">
            <div className="flex gap-2 text-xl font-medium lg:text-2xl items-center">
                <h1>Hi, I'm Rafi 👋</h1>
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                <p className="text-sm">Available to hire</p>
            </div>
            <div className="space-y-4">
                <ul className="flex flex-col gap-1 mt-3 ml-5 list-disc lg:flex-row lg:gap-8 text-neutral-700 dark:text-neutral-400">
                    <li>Software Engineer</li>
                    <li>
                        Based in Bekasi <span className="ml-1">🇮🇩</span>
                    </li>
                </ul>
                <p className="leading-[1.8] md:leading-[2] text-neutral-800 dark:text-neutral-300 text-base">
                    I am a dedicated and experienced <span className="underline decoration-pink-500 decoration-2">Software Engineer</span> with a strong emphasis on <span className="underline decoration-purple-500 decoration-2">Frontend Web Development</span>. Experienced Frontend Developer with 1 year of hands-on experience in HTML, CSS, ReactJs, and Javascript. Skilled in developing and deploying web applications using modern technologies. Proven track record of creating intuitive user interfaces that enhance user experience. Applying for the position of Frontend Developer to use my skills to create innovative and responsive web solutions.
                </p>
            </div>
            <SocialMedia />
            <div className="absolute z-[3] gap-x-12 gap-y-3 flex pt-8 lg:mt-0 w-full flex-col md:flex-row px-3 md:px-0 ">
                <Link href={RESUME_URL} target="_blank">
                    <Button color="secondary" variant="solid" size='lg'>
                        See My Resume
                    </Button>
                </Link>
                <Button color="secondary" variant="ghost" size='lg'>
                    Github Profile
                </Button>
            </div>
        </div>
    );
};

export default Introduction;
