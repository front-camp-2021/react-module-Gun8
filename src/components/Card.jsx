import React from 'react';

const Card = (props) => {
    const {id = '', images = [], title = '', rating = 0, price = 0,  brand = ''} = props.data;

    const bgImage = {
        backgroundImage: `url(${images[0]})`
    };

    return(
      <div className="item" id={id}>
          <div className="item__img" style={bgImage}/>
          <div className="item__inform">
              <div className="item__rating">
                  <span>{rating}</span>
                  <img src="img/star.svg" alt="star" />
              </div>
              <div className="item__price">{price + ' UAH'}</div>
          </div>
          <div className="item__description">
              <h2>{title}</h2>
              <p>{brand}</p>
          </div>
          <div className="item__buttons">
              <button>
                  <img src="img/black-heart.svg" alt="like" />
                      wishlist
              </button>
              <button>
                  <img src="img/shopping-bag.png" alt="like" />
                      add to cart
              </button>
          </div>
      </div>
    )
};

export default Card;