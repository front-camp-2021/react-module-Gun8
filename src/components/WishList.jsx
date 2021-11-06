import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from './Header';
import CardList from './CardList';
import Pagination from './Pagination';
import {clearWishList} from "../redux";

const WishList = () => {
    const wishList = useSelector(state => state.wishList.data);
    const dispatch = useDispatch();

    return(
        <div className="wish-list">
            <Header linksHistory = {['Wish list']}/>
            <button onClick={() => dispatch(clearWishList())} className="wish-list__btn">CLEAR ALL ITEMS</button>
            <CardList products = {wishList}/>
            <Pagination />
        </div>
    )
};

export default WishList;