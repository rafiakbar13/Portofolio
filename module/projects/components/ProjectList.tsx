"use client"
import React from 'react'
import { motion, Variants } from "framer-motion";
import ProjectCard from './ProjectCard';
type Props = {}

const ProjectList = ({ data }: any) => {

  return (
    <motion.section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-7 mt-5 '>
      {data?.projectLists.map((project: any) => {
        return <ProjectCard key={project.id} project={project} />
      })}
    </motion.section>
  )
}

export default ProjectList