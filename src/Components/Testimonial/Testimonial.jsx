import React, { useRef } from 'react'
import './Testimonial.css'
import nextIcon from '../../assets/edusityAssets/nexticon.png'
import backIcon from '../../assets/edusityAssets/backicon.png'
import usericon1 from '../../assets/edusityAssets/user1.png'
import usericon2 from '../../assets/edusityAssets/user2.png'
import usericon3 from '../../assets/edusityAssets/user3.png'
import usericon4 from '../../assets/edusityAssets/user4.png'

const Testimonial = () => {

const slider = useRef();
let tx = 0;

const slideForward = ()=>{
   
if (tx > -50) {
    tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;
}


const slideBackward = ()=>{
    if (tx < 0) {
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className='testimonials'>
    <img src={nextIcon} alt="" className='nextBtn' onClick={slideForward} />
    <img src={backIcon} alt="" className='backBtn' onClick={slideBackward}  />
    <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={usericon1} alt="" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={usericon2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={usericon3} alt="" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={usericon4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonial