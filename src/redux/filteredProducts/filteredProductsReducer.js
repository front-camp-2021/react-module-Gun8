import {FILTER_PRODUCTS} from "./filteredProductsTypes";

const initialState = {
    data: [],
};

const filteredProductsReducer = (state = initialState, action) => {
    switch (action.type){
        case FILTER_PRODUCTS:
            return {
                ...state,
                data: action.payload
            };

        default: return state;
    }
};

export default filteredProductsReducer;