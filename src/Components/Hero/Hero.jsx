import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/edusityAssets/darkArrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
    <div className="heroText">
        <h1>We Ensure better education for a better world</h1>
        <p>Our Cutting-edge Curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic feel of education</p>
        <button className='btn'>Explore more <img src={darkarrow} alt="" /></button>
    </div>
    </div>
  )
}

export default Hero