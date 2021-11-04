import React from 'react';
import Header from './Header';
import Catalog from './Catalog';
import Pagination from './Pagination';

const Electronics = () => {
    return(
        <>
            <Header linksHistory = {['eCommerce','Electronics']}/>
            <Catalog />
            <Pagination />
        </>
    );


};

export default Electronics;