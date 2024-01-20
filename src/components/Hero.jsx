import {useState,useEffect} from 'react'
import img1 from '../images/img1.PNG';
import img2 from '../images/img2.PNG';
import img3 from '../images/img3.PNG';
import { FaChevronRight,FaChevronLeft  } from "react-icons/fa6";
import HeroText from './HeroText';

const Hero = () => {

    const [images,setImages] = useState([]);
    const [texts,setTexts] = useState([]);
    const [dots,setDots] = useState([]);

    useEffect(()=>{
        setImages(Array.from(document.querySelectorAll('.hero .images img')))
        setTexts(Array.from(document.querySelectorAll('.hero-text')))
        setDots(Array.from(document.querySelectorAll('.hero-dot')))
        
    },[])

    //change active index

    let activeIndex = 0;

    const changeActiveIndex = ()=>{


      if(activeIndex === images.length){
        activeIndex = 0;

      } 

      if(activeIndex === -1){
        activeIndex = images.length - 1;
      }


     changeActiveClass(images,"image");
     changeActiveClass(texts,"text")
     changeActiveClass(dots,"dot")
      
    }

    //change active class
    const changeActiveClass = (elements,type)=>{

      if(elements.length !== 0){
        elements.forEach(element=> element.classList.remove(`active-${type}`))
        elements[activeIndex].classList.add(`active-${type}`);

      }


      
    }

    // change current active by setinterval

    setInterval(()=>{
      activeIndex++;
      changeActiveIndex(activeIndex);

    },7000)

     //change active by arrows
     const changeActiveByArrows = (direction)=>{

      if(direction === "right") activeIndex++;
      else activeIndex--;

      changeActiveIndex();
     }

     //change active by dots
     const changeActiveByDots = (e)=>{

      dots.forEach((dot,index)=>{

        if(+dot.dataset.number === +e.target.dataset.number){
          activeIndex = index;
          changeActiveIndex();
        }

        
      })
     }
    


  return (
    <div className='hero relative overflow-y-hidden'>
      <span className="overlay absolute w-full h-full top-0 left-0 bg-[#00000075] z-[2]"></span>
      
      {/* images */}
      <div className="images relative w-full h-full">

        <img className='active-image hero-image' src={img1} alt="image" />
        <img className='hero-image' src={img2} alt="image" />
        <img className='hero-image' src={img3} alt="image" />
        
      </div>

      {/* texts */}

      <HeroText active={true} text="ENJOY A LUXARY EXPERIENCE" />
      <HeroText text="YOUR ELEGANT GETAWAY BEGINS" />
      <HeroText text="UNVEILING THE ART OF GRAND LIVING" />


      {/* arrows */}

      <div onClick={()=>changeActiveByArrows('right')} className="right absolute top-1/2 -translate-y-1/2
       right-[20px] bg-[#ffffff33] cursor-pointer text-[#ffffff80]
       w-[60px] h-[60px] rounded-full z-[10] grid place-items-center text-[22px]">
        <FaChevronRight className='pointer-events-none' />
      </div>

      <div onClick={()=>changeActiveByArrows('left')} className="left absolute top-1/2 -translate-y-1/2
       left-[20px] bg-[#ffffff33] cursor-pointer text-[#ffffff80]
       w-[60px] h-[60px] rounded-full z-[10] grid place-items-center text-[22px]">
        <FaChevronLeft className='pointer-events-none' />
      </div>

      {/* dots */}

      <div className="dots flex items-center gap-[15px] absolute z-[2] left-1/2 -translate-x-1/2 bottom-[20px]">

      <span data-number="1" onClick={changeActiveByDots} className='active-dot hero-dot'></span>

        <span data-number="2" onClick={changeActiveByDots} className='hero-dot'></span>

        <span data-number="3" onClick={changeActiveByDots} className='hero-dot'></span>
        
      </div>
      
    </div>
  )

}

export default Hero
