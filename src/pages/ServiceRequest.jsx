import React from 'react'
import Header from '../components/ReuseComponents/Header'
import Navbar from '../components/ReuseComponents/Navbar'
import ServiceRequestPage from '../components/RequestComponents/ServiceRequestPage'
import MapSection from '../components/ReuseComponents/MapsSection'
import ContactSection from '../components/ReuseComponents/ContactSection'
import Footer from '../components/ReuseComponents/Footer'
const ServiceRequest = () => {
  return (
    <div>

        <Header/>
        <Navbar/>
        <ServiceRequestPage/>
        <MapSection/>
        <ContactSection/>
        <Footer/>
     
      
    </div>
  )
}

export default ServiceRequest
