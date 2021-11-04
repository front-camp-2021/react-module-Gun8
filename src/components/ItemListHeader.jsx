import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ItemListHeader = () => {

    const filteredProducts = useSelector(state => state.filteredProducts.data);

    return(
        <div className="item-list-header">
            <p className="item-list-header__counter" data-element="results">{filteredProducts.length} results found</p>
            <Link to='/wishlist'>
                <button className="item-list-header__like-btn">
                    <img src="img/like.svg" alt="like"/>
                </button>
            </Link>
        </div>
    );
};

export default ItemListHeader;