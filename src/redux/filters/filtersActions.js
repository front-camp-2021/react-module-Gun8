import axios from "axios";
import {
    FETCH_FILTERS_REQUEST,
    FETCH_FILTERS_SUCCESS,
    FETCH_FILTERS_FAILURE,
    CHECK_FIELD,
    REMOVE_ALL_CHECKS,
} from "./filtersTypes";
import {prepareFilters} from '../../functions/prepareFilters';

const fields = ['categories','brands'];

export const fetchFilters = (url) => {
    return (dispatch) => {
        dispatch(fetchFiltersRequest());
        const filtersPromiseArr = fields.map(field => axios.get(`${url}/${field}`));

        Promise.all(filtersPromiseArr)
            .then(response => {
                const filters = {};
                response.forEach((item,i) => filters[fields[i]] = prepareFilters(item.data,fields[i]));
                dispatch(fetchFiltersSuccess(filters));
            })
            .catch(error => {
                dispatch(fetchFiltersFailure(error.message));
            })
    }
};

export const fetchFiltersRequest = () => {
    return {
        type: FETCH_FILTERS_REQUEST
    }
};

export const fetchFiltersSuccess = filters => {
    return {
        type: FETCH_FILTERS_SUCCESS,
        payload: filters
    }
};

export const fetchFiltersFailure = error => {
    return {
        type: FETCH_FILTERS_FAILURE,
        payload: error
    }
};


export const checkField = (data) => {
    return {
        type: CHECK_FIELD,
        payload: data
    }
};

export const removeAllChecks = () => {
  return {
      type: REMOVE_ALL_CHECKS
  }
};