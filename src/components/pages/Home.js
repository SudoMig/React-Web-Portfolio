import React from 'react'
import BannerSection from '../BannerSection'
import Services from '../Services'
import Projects from '../Projects'
import Herosection from '../Herosection'
import FeatureSection from '../FeatureSection'
import ContactForm from '../ContactForm'
import Footer from '../Footer'
import BackToTop from '../BackToTop'





const Home = () => {


  return (
    <>
        <BackToTop/>
        <BannerSection />
        <Herosection/>
        <Services />
        <Projects />
        <FeatureSection />
        <ContactForm/>
        <Footer />
    </>
  )
}

export default Home