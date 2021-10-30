import axios from 'axios';
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from "./productsTypes";

export const fetchProducts = (url) => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios.get(`${url}/products`)
            .then(response => {
                const products = response.data;
                dispatch(fetchProductsSuccess(products));
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error.message));
            })
    }
};

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
};

export const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
};

export const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
};