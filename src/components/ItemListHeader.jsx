import React from 'react';
import {Link} from 'react-router-dom';

const ItemListHeader = () => {
    return(
        <div className="item-list-header">
            <p className="item-list-header__counter" data-element="results">7,618 results found</p>
            <Link to='/wishlist'>
                <button className="item-list-header__like-btn">
                    <img src="img/like.svg" alt="like"/>
                </button>
            </Link>
        </div>
    );
};

export default ItemListHeader;