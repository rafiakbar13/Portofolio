
"use client"
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from '@nextui-org/react';
import { Chip } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import ProjectModal from './ProjectModal';
import Image from 'next/image';
type ProjectProps = {
    project: {
        id: string
        name: string
        description: string
        tech: string[]
        banner: {
            url: string
        }
    }
}


const ProjectCard = ({ project }: ProjectProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const trimmedDescription = project.description.substring(0, 100) + "..."
    const handleProjectClick = () => {
        onOpen();
    };
    return (
        <section className=''>
            <button onClick={handleProjectClick}>
                <Card key={project.id} className='hover:scale-105 hover:drop-shadow-2xl hover:duration-700 h-[480px]' onPress={handleProjectClick}>
                    <CardHeader className='p-3 rounded-md border-0'>
                        <Image src={project.banner.url} alt={project.name} width={500} height={250}
                            className='object-cover w-full rounded-lg'
                            loading='lazy'
                        />
                    </CardHeader>
                    <CardBody>
                        <div className='flex flex-wrap gap-2'>
                            {project.tech.map((tech: any, index: number) => (
                                <Chip key={index} color="secondary" className='bg-slate-800 text-purple-500 dark:bg-purple-700 dark:text-white'>{tech}</Chip>
                            ))}
                        </div>
                        <div className='mt-3'>
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p>{trimmedDescription}</p>
                        </div>
                    </CardBody>
                </Card>
            </button>
            <ProjectModal project={project} isOpen={isOpen} onOpenChange={onOpenChange} />
        </section>
    )
}

export default ProjectCard