import React, {useEffect} from 'react';
import Card from './Card';
import {useSelector, useDispatch} from 'react-redux';
import {changeNumOfPages, changePage} from "../redux";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 50px auto 0;
`;

const CardList = (props) => {
    const products = useSelector(state => state.products);
    const pagination = useSelector(state => state.pagination);
    const dispatch = useDispatch();

    const {currentPage, pageLimit} = pagination;
    const pageIndex = currentPage - 1;

    useEffect(() => {
        if(products.loading || products.data.length === 0) return;
        dispatch(changeNumOfPages(Math.ceil(props.products.length/pagination.pageLimit)));
        dispatch(changePage(1));
    }, [props.products]);

    return(
        products.loading ?
            <ClipLoader color={'#6F64F8'} css={override} size={250} />
        :
            <div className="item-list" data-element="cards">
                {props.products
                    .slice(pageIndex*pageLimit, currentPage*pageLimit)
                    .map((item, index) => <Card data = {item} key = {index}/>)}
            </div>
    )
};

export default CardList;