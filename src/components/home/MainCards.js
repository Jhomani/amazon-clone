import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetchData } from '../../hooks/fectCollection';

import Button from '@material-ui/core/Button';

const MainCards = () => {
  const [loading, data] = useFetchData('indicador', []);
  
  return (
    <div className="container-fluid card__component">
      <div className="row">
        <div className="card-box col-4 col-xl-3">
          <h4 className="font-weight-bold">Shop by Category</h4>
          <div className="row my-3" style={{}}>
            { (data) 
              ? data[0].content.map(({ image, name }, index) => {
                  return (
                    <div className="col-6 text-center" key={index}>
                      <Link className="none-underscore" to="#">
                        <img src={image} alt="galery" />
                        <p className="card__caption">{name}</p>
                      </Link>
                    </div>
                  ); 
                }) 
              : 
                <div >
                  there is no data
                </div>
            }
          </div>
          <Link 
            to="#" 
          >
            show now
          </Link>  
        </div>
        <div className="card-box col-4 col-xl-3">
          <h4 className="font-weight-bold"> AmazonBasic </h4>
          <Link to="#">
            <img 
              src={ (data) ?data[1].image :"" } 
              alt="fullimg"
              className="normalMainCard__img"
            />
          </Link>
          <Link to="#">show now</Link>  
        </div>
        <div className="card-box col-4 col-xl-3">
          <h4 className="font-weight-bold"> Electronics </h4>
          <Link to="#">
            <img 
              src={ (data) ?data[1].image :"" } 
              alt="fullimg"
              className="normalMainCard__img"
            />
          </Link>
          <Link>show now</Link>  
        </div>
        <div className="card-box d-none d-xl-block col-xl-3">
          <h4 className="font-weight-bold mb-4">Sign in for the best experiece</h4>
          <button className="btn btn-warning btn-block">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default MainCards;
