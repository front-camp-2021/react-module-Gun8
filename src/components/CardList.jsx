import React, {useEffect} from 'react';
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
    const data = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(url));
    }, []);

    return(
        data.loading ?
            <ClipLoader color={'#6F64F8'} css={override} size={250} />
        :
            <div className="item-list" data-element="cards">
                {data.products.map((item, index) => <Card data = {item} key = {index}/>)}
            </div>
    )
};

export default CardList;