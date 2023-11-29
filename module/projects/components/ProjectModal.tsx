import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Chip } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
type Props = {}

const ProjectModal = ({ project, isOpen, onOpenChange }: any) => {
    return (
        <Modal isOpen={isOpen} size='lg' onOpenChange={onOpenChange} isDismissable={false} backdrop="opaque"
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                    },
                }
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col mt-6">
                            <Image src={project.banner.url} width="100%" alt={project.name} shadow="sm"
                                className='object-cover w-full rounded-lg' />
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {project.tech.map((tech: any) => (
                                    <Chip color="secondary" className='dark:bg-slate-800 dark:text-purple-500'>{tech}</Chip>
                                ))}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Link href={project.linkGitHub} target='_blank' className='w-full'>
                                <Button className='w-full bg-purple-600 text-white'>
                                    View Code
                                </Button>
                            </Link>
                            <Link href={project.linkDemo} target='_blank' className='w-full'>
                                <Button className='w-full bg-slate-800 text-purple-500'>
                                    View Demo
                                </Button>
                            </Link>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ProjectModal