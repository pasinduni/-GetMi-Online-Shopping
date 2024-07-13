import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Categories from '../src/components/Categories';
import LatestProducts from '../src/components/LatestProducts';
import Cart from '../src/components/Cart';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/categories" component={Categories} />
          <Route path="/latest-products" component={LatestProducts} />
          <Route path="/cart" component={Cart} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
