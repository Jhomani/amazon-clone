import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchData } from '../../hooks/fectCollection';

const ProductsBar = ({ collection }) => {
  const [loading, data] = useFetchData(collection, []);
  const [images, setImages] = useState(null);

  const getImages = async () => {
    const fetchedImages = [];

    if (data) {
      try {
        for (let item of data[0].images) {
          const res = await item.get()

          fetchedImages.push(res.data().images[0]);
        }

        setImages(fetchedImages);
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    getImages();
  }, [data]);

  if (!images) {
    return (
      <div className="home__productsBar">
        loaging...
      </div>
    );
  } else {
    return (
      <div className="home__productsBar">
        <div className="headerBar mb-2">
          <h5
            className="d-inline-block mr-2"
            style={{ fontWeight: 600 }}
          >
            {data ? data[0].name : ""}
          </h5>
          <Link to="/">Shop now</Link>
        </div>
        <div className="box__products">
          {images
            ? images.map((url, index) => (
              <React.Fragment key={index}>
                <div className="mr-3">
                  <Link to="">
                    <img className="bar__image" src={url} alt="1" />
                  </Link>
                </div>
                <div className="mr-3">
                  <Link to="">
                    <img className="bar__image" src={url} alt="1" />
                  </Link>
                </div>
                <div className="mr-3">
                  <Link to="">
                    <img className="bar__image" src={url} alt="1" />
                  </Link>
                </div>
              </React.Fragment>))
            : ''
          }
        </div>
      </div>
    );
  }
};

export default ProductsBar;

