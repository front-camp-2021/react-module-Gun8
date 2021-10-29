import React from 'react';
import Header from './Header';
import CardList from './CardList';
import Pagination from './Pagination';
import { products } from '../fixtures/products.js'

const WishList = () => {
    const data = [...products].splice(1,2);

    return(
        <div style={{height: '100vh'}}>
            <Header linksHistory = {['Wish list']}/>
            <CardList data = {data}/>
            <Pagination />
        </div>
    )
};

export default WishList;