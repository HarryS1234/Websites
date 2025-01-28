import React from 'react'
import Header from '../components/ReuseComponents/Header'
import Navbar from '../components/ReuseComponents/Navbar'
import InstallationSection from '../components/InstallationComponents/InstallationSection'
import InstallFlexBox from '../components/InstallationComponents/InstallFlexBox'
import AssistanceSection from '../components/RefComponents/AssistanceSection'
import Footer from '../components/ReuseComponents/Footer'

const Installation = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <InstallationSection/>
      <InstallFlexBox/>
      <AssistanceSection/>
     <Footer/>
  
    </div>
  )
}

export default Installation
