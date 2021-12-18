import React from 'react';
import '../styles/Home.scss';

//COMPONENTS
import Hero from '../components/HomeSections/Hero';
import Ofertas from '../components/HomeSections/Ofertas';

const Home = ({ beers, setBeers }) => {
  console.log(beers);
  return (
    <div className='home__container'>
      <Hero />
      <Ofertas beers={beers} setBeers={setBeers} />
    </div>
  );
};

export default Home;
