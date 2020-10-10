import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="home__categoriesCards">
      <div className="home__categoriesCard">
        <h3>Shop by Category</h3>
        <div className="categoryGalery">
          <div>
            <img src="" alt="galery" />
            <p>description</p>
          </div>
          <div>
            <img src="" alt="galery" />
            <p></p>
          </div>
          <div>
            <img src="" alt="galery" />
            <p></p>
          </div>
          <div>
            <img src="" alt="galery" />
            <p></p>
          </div>
        </div>
        <Link>show now</Link>  
      </div>
      <div className="home__categoriesCard">
        <h1> AmazonBasic </h1>
        <img src="" alt="fullimg" />
        <Link>show now</Link>  
      </div>
      <div className="home__categoriesCard">
        <h1>Electronics </h1>
        <img src="" alt="fullimg" />
        <Link>show now</Link>  
      </div>
      <div className="home__categoriesCard">
        <h1>Movies</h1>
        <img src="" alt="fullimg" />
        <Link>show now</Link>  
      </div>
    </div>
  );
}

export default Cards;
