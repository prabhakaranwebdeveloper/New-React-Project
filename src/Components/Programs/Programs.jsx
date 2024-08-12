import React from 'react'
import './Programs.css'
import Program1 from '../../assets/edusityAssets/program1.png'
import Program2 from '../../assets/edusityAssets/program2.png'
import Program3 from '../../assets/edusityAssets/program3.png'
import programIcon1 from '../../assets/edusityAssets/programicon1.png'
import programIcon2 from '../../assets/edusityAssets/programicon2.png'
import programIcon3 from '../../assets/edusityAssets/programicon3.png'


const Programs = () => {
  return (
    <div className='programs'>

    <div className="program">
        <img src={Program1} alt="" />
        <div className="caption">
          <img src={programIcon1} alt="" />
          <p>Graduation Degree</p>
        </div>
    </div>

    <div className="program">
        <img src={Program2} alt="" />
        <div className="caption">
          <img src={programIcon2} alt="" />
          <p>Masters Degree</p>
        </div>
    </div>

    <div className="program">
        <img src={Program3} alt="" />
        <div className="caption">
          <img src={programIcon3} alt="" />
          <p> Post Graduation</p>
        </div>
    </div>
    </div>
  )
}

export default Programs