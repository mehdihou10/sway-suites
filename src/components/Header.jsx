import {useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import logo from '../images/logo.png'



const Button = (props)=>(
  <Link className={`grid place-items-center w-[150px] h-[40px] bg-[#474444] rounded-full duration-500 ${props.hov && "hover:bg-black"}`}>Book Now</Link>

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
    <header className='bg-main h-[90px] text-white py-[25px] px-[20px] flex justify-between items-center'>


      <Link to='/' className='font-title text-[30px] cursor-pointer'>
        <img className='w-[100px] object-cover' src={logo} alt="" />
      </Link>


      <ul ref={ul} className='z-[100] duration-500 fixed top-0 -left-full w-full h-full flex-col justify-center gap-[30px]
       lg:flex-row lg:relative lg:top-0 lg:left-0 lg:w-auto lg:h-auto lg:justify-normal lg:gap-0
      flex items-center bg-main'>
        
        <li><Link to={HOME} className={`nav-all nav ${pathname === HOME && "active"}`}>Home</Link></li>
        <li><Link to={ROOMS} className={`nav-all nav ${pathname === ROOMS && "active"}`}>Rooms</Link></li>
        <li><Link to={AMENTIES} className={`nav-all nav ${pathname === AMENTIES && "active"}`}>Amenties</Link></li>
        <li><Link to={GALLERY} className={`nav-all nav ${pathname === GALLERY && "active"}`}>Gallery</Link></li>
        <li><Link to={CONTACT} className={`nav-all ${pathname === CONTACT && "active"}`}>Contact</Link></li>
        <li className='md:hidden'><Button /></li>

      </ul>

      <div className="hidden md:block">
      <Button hov={true} />
      </div>

      {
        toggle ?
        <MdClose onClick={hideToggle} className='closeNav block relative z-[101] lg:hidden text-[40px] cursor-pointer' />
        :<FaBars onClick={showToggle} className='block relative lg:hidden text-[30px] cursor-pointer' />
      }
      



    </header>
  )
}

export default Header
