import {
    FETCH_FILTERS_REQUEST,
    FETCH_FILTERS_SUCCESS,
    FETCH_FILTERS_FAILURE,
    CHECK_FIELD,
    REMOVE_ALL_CHECKS,
} from "./filtersTypes";

const initialState = {
    loading: false,
    data: [],
    error: ''
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_FILTERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_FILTERS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_FILTERS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            };
        case CHECK_FIELD:
            const value = action.payload.value;
            const index = action.payload.index;
            return {
                ...state,
                data: state.data.map(filter => {
                    if(filter[0].value.slice("=")[0] === value.slice("=")[0]){
                        filter[index].checked = !filter[index].checked
                    }

                    return filter;
                })
            };

        case REMOVE_ALL_CHECKS:
            return{
                ...state,
                data: state.data.map(filter => filter.map(item => {
                    item.checked = false;
                    return item;
                }))
            };

        default: return state;
    }
};

export default filtersReducer;