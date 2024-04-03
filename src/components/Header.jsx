import {useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import logo from '../images/Sway Suites Logo.png'
import { IoIosStarOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import whatsapp from '../images/whatsapp.png';


const BookLink = ()=>(
  <a href="https://www.booking.com/hotel/bh/sway-suites.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaBiIAQGYATG4ARjIAQzYAQHoAQH4AQKIAgGoAgS4AvSFkrAGwAIB0gIkMjFlM2ZmMWEtODEwMi00MDIwLThkZjktMDEwNTdmM2U3MmU22AIF4AIB&sid=1f8b3429616605ab16c680df0a0f64b3&all_sr_blocks=1136863102_386294754_2_2_0;checkin=2024-04-24;checkout=2024-04-25;dest_id=11368631;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=1136863102_386294754_2_2_0;hpos=1;matching_block_id=1136863102_386294754_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=1136863102_386294754_2_2_0__3500;srepoch=1711599728;srpvid=1c7c1eb421c1014e;type=total;ucfs=1&#hotelTmpl" target='_blank' className='grid place-items-center w-[150px] h-[40px] mx-auto mt-[20px]
     rounded-full bg-[#3d3737] text-white duration-500 hover:bg-black'>Book Now</a>
)

const Header = () => {

  //path
  const HOME = '/';
  const ROOMS = '/rooms';
  const AMENTIES = '/amenties';
  const GALLERY = '/gallery';
  const CONTACT = '/contact';


  //change toggle
  const [toggle,setToggle] = useState(false);

  const ul = useRef();
  
  
  const showToggle = ()=>{

    setToggle(true);


    ul.current.classList.remove('-left-full');
    ul.current.classList.add('left-0');


  }


  const hideToggle = ()=>{

    setToggle(false);

    ul.current.classList.add('-left-full');
    ul.current.classList.remove('left-0');
  }


  const pathname = window.location.pathname;

  


  return (

    <div className="">

    <header className='bg-main h-[90px] text-white py-[25px] px-[20px] flex justify-between items-center'>


      <Link to='/' className='font-title text-[30px] cursor-pointer'>
        <img className='w-[200px] md:w-[250px] object-cover' src={logo} alt="" />
      </Link>


      <ul ref={ul} className='z-[100] duration-500 fixed top-0 -left-full w-full h-full flex-col justify-center gap-[30px]
       lg:flex-row lg:relative lg:top-0 lg:left-0 lg:w-auto lg:h-auto lg:justify-normal lg:gap-0
      flex items-center bg-main'>
        
        <li><Link to={HOME} className={`nav-all nav ${pathname === HOME && "active"}`}>Home</Link></li>
        <li><Link to={ROOMS} className={`nav-all nav ${pathname === ROOMS && "active"}`}>Rooms</Link></li>
        <li><Link to={AMENTIES} className={`nav-all nav ${pathname === AMENTIES && "active"}`}>Amenties</Link></li>
        <li><Link to={GALLERY} className={`nav-all nav ${pathname === GALLERY && "active"}`}>Gallery</Link></li>
        <li><Link to={CONTACT} className={`nav-all ${pathname === CONTACT && "active"}`}>Contact</Link></li>
        <li className='md:hidden'><BookLink /></li>

      </ul>

      <div className="hidden md:block">
      <BookLink />
      </div>

      {
        toggle ?
        <MdClose onClick={hideToggle} className='closeNav block relative z-[101] lg:hidden text-[40px] cursor-pointer' />
        :<FaBars onClick={showToggle} className='block relative lg:hidden text-[30px] cursor-pointer' />
      }
    

    </header>

    <div className="bg-main px-4 py-[30px] border-t">

    
    <div className="flex gap-[30px] flex-col lg:flex-row justify-between items-center">
      <div className="hotel flex items-center gap-[30px]">
        
        <span className='text-[20px] sm:text-[30px]'>Sway Suites,Bahrain</span>
         <span className='flex items-center gap-[2px]'><IoIosStarOutline /> 3</span>
      </div>

      <div className="links flex items-center justify-center flex-wrap gap-[20px]">
        <a href='https://maps.app.goo.gl/N1N419khfg66L5D47' target='_blank'
         className="flex items-center gap-[2px] underline uppercase"><IoLocationOutline /> View Map</a>


        <a href="tel:+97316600990"
         className='flex items-center gap-[2px] underline'> <img className='w-[20px]' src={whatsapp} /> <BsTelephone /> +973 1660 0990</a>


        <a href="mailto:hello@swaysuites.com"
         className='flex items-center gap-[2px] underline'><MdOutlineEmail /> hello@swaysuites.com</a>


      </div>
    </div>

    

    </div>


    </div>

  )
}

export default Header
