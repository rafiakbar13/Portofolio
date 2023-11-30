import React from 'react'
import { SKILLS } from '@/common/constant/skills'
import SkillCard from './SkillCard'
import { motion, Variants } from 'framer-motion';


const itemMenu: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
};

const SkillList = () => {
    return (
        <motion.section variants={itemMenu} className='flex flex-wrap justify-center gap-5 mt-5 w-5/6 mx-auto px-8'>
            {SKILLS.map((skill, index) => <SkillCard key={index} skill={skill} />)}
        </motion.section>
    )
}

export default SkillList