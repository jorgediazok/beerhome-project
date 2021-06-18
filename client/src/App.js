import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages for routing
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import Product from './pages/Product';
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
          <Route exact path="/" component={Home} />
          <Route path="/nosotros" component={About} />
          <Route path="/tienda" component={Shop} />
          <Route path="/tienda/:id" component={Product} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/success" component={Success} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
