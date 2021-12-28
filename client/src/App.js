import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//API
import Client from './api/api';

//Pages for routing
import Home from './pages/Home';
import Login from './pages/Login';
import Tienda from './pages/Tienda';
import TiendaDetails from './pages/TiendaDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PageNotFound from './pages/PageNotFound';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage] = useState(4);

  //CALLING THE API
  const getData = async () => {
    try {
      setLoading(true);
      let response = await Client.getEntries({
        content_type: 'beerHouseProject',
      });
      const fetchedBeers = await response.items;
      setBeers(fetchedBeers);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //GET CURRENT BEERS
  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);

  // CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home beers={beers} setBeers={setBeers} loading={loading} />
          </Route>
          <Route exact path='/tienda'>
            <Tienda
              paginate={paginate}
              beers={beers}
              currentBeers={currentBeers}
              setBeers={setBeers}
              totalBeers={beers.length}
              beersPerPage={beersPerPage}
            />
          </Route>
          <Route exact path='/tienda/:id'>
            <TiendaDetails beers={beers} />
          </Route>
          <Route exact path='/login' component={Login} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
          <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
