import React, {useEffect, useState} from 'react';
import Card from './Card';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts, filterProducts} from "../redux";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 50px auto 0;
`;

const CardList = () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    const products = useSelector(state => state.products);
    const filters = useSelector(state => state.filters);
    const sliders = useSelector(state => state.sliders);
    const search = useSelector(state => state.search);
    const filteredProducts = useSelector(state => state.filteredProducts.data);
    const pagination = useSelector(state => state.pagination);
    const dispatch = useDispatch();

    const {currentPage, pageLimit} = pagination;
    const pageIndex = currentPage - 1;

    useEffect(() => {
        dispatch(fetchProducts(url));
    }, []);

    useEffect(() => {
        console.log('here');
        if(products.data.length === 0 || sliders === {} || filters.data === {}) return;
        const checked = {
            brands: [],
            categories: []
        };

        Object.entries(filters.data).forEach(([key,value]) => value.forEach(item => {
            if(item.checked) checked[key].push(item.value.split("=")[1].toLowerCase());
        }));

        Object.entries(checked).forEach(([key,value]) => {
            if(value.length === 0) checked[key] = filters.data[key].map(filter => filter.value.split("=")[1].toLowerCase());
        });

        const data = products.data.filter(product =>
                product.price >= sliders.price.selected.from
                && product.price <= sliders.price.selected.to
                && checked.categories.includes(product.category)
                && checked.brands.includes(product.brand)
                && product.title.toLowerCase().includes(search.value.toLowerCase())
        );
        dispatch(filterProducts(data));
    },[filters, sliders, search]);

    return(
        products.loading ?
            <ClipLoader color={'#6F64F8'} css={override} size={250} />
        :
            <div className="item-list" data-element="cards">
                {filteredProducts
                    .slice(pageIndex*pageLimit, currentPage*pageLimit)
                    .map((item, index) => <Card data = {item} key = {index}/>)}
            </div>
    )
};

export default CardList;