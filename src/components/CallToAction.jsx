import React from 'react'
import img1 from '../images/img1.PNG';

const CallToAction = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className='relative my-[100px] h-[400px] text-white'>
      <span className='absolute w-full h-full top-0 left-0 bg-[#00000075]'></span>
      <img className='w-full h-full object-cover' src={img1} alt="image" />

      <div className="text absolute w-full sm:w-auto z-[2] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <h1 className='text-[50px] sm:text-[60px] font-rokkit text-center'>What Are You Waiting For?</h1>

        <a href="" className='overlay-btn'>Book Now</a>
      </div>
    </div>
  )
}

export default CallToAction
