import SectionHeading from '@/common/components/SectionHeading'
import React from 'react'
import { BiSolidBookReader } from 'react-icons/bi'
import Summary from './Summary'
import Profile from '@/common/components/Profile'
// import GithubGraph from './GithubGraph'
const About = () => {
    return (
        <section id='about' className='flex flex-col justify-center items-center mt-32'>
            <SectionHeading title='About' icon={<BiSolidBookReader />} />
            <div className='flex flex-col lg:flex-row items-center justify-center pt-4'>
                <Profile image={'/images/Avatar-about.png'} className='w-72 h-72' />
                <Summary />
            </div>
            {/* <div className='mt-10'>
                <GithubGraph />
            </div> */}
        </section>
    )
}

export default About