import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero'
import About from '../components/About';
import ChooseUs from '../components/ChooseUs';
import DiscoverLocation from '../components/DiscoverLocation';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ChooseUs />
      <DiscoverLocation />
      <CallToAction />
    </div>
  )
}

export default Home
