import Footer from '@/common/components/Footer'
import Hero from '@/common/components/Hero'
import Navbar from '@/common/components/Navbar/Navbar'
import { ThemeSwitcher } from '@/common/components/ThemeSwitcher'
import About from '@/module/About'
import Project from '@/module/projects'
import Tech from '@/module/skills'
import { Button } from '@nextui-org/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Project />
      <Footer />
    </main>
  )
}
