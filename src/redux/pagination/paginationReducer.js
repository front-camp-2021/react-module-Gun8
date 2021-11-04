import {CHANGE_PAGE, CHANGE_NUMBER_OF_PAGES} from "./paginationTypes";

const initialState = {
    currentPage: 1,
    totalPages: 10,
    pageLimit: 12
};

const paginationReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };

        case CHANGE_NUMBER_OF_PAGES:
            return {
                ...state,
                totalPages: action.payload
            };

        default: return state;
    }
};

export default paginationReducer;