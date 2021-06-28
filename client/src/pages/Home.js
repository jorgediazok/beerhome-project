import React, { useState, useEffect } from 'react';

//API
import Client from '../api/api';

//COMPONENTS
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
      console.log(beers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
