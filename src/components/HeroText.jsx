import React from 'react'
import { Link } from 'react-router-dom'

const HeroText = (props) => {
    const {active,text} = props;


  return (
    <div className={`${active ? "active-text" : ""} hero-text w-full sm:w-auto`}>
        <h3 className='text-center text-[14px] main-title'>luxary hotel & best resort</h3>
        <h1 className='text-[40px] sm:text-[50px] lg:text-[60px] xl:text-[70px] text-center'>{text}</h1>
        <Link to='/rooms' className='overlay-btn'>Show rooms</Link>
      </div>
  )
}

export default HeroText
