import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//API
import Client from './api/api';

//Pages for routing
import Home from './pages/Home';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import Shop from './pages/Shop';
import ProductSingle from './pages/ProductSingle';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import PageNotFound from './pages/PageNotFound';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
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

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home beers={beers} setBeers={setBeers} />
          </Route>
          <Route exact path='/nosotros' component={Nosotros} />
          <Route exact path='/products'>
            <Products beers={beers} setBeers={setBeers} />
          </Route>
          <Route exact path='/products/:id'>
            <ProductSingle beers={beers} />
          </Route>
          <Route exact path='/cart' component={Shop} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/success' component={Success} />
          <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
