import React, {useEffect, useState} from 'react';
import Card from './Card';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from "../redux";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 50px auto 0;
`;

const CardList = () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const pageLimit = 12;
    const pageIndex = 0;

    const products = useSelector(state => state.products);
    const filters = useSelector(state => state.filters.data);
    const sliders = useSelector(state => state.sliders);
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchProducts(url));
    }, []);

    useEffect(() => {
        if(products.data.length === 0 || sliders === {} || filters === {}) return;

        const checked = {
            brands: [],
            categories: []
        };

        Object.entries(filters).forEach(([key,value]) => value.forEach(item => {
            if(item.checked) checked[key].push(item.value.split("=")[1].toLowerCase());
        }));

        Object.entries(checked).forEach(([key,value]) => {
            if(value.length === 0) checked[key] = filters[key].map(filter => filter.value.split("=")[1].toLowerCase());
        });


        setFilteredProducts(products.data.filter(product =>
            product.price >= sliders.price.selected.from && product.price <= sliders.price.selected.to &&
            checked.categories.includes(product.category) && checked.brands.includes(product.brand)
        ));

    },[filters,sliders]);

    return(
        products.loading ?
            <ClipLoader color={'#6F64F8'} css={override} size={250} />
        :
            <div className="item-list" data-element="cards">
                {filteredProducts
                    .splice(pageIndex*pageLimit,pageLimit)
                    .map((item, index) => <Card data = {item} key = {index}/>)}
            </div>
    )
};

export default CardList;