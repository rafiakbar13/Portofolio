import SectionHeading from '@/common/components/SectionHeading'
import React from 'react'
import { GiUnstableProjectile } from 'react-icons/gi'
import ProjectList from '../components/ProjectList'
import { getProjects } from '@/services/getProject'
type Props = {}

const Project = async (props: Props) => {
    const projects = await getProjects()
    return (
        <section className='mt-10' id='projects'>
            <SectionHeading title='Projects' icon={<GiUnstableProjectile />} />
            <ProjectList data={projects} />
        </section>
    )
}

export default Project