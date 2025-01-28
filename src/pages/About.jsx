import React from 'react'
import About1 from '../components/AboutComponents/About1'
import Header from '../components/ReuseComponents/Header'
import Navbar from '../components/ReuseComponents/Navbar'
import VanAnimationSection from '../components/AboutComponents/VanAnimationSection'
import WhyChooseSection from '../components/AboutComponents/WhyChooseUs'
import BrandsSection from '../components/HomeComponents/BrandsSection'
import ProjectsSection from '../components/AboutComponents/ProjectSection'
import ContactSection from '../components/ReuseComponents/ContactSection'
import ReviewsSection from '../components/ReuseComponents/ReviewsSection'
import Footer from '../components/ReuseComponents/Footer'

const About = () => {
  return (
    <div>
  <Header/>
  <Navbar/>
  <About1/>
  <VanAnimationSection/>
  <WhyChooseSection/>
  <BrandsSection/>
  <ProjectsSection/>
  <ContactSection/>
  <ReviewsSection/>
  <Footer/>

    </div>  
  )
}

export default About
