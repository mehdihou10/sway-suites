import Header from '../components/Header';
import { amenties } from '../data/amenties';


const Amenties = () => {
  return (
    <>
      <Header />
      
      <div className="amenities-page px-[30px] mt-[70px]">


        <h1 className='main-title text-gray-800 after:bg-gray-800 text-center font-rokkit text-[30px]'>Our Amenities</h1>

        <p className='page-description'>Experience luxury at its finest with our spa, delectable dining, and attentive concierge service for an unforgettable stay</p> 

        <div className="amenities grid grid-cols-2 sm:grid-cols-3 gap-[20px] mt-[30px]">
          {
            amenties.map(amenity=>(
              <div key={amenity.id} className="amenity text-center">
                <img src={amenity.image} className='mx-auto' />
                <h3 className='font-semibold'>{amenity.title}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Amenties
