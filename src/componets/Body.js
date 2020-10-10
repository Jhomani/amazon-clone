import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import ProductsBar  from './ProductsBar';

const Body = () => {
  return (
    <div className="home__container">
      <img
        className="banner-image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        alt="banner"
      />

      <Cards />
      <ProductsBar />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  );
};

export default Body;
