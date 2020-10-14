import React from 'react';

import Header from '../components/commons/Header';
import MainCards from '../components/home/MainCards';
import ProductsBar  from '../components/home/ProductsBar';

const Home = () => {
  return (
    <div className="home__container">
      <Header />
      <div className="banner__home">
        <img
          className="banner-image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt="banner"
        />
      </div>
      <div className="content__home">
        <MainCards />
        <ProductsBar collection={'indicator_bar'} />
        <ProductsBar collection={'indicator_bar'} />
        <MainCards />
        <ProductsBar collection={'indicator_bar'} />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
