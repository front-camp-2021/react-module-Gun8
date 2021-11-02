import {
    FETCH_FILTERS_REQUEST,
    FETCH_FILTERS_SUCCESS,
    FETCH_FILTERS_FAILURE,
    CHECK_FIELD,
    REMOVE_ALL_CHECKS,
} from "./filtersTypes";

const initialState = {
    loading: false,
    data: {},
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
            const name = action.payload.name;

            return {
                ...state,
                data: {
                    ...state.data,
                    [name]: state.data[name].map((item, index) => {
                    if (action.payload.index === index) {
                        return {
                            ...item,
                            checked: !item.checked
                        }
                    }

                    return item;
                })
            }
            };

        case REMOVE_ALL_CHECKS:
            for (const [key, value] of Object.entries(state.data)) {
                state.data[key] = value.map(item => {
                    return {
                        ...item,
                        checked: false
                    }
                });
            }

            return {...state};

        default: return state;
    }
};

export default filtersReducer;