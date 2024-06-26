import {useState} from 'react'
import Header from '../components/Header'
import {rooms} from '../data/rooms';
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";

const Rooms = () => {


  const [currentCategory,setCurrentCategory] = useState(rooms[0]);
  const [currentImage,setImage] = useState(null);

  const parentImages = currentCategory.images;

  const changeActive = (ind)=>{

    setCurrentCategory(rooms[ind]);
  }

  const previousImage = ()=>{

    const previousIndex = parentImages.indexOf(currentImage) - 1;

      setImage(parentImages[previousIndex]);
  }

  const nextImage = ()=>{

    const nextIndex = parentImages.indexOf(currentImage) + 1;

      setImage(parentImages[nextIndex]);


  }


  return (
    <>

    {
      currentImage &&
      <div className='fixed overflow-y-scroll w-full h-full top-0 left-0 bg-[#181717] z-[10000]'>

        <IoMdClose onClick={()=>setImage(null)} className='fixed z-[2] cursor-pointer text-white text-[55px] right-[10px] top-[10px]' />

        <div className="image absolute w-full h-[200px] sm:h-[300px] md:h-auto top-1/2 -translate-y-1/2
        md:top-[50px] md:translate-y-0 md:px-[60px] md:pb-[60px]">

        <img src={currentImage} className='object-cover w-full h-full' />
        
        </div>

        <div className="chevrons">
          
          <div onClick={previousImage} className={`${parentImages.indexOf(currentImage) === 0 ? 'hidden' : ''} chevron-left fixed`}><FaChevronLeft className='pointer-events-none' /></div>
          <div onClick={nextImage} className={`${parentImages.indexOf(currentImage) === parentImages.length - 1 ? 'hidden' : ''} chevron-right fixed`}><FaChevronRight className='pointer-events-none' /></div>

        </div>

      </div>

    }

      <Header />
      
      <div className="rooms-page mt-[70px]">

      <h1 className='main-title text-gray-800 after:bg-gray-800 text-center font-rokkit text-[30px]'>Our Rooms</h1>

      <p className='page-description'>Luxurious Rooms & Suites Await at Our Hotel Apartments</p>  


        <div className="categories mt-[20px]">
          {
            rooms.map((obj,index)=>(

              <span className={`category ${currentCategory.id == obj.id ? 'active' : ''} `} onClick={()=>changeActive(index)} key={obj.id}>{obj.title}</span>
            ))
          }
        </div>

        <div className="content mt-[40px] mb-[20px]">

        <div className="tags flex flex-wrap items-center justify-center gap-[15px]">

        {
          currentCategory.tags.map((tag,index)=>(
            <span key={index} className="block font-semibold text-[14px] bg-light border-2 border-main px-[10px] py-[5px]">{tag}</span>
            ))
        }

        </div>
      </div>

        <div className="current-images px-[30px] grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {
           parentImages.map((image,index)=>(

            <div key={index} className="image max-h-[350px]">

              <img onClick={()=>setImage(image)} className='cursor-pointer w-full h-full' src={image} alt="image" />
           
            </div>
            ))
          }
        </div>

      </div>

    </>
  )


}

export default Rooms
