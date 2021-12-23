import React from 'react';
import '../styles/Home.scss';

//COMPONENTS
import Hero from '../components/HomeSections/Hero';
import Ofertas from '../components/HomeSections/Ofertas';
import Testimonials from '../components/HomeSections/Testimonials';
import OurServices from '../components/HomeSections/OurServices';

const Home = ({ beers, setBeers, loading }) => {
  return (
    <div className='home__container'>
      <Hero />
      <Ofertas beers={beers} setBeers={setBeers} loading={loading} />
      <OurServices />
      <Testimonials />
    </div>
  );
};

export default Home;
