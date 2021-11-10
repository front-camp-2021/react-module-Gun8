import {SET_SEARCH_VALUE} from "./searchTypes";

export const setSearchValue = (value) => {
    return {
        type: SET_SEARCH_VALUE,
        payload: value
    }
};