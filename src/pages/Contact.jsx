import React from 'react'
import Header from '../components/Header';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone,MdOutlineEmail } from "react-icons/md";


const Contact = () => {
  return (
    <>
      <Header />
    
    <div className="contact-page mt-[70px] px-[15px] sm:px-[30px]">

        <h1 className='page-title'>Contact Us</h1>
        <p className='page-description'>If you have any Question or anything else to say Don't hesitate to contact us.</p>
             

      <div className="content bg-white rounded-[20px] max-w-[700px] mx-auto mt-[50px]">

      <div className="infos p-[20px] flex flex-wrap justify-between gap-[30px]">

        <div className="info flex gap-[10px]">
          <div className="icon w-[40px] h-[40px] text-[18px] rounded-full grid place-items-center bg-main text-bold">
            <FaLocationDot />
            </div>

          <div className="text">
            <h1 className='font-semibold text-[18px]'>Location:</h1>
            <p className='text-gray-500 text-[14px]'>Bulding 99, Road 22 <br/>Block 324, Juffair Bahrain</p>
          </div>
        </div>

        <div className="info flex gap-[10px]">
          <div className="icon w-[40px] h-[40px] text-[18px] rounded-full grid place-items-center bg-main text-bold">
            <MdOutlinePhoneIphone />
            </div>

          <div className="text">
            <h1 className='font-semibold text-[18px]'>Call:</h1>
            <a href='tel:+97316600990' target='_blank' className='text-gray-500 text-[14px]'>+973 1660 0990</a>
          </div>
        </div>


        <div className="info flex gap-[10px]">
          <div className="icon w-[40px] h-[40px] text-[18px] rounded-full grid place-items-center bg-main text-bold">
            <MdOutlineEmail />
            </div>

          <div className="text">
            <h1 className='font-semibold text-[18px]'>Email:</h1>
            <a href='mailto:hello@swaysuites.com' target='_blank' className='text-gray-500 text-[14px]'>hello@swaysuites.com</a>
          </div>
        </div>

      </div>

      <div className="location mt-[30px]">
      <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.242244967757!2d50.60436257447898!3d26.221317289462558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a943b2644577%3A0xe00bffe9bea2d82a!2sSWAY%20Suites!5e0!3m2!1sfr!2sdz!4v1709143925578!5m2!1sfr!2sdz" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>


      </div>

    </div>
    </>
  )
}

export default Contact
