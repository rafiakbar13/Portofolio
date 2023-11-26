import React from 'react'
import { SKILLS } from '@/common/constant/skills'
import SkillCard from './SkillCard'
import { motion } from 'framer-motion';
export type Variants = {
    hidden: { y?: number, opacity: number, scale?: number };
    visible: { y?: number; opacity: number, scale?: number, transition?: any };
};

const itemMenu: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
};

const SkillList = () => {
    return (
        <motion.section variants={itemMenu} className='flex flex-wrap justify-center gap-5 mt-5'>
            {SKILLS.map((skill, index) => <SkillCard key={index} skill={skill} />)}
        </motion.section>
    )
}

export default SkillList