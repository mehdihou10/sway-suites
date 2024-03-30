import React from 'react'
import { Link } from 'react-router-dom';
import ContactLinks from './ContactLinks';


const Footer = () => {
  return (

    <footer className='mt-[100px]'>

    <div className='bg-main px-[20px] py-[65px]'>

      <div className="flex gap-[30px] flex-col md:flex-row justify-between max-w-[1000px] mx-auto">

      <div>
        <h1 className='font-bold text-[20px] font-rokkit mb-[20px]'>Phone Support</h1>
        <a href="tel:+97316600990" target='_blank' className='text-gray-500'>+973 1660 0990</a>
      </div>

      <div className="md:text-center">
        <h1 className='font-bold text-[20px] font-rokkit'>Contact With Us</h1>
        <p className='text-gray-500 font-rokkit mb-[10px]'>Social media channels</p>

        <ContactLinks />
       
      </div>

      <div>
        <h1 className='font-bold text-[20px] font-rokkit mb-[20px]'>Our Location</h1>
        <p className='text-gray-500'>Bulding 99, Road 22 <br/>Block 324, Juffair Bahrain</p>
      </div>

      <div>
        <h1 className='font-bold text-[20px] font-rokkit mb-[20px]'>Email Support</h1>
        <a href='mailto:hello@swaysuites.com' className='text-gray-500'>hello@swaysuites.com</a>
      </div>

      </div>

    </div>

    <div className="routes bg-[#93807396] px-[30px] py-[25px]">
        <ul className='flex gap-[50px] text-gray-700 font-rokkit text-[18px] flex-wrap'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/amenties">Amenties</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>


        </ul>
      </div>

    </footer>
  )
}

export default Footer
