// file for nesting all home components
import React from 'react'

// import components
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Testimonial from './components/Testimonial'
import Category from './components/Category'
import Footer from './components/Footer'
import Contact from './components/Contact'
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
    </div>
  )
}
