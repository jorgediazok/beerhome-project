import React, { useState, useEffect } from 'react';
import '../styles/Home.scss';

//API
import Client from '../api/api';

//COMPONENTS
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import OurProducts from '../components/HomeSections/OurProducts';

const Home = () => {
  const [beers, setBeers] = useState([]);

  //CALLING THE API
  const getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'beerHouseProject',
      });
      const fetchedBeers = await response.items;
      setBeers(fetchedBeers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(beers);

  return (
    <div className='home__container'>
      <Hero />
      <OurProducts />
    </div>
  );
};

export default Home;
