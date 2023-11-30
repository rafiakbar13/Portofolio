import React from 'react'
import { STACKS } from "@/common/constant/stack";
import { motion, Variants } from 'framer-motion';

const itemMenu: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
};
const SkillCard = ({ skill }: { skill: string }) => {
    return (
        <motion.section variants={itemMenu}>
            <article className='flex justify-center items-center gap-x-3 border-[1px] dark:border-purple-400 px-8 py-2 rounded-2xl '>
                <span className=''>{STACKS[skill]}</span>
                <span>{skill}</span>
            </article>
        </motion.section>
    )
}

export default SkillCard