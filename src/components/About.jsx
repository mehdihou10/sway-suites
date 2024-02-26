import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/pool.jpg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpg';


const About = () => {
  return (
    <div className='mt-[100px] flex flex-col lg:flex-row gap-[30px] px-[15px] md:px-[30px]'>

      <div data-aos="fade-up" data-aos-duration="1000" className="text basis-1/2">

        <h3 className='sub-title'>Hotel Bayview</h3>

        <h1 className='text-[70px] text-center'>Relax In Our Resort</h1>

        <p className='text-gray-500 text-center leading-[1.5] my-[20px]'>
       Welcome to <span className='text-bold font-title font-bold text-[22px]'>Sway Suites</span>, where hospitality meets comfort in every detail.
    Nestled in the heart of Bahrein,
    our hotel is a haven for travelers seeking a seamless blend of modern luxury and personalized service.

       </p>

       <Link to="/gallery" className='duration-500 grid place-items-center bg-main text-gray-800
        w-[150px] h-[40px] mx-auto hover:bg-bold hover:text-white'>About Us</Link>

      </div>

      <div data-aos="fade-down" data-aos-duration="1000" className="images relative flex-1 min-h-[450px]">

        <img className='object-cover absolute top-0 left-[40px] w-1/2 h-full z-[1] hover:z-[4]' src={img1} alt="image" />
        <img className='object-cover absolute w-1/2 h-[300px] top-1/2 -translate-y-1/2 right-[40px] z-[2] hover:z-[4]' src={img2} alt="image" />
        <img className='object-cover absolute bottom-0 left-0 w-1/2 h-[200px] z-[3]' src={img3} alt="image" />

      </div>

    </div>
  )
}

export default About
