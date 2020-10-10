import React from 'react';
import { Link } from 'react-router-dom';

const ProductsBar = () => {
  return (
    <div className="home__productsBar">
      <div className="headerBar">
        <h5 className="d-inline-block mr-2">Our favorite Toys</h5>
        <Link>Shop now</Link>
      </div>
      <div className="galeryImages">
        <img src="" alt="1" />
        <img src="" alt="2" />
        <img src="" alt="3" />
      </div>
    </div>
  );
};

export default ProductsBar;
