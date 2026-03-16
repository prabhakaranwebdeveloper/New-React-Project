import React from 'react'
import './Title.css'

type TitleProps = {
  subTitle: string;
  title: string;
};

const Title: React.FC<TitleProps> = ({ subTitle, title }) => {
  return (
    <div className='title'>
     <p>{subTitle}</p>
     <h2>{title}</h2>
    </div>
  )
}

export default Title