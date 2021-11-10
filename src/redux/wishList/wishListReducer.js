import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST} from "./wishListTypes";

const initialState = {
    data: []
};

const wishListReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_WISHLIST:
            state.data.push(action.payload);
            return {
                ...state,
            };

        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload.id)
            };

        case CLEAR_WISHLIST:
            return {
                ...state,
                data: []
            };

        default: return state;
    }
};

export default wishListReducer;