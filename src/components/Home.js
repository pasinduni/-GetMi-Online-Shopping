import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="jumbotron text-center">
        <h1>Welcome to GetMi Store</h1>
        <p>Discover the best products at the best prices!</p>
      </div>
      <div className="container">
        <h2>Discounts</h2>
        <div className="row">
          {/* Add discount items here */}
        </div>
        <h2>Most Popular Items</h2>
        <div className="row">
          {/* Add popular items here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
