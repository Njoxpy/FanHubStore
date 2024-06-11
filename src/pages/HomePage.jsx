// file for nesting all home components
import React from 'react'

// import components
import Header from '../components/layout/Header'
import Hero from '../components/Home/Hero'
import Products from '../components/Home/Products'
import Testimonial from '../components/Home/Testimonial'
import Category from '../components/Home/Category'
import Footer from '../components/layout/Footer'
import Contact from '../pages/ContactUs'
import AboutUs from './AboutUs'
export default function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Products />
        <Category />
        <Testimonial />
        <Contact />
        <Footer />
        <AboutUs />
    </div>
  )
}
