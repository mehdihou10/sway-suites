import img1 from '../images/rooms/Bedroom-1.jpg';
import img2 from '../images/rooms/Bedroom-2.jpg';
import img3 from '../images/rooms/Living Room-7.jpeg';
import img4 from '../images/rooms/Deluxe Room/img2.jpg';
import img5 from '../images/rooms/Living Room-2.jpeg';
import img6 from '../images/gallery/Lobby-3.jpg';
import img7 from '../images/gallery/Lobby-4.jpeg';

import { Link } from 'react-router-dom';

import {Swiper,SwiperSlide} from 'swiper/react';
import { EffectCoverflow,Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const RoomsSuites = () => {

  const images = [img1,img2,img3,img4,img5,img6,img7];

  return (
    <div className='mt-[70px] py-[70px] px-[15px] md:px-[30px] bg-light'>

      <h3 className="sub-title text-[30px] after:w-[100px] text-center">Rooms & Suites</h3>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={3}
        className="mySwiper"
      >

      {
          images.map((image,index)=>(

            <SwiperSlide key={index}>
              <img className='' src={image} alt="" />
            </SwiperSlide>


          ) )
        }

      </Swiper>

      <Link to='/rooms' className='grid place-items-center w-[150px] h-[40px] rounded-full bg-bold text-white mx-auto mt-[20px]'>Show All</Link>
       
    </div>
  )
}

export default RoomsSuites;
