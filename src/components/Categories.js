import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Categories.css';

const categories = [
  'Interior/Exterior Items',
  'Kitchen Items',
  'Kids Toys',
  'Clothes',
  'Gifts',
  'Health & Beauty'
];

const Categories = () => {
  return (
    <div className="categories container">
      <h1>Categories</h1>
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <Link to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-primary">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
