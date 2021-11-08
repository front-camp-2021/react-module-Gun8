import React, {useEffect} from 'react';
import Header from './Header';
import Catalog from './Catalog';
import Pagination from './Pagination';
import {fetchFilters, fetchProducts} from "../redux";
import {useDispatch} from 'react-redux';

const Electronics = () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFilters(url));
        dispatch(fetchProducts(url));
    }, []);

    return(
        <>
            <Header linksHistory = {['eCommerce','Electronics']}/>
            <Catalog />
            <Pagination />
        </>
    );
};

export default Electronics;