import {useState} from 'react'
import Header from '../components/Header';
import { gallery } from '../data/gallery';
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";



const Gallery = () => {

  const [currentCategory,setCurrentCategory] = useState(gallery[0]);
  const [currentImage,setImage] = useState(null);

  const parentImages = currentCategory.images;

  const changeActive = (ind)=>{

    setCurrentCategory(gallery[ind]);
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
      
      <div className="gallery-page mt-[70px]">

        <h1 className='main-title text-gray-500 after:bg-gray-500 text-center font-rokkit text-[20px]'>Our Photos</h1>

        <div className="categories">
          {
            gallery.map((obj,index)=>(

              <span className={`category ${currentCategory.id == obj.id ? 'active' : ''} `} onClick={()=>changeActive(index)} key={obj.id}>{obj.title}</span>
            ))
          }
        </div>

        <div className="current-images px-[30px] grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {
           parentImages.map((image,index)=>(

              <img onClick={()=>setImage(image)} className='cursor-pointer ' key={index} src={image} alt="image" />
            ))
          }
        </div>

      </div>

    </>
  )
}

export default Gallery
