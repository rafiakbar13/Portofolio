import React from 'react';

const Footer = () => {
    return (
        <footer className="h-16 flex justify-center items-center bg-black text-white gap-x-2 w-full">
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
            <span>with</span>
            <span className="text-red-500 animate-pulse">❤</span>
            <span>by</span>
            <span className="hover:dark:text-neutral-400 cursor-pointer">Rafi Akbar</span>
        </footer>
    );
};

export default Footer;
