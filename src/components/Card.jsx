import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToWishList,removeFromWishList} from "../redux";

const Card = (props) => {
    const {id = '', images = [], title = '', rating = 0, price = 0,  brand = ''} = props.data;

    let wishListIdArray = [];
    const redHeart = '<img src="img/red-heart.svg" alt="like">wishlist';
    const blackHeart = '<img src="img/black-heart.svg" alt="like">wishlist';

    const wishList = useSelector(state => state.wishList);
    const dispatch = useDispatch();
    const wishListButton = useRef(null);

   useEffect(() => {
       wishListIdArray = wishList.data.map(item => item.id);

        if(wishListIdArray.includes(props.data.id)){
            wishListButton.current.innerHTML = redHeart;
        }
        else {
            wishListButton.current.innerHTML = blackHeart;
        }
    });

    const bgImage = {
        backgroundImage: `url(${images[0]})`
    };

    const toggleWishList = () => {
        if(!wishListIdArray.includes(props.data.id)){
            wishListButton.current.innerHTML = redHeart;
            dispatch(addToWishList(props.data));
        }
        else {
            wishListButton.current.innerHTML = blackHeart;
            dispatch(removeFromWishList(props.data));
        }
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
              <button ref={wishListButton} onClick={toggleWishList}>
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