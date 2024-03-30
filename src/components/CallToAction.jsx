import React from 'react'
import img1 from '../images/img1.jpeg';

const CallToAction = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className='relative my-[100px] h-[400px] text-white'>
      <span className='absolute w-full h-full top-0 left-0 bg-[#00000075]'></span>
      <img className='w-full h-full object-cover' src={img1} alt="image" />

      <div className="text absolute w-full sm:w-auto z-[2] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <h1 className='text-[50px] sm:text-[60px] font-rokkit text-center'>What Are You Waiting For?</h1>

        <a href="https://www.booking.com/hotel/bh/sway-suites.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaBiIAQGYATG4ARjIAQzYAQHoAQH4AQKIAgGoAgS4AvSFkrAGwAIB0gIkMjFlM2ZmMWEtODEwMi00MDIwLThkZjktMDEwNTdmM2U3MmU22AIF4AIB&sid=1f8b3429616605ab16c680df0a0f64b3&all_sr_blocks=1136863102_386294754_2_2_0;checkin=2024-04-24;checkout=2024-04-25;dest_id=11368631;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=1136863102_386294754_2_2_0;hpos=1;matching_block_id=1136863102_386294754_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=1136863102_386294754_2_2_0__3500;srepoch=1711599728;srpvid=1c7c1eb421c1014e;type=total;ucfs=1&#hotelTmpl" target='_blank' className='overlay-btn'>Book Now</a>
      </div>
    </div>
  )
}

export default CallToAction
