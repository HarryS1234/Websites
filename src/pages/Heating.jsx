import React from 'react'
import Header from '../components/ReuseComponents/Header'
import Navbar from '../components/ReuseComponents/Navbar'
import Heating1 from '../components/HeatingComponents/Heating1'
import HeatingFlexBox from '../components/HeatingComponents/HeatingFlexBox'
import AssistanceSection from '../components/RefComponents/AssistanceSection'
import Footer from '../components/ReuseComponents/Footer'
const Heating = () => {
  return (
    <div>
      
      <Header/>
      <Navbar/>
      <Heating1/>
      <HeatingFlexBox/>
      <AssistanceSection/>
     <Footer/>

    </div>
  )
}

export default Heating
