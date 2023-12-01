"use client"
import SectionHeading from '@/common/components/SectionHeading';
import React, { useState, useEffect } from 'react';
import { GiUnstableProjectile } from 'react-icons/gi';
import ProjectList from '../components/ProjectList';
import { getProjects } from '@/services/getProject';

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
};

const Project = () => {
    const [projects, setProjects] = useState<Project[] | null>(null);

    const fetchProjects = async () => {
        try {
            const data = await getProjects();
            setProjects(data as Project[]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <section className='mt-10' id='projects'>
            <SectionHeading title='Projects' icon={<GiUnstableProjectile />} />
            <ProjectList data={projects} />
        </section>
    );
};

export default Project;
