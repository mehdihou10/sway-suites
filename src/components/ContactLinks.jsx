import React from 'react'
import whatsapp from '../images/whatsapp.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const ContactLinks = (props) => {

  const {bigSize} = props;
  
  return (
    
    <div className="social-media-links flex md:justify-center gap-[15px]">
    <a href="https://www.facebook.com/swaysuites/" target='_blank' className='text-black'>
      <img src={facebook} alt="facebook" className={bigSize ? 'w-[35px]' : 'w-[20px]'} /></a>


    <a href="https://www.instagram.com/theswaysuites/" target='_blank' className='text-black'>
      <img src={instagram} alt="instagram" className={bigSize ? 'w-[35px]' : 'w-[20px]'} /></a>


    <a href="https://wa.me/+97316600990" target='_blank' className='text-black'>
      <img src={whatsapp} alt="whatsapp" className={bigSize ? 'w-[35px]' : 'w-[20px]'} /></a>
  </div>
  )
}

export default ContactLinks
