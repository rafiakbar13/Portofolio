'use client'
import SectionHeading from '@/common/components/SectionHeading'
import React from 'react'
import { GrTechnology } from 'react-icons/gr'
import SkillList from './SkillList'
import { motion } from 'framer-motion'
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

const Tech = () => {
    return (
        <motion.section variants={container} className='my-32' id='skills'>
            <SectionHeading title='Tech Stack' icon={<GrTechnology />} />
            <SkillList />
        </motion.section>
    )
}

export default Tech