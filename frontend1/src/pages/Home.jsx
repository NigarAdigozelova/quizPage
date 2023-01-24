import React from 'react'
import Blog from '../components/Blog/Blog'
import BuildingSection from '../components/BuidingSection/BuildingSection'
import CollobSection from '../components/CollobSection/CollobSection'
import HeroSection from '../components/HeroSection/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import Testimonial from '../components/Testimonial/Testimonial'



const Home = () => {
  return (
    <>
    <HeroSection/>
   <InfoSection/>
   <BuildingSection/>
   <CollobSection/>
   <Testimonial/>
   <Blog/>
    </>
  )
}

export default Home