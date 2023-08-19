import React from 'react'
import Header from './header'
import Hero from './hero'
import Promises from './promises'
import About from './about'
import Work from './work'
import Mobile from './mobile'
import Numbers from './numbers'
import Contact from './contact'
import Footer from './Footer'

function Home() {
    return (
        <>
        <Header />
        <Hero />
        <Promises />
        <About />
        {/* <Mobile /> */}
        <Work />
        <Numbers />
        <Contact />
        <Footer />
      </>
    )
} 
export default Home