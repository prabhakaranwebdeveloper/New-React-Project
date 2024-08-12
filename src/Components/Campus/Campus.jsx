import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/edusityAssets/gallery1.png'
import gallery2 from '../../assets/edusityAssets/gallery2.png'
import gallery3 from '../../assets/edusityAssets/gallery3.png'
import gallery4 from '../../assets/edusityAssets/gallery4.png'
import whitearrow from '../../assets/edusityAssets/whitearrow.png'

const Campus = () => {
  return (
    <div className='campus'>
    <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
    </div>
    <button className='btn darkbtn'>See more here <img src={whitearrow} alt="" /></button>
    </div>
  )
}

export default Campus