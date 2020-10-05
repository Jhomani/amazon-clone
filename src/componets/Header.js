import React from "react";
import "./style/Header.scss";

const Header = () => {
  return (
    <div className="container Header d-flex">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="brand"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/*logo*/}
      </div>
      <ul className="header__nav">
        <li className="header_option">
          <span className="header__optionCaption">Hello</span>
          Dada
        </li>
        <li className="header_option">
          <span className="header__optionCaption">Returns</span>& Orders
        </li>
        <li className="header_option">
          <span className="header__optionCaption">Hello</span>
          Dada
        </li>
        <li className="header_option">
          <span className="header__optionCaption">Your</span>
          Prime
        </li>
      </ul>
    </div>
  );
};

export default Header;
