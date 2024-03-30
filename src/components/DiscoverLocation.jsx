import React from 'react'
import discover from '../images/discover.jpeg';
import { Link } from 'react-router-dom';

const DiscoverLocation = () => {
  return (
    <div className='mt-[100px] flex'>
      <div data-aos="fade-up" data-aos-duration="1000" className="text py-[50px] flex-1 bg-light flex flex-col justify-center px-[15px] md:px-[40px]">
      <h3 className="sub-title text-[20px]  text-center">Discover Our Place</h3>

      <h1 className='text-[60px] text-center'>About Us</h1>

      <p className='text-gray-700 leading-[2.3] my-[30px] text-center'>
        {/* {"(Hotel description)"} */}

        Premium Hotel Apartments, most ideal for family and couples, in the heart of Manama, where all the major landmarks of Bahrain are easily accessible.
      </p>

      <div className="buttons flex justify-center gap-[20px]">
        <Link to="/rooms" className='grid place-items-center w-[150px] h-[40px]
         bg-white rounded-md duration-300 hover:-translate-y-[2px] shadow-gray'>Our Rooms</Link>


        <Link to="/amenties" className='grid place-items-center w-[150px] h-[40px]
         bg-bold rounded-md text-white duration-300 hover:-translate-y-[2px] shadow-gray'>Our Amenties</Link>

      </div>


      </div>

      <div data-aos="fade-down" data-aos-duration="1000" className="hidden lg:block image basis-1/2 xl:basis-[600px] xl:h-[600px]">
        <img className='w-full h-full object-cover' src={discover} alt="building" />
      </div>
    </div>
  )
}

export default DiscoverLocation
