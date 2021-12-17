import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages for routing
import Home from './pages/Home';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import PageNotFound from './pages/PageNotFound';

//Components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/nosotros' component={Nosotros} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/cart' component={Shop} />
          <Route exact path='/cart/:id' component={Product} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/success' component={Success} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
