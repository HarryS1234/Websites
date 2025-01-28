import React from 'react'
import Header from '../components/ReuseComponents/Header'
import Navbar from '../components/ReuseComponents/Navbar'
import Ref1 from '../components/RefComponents/Ref1'
import FlexboxSection from '../components/RefComponents/FlexBoxSection'
import AssistanceSection from '../components/RefComponents/AssistanceSection'
import Footer from '../components/ReuseComponents/Footer'

const Refrigeration = () => {
  return (
    <div>

        <Header/>
        <Navbar/>
        <Ref1/>
        <FlexboxSection/>
        <AssistanceSection/>
        <Footer/>
    </div>
  )
}

export default Refrigeration
