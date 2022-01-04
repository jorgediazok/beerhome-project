import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

  const { cartItems } = useSelector((state) => state.cart);

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

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cartItems.forEach((item) => {
      console.log(item.qty);
      items += item.qty;
      price += item.qty * item.item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cartItems, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  //GET CURRENT BEERS
  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);

  // CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Router>
        <Navbar totalItems={totalItems} />
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
          <Route exact path='/cart'>
            <Cart totalPrice={totalPrice} totalItems={totalItems} />
          </Route>
          <Route exact path='/checkout' component={Checkout} />
          <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
