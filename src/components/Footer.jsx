import React from 'react'
import whatsapp from '../images/whatsapp.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import { Link } from 'react-router-dom';


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
        <p className='text-gray-500 font-rokkit'>Social media channels</p>

        <div className="social-media-links flex md:justify-center gap-[15px] mt-[10px]">
          <a href="https://www.facebook.com/swaysuites/" target='_blank' className='text-black text-[14px]'><img src={facebook} alt="facebook" className='w-[20px]' /></a>
          <a href="https://www.instagram.com/theswaysuites/" target='_blank' className='text-black text-[64px]'><img src={instagram} alt="instagram" className='w-[20px]' /></a>
          <a href="https://wa.me/+97316600990" target='_blank' className='text-black text-[14px]'><img src={whatsapp} alt="whatsapp" className='w-[20px]' /></a>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-[20px] font-rokkit mb-[20px]'>Our Location</h1>
        <p className='text-gray-500'>Bulding 99, Road 22 <br/>Block 324, Juffair Bahreïn</p>
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
