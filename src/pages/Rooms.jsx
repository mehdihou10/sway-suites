import React from 'react'
import Header from '../components/Header'
import {rooms} from '../data/rooms';

const Rooms = () => {
  return (
    <>
      <Header />
      
      <div className="rooms-page px-[30px] mt-[100px]">

        <h1 className='page-title'>Our Rooms</h1>
        <p className='page-description'>Luxurious Rooms & Suites Await at Our Prestigious Hotel</p>

        <div className="grid grid-cols-3 gap-[20px] mt-[50px]">

          {
            rooms.map((room,index)=>{

              return (

                <div key={index} className="room">

                  <div className="image page-box-image">
                  <img className='' src={room.image} />
                  </div>

                </div>
              )
            })
          }

        </div>


      </div>

    </>
  )
}

export default Rooms
