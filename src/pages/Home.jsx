import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero'
// import About from '../components/About';
import ChooseUs from '../components/ChooseUs';
import DiscoverLocation from '../components/DiscoverLocation';
import CallToAction from '../components/CallToAction';
import RoomsSuites from '../components/Rooms&Suites';
// import HotelInformation from "../components/Hotel.Information";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <DiscoverLocation />
      <RoomsSuites />
      <ChooseUs />
      <CallToAction />
      {/* <HotelInformation /> */}
    </div>
  )
}

export default Home
