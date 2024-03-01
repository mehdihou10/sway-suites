import {useState} from 'react'
import Header from '../components/Header';
import { gallery } from '../data/gallery';
import { FaChevronRight,FaChevronLeft } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const Gallery = () => {

  const galleryIndexes = [];

  for(let i in gallery){

    galleryIndexes.push(+i);

  }

  const [image,setImage] = useState(null);
  let [currentIndex,setCurrentIndex] = useState(0);

  const addIndex = ()=>{

   if(currentIndex !== gallery.length - 1){

    setCurrentIndex(prev=>++prev);

   }
  }
  
  const sousIndex = ()=>{

    if(currentIndex !== 0){

      setCurrentIndex(prev=>--prev);
    }
  }

  const changeIndexByClick = (index)=>{

    setCurrentIndex(index);
  }

  return (
    <>
      <Header />

      {image &&
      <>
       <span className='fixed w-full h-full top-0 left-0 bg-[#000000bf] z-[10000000000]'></span>

       <div className="current-image fixed z-[100000000000] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <IoMdClose onClick={()=>setImage(null)} className='cursor-pointer text-red-500 text-[40px] absolute -top-[20px] -right-[20px]' />
        <img className='w-full max-h-[80vh] object-cover' src={image} alt="picture" />
       </div>

       </>
      }
      
      <div className="gallery-page px-[30px] mt-[70px]">

        <h1 className='page-title'>Our Gallery:</h1>
        <p className='page-description'>Step into a world of unparalleled luxury and refinement at our distinguished hotel.</p>

        <div className="picures grid sm:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[50px]">

          {

            gallery[currentIndex].map((photo,index)=>(
              <div key={index} className="image overflow-hidden">
                <img onClick={()=>{
                  if(window.innerWidth > 767){
                    setImage(photo)
                  }
                }} className='cursor-pointer w-full h-[200px] object-cover duration-300 hover:scale-[1.2]' src={photo} alt="picture" />
              </div>
            ))

          }

        </div>


        <div className="pagination flex justify-center items-center gap-[20px] mt-[30px]">

          <div onClick={sousIndex} className="chevron-left cursor-pointer bg-main text-bold w-[30px] h-[30px] grid place-items-center"><FaChevronLeft className='pointer-events-none' /></div>

          <div className="pages-numbers flex gap-[10px]">

            {
              galleryIndexes.map(ind=>(
                <span onClick={()=>changeIndexByClick(ind)} key={ind} className={`grid place-items-center cursor-pointer w-[30px] h-[30px] rounded-full
                border-2 ${currentIndex == ind ? 'border-bold bg-main' : 'border-gray-400 bg-gray-200'}`}>{ind + 1}</span>
              ))
            }

          </div>

          <div onClick={addIndex} className="chevron-right cursor-pointer bg-main text-bold w-[30px] h-[30px] grid place-items-center"><FaChevronRight className='pointer-events-none' /></div>


        </div>
      </div>

    </>
  )
}

export default Gallery
