import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Proyects from '../components/Proyects/Proyects'
import Template from '../components/Template_/Template'
import SliderShow from '../components/Slide/SliderShow'

export default function Home() {
  return (    
    <Layout>
    
        <Hero />
          
        <Skills/>

        <About/>

        <Proyects/>

        <Template/>

        <SliderShow/>
    </Layout>
  )
}
