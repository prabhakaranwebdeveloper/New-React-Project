
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

const App = () => {

const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero/>
      <div className="container">
      <Title subTitle = 'Our PROGRAM' title = 'What We Offer'></Title>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle = 'Gallery' title = 'Campus Photos'></Title>
      <Campus/>
      <Title subTitle = 'TESTIMONIALS' title = 'What Student Says'></Title>
      <Testimonial/>
      <Title subTitle = 'Contact Us' title = 'Get in Touch'></Title>
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>

    </div>
  )
}

export default App