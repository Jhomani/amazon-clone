import React, { useState, useEffect } from 'react';
// icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
// redux
import { connect } from 'react-redux';
import { someAction } from '../store/actions';

const Header = ({ product }) => {
  const [cart, setCart] = useState(null);

  React.useEffect(() => {}, [product]);

  return (
    <div className="fluid-container Header d-flex px-3 py-2 align-items-center">
      <div className="mr-4">
        <MenuIcon fontSize="large" style={{ color: 'white' }} />
      </div>
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="brand"
        className="align-self-end"
      />
      <div className="header__search ml-5 mr-2 position-relative">
        <input type="text" className="header__searchInput" />
        <button className="btn-own-warning position-absolute">
          <SearchIcon />
        </button>
      </div>
      <ul className="header__nav d-flex p-0 m-0">
        <li className="header_option mx-3 text-light font-weight-bold">
          <span className="header__optionCaption">Hello, info</span> <br />
          Account & List
        </li>
        <li className="header_option mx-3 text-light font-weight-bold">
          <span className="header__optionCaption">Returns</span> <br />
          <span>& Orders</span>
        </li>
        <li className="position-relative mx-3 text-light d-flex align-items-center">
          <ShoppingCartIcon fontSize="large" />
          <div className="shoppingCart__counter">1</div>
        </li>
      </ul>
    </div>
  );
};

const store = (store) => {
  return {
    product: store.products,
  };
};

export default connect(store, null)(Header);
