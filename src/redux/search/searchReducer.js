import {SET_SEARCH_VALUE} from "./searchTypes";

const initialState = {
  value: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_SEARCH_VALUE:
            return {
                ...state,
                value: action.payload
            }

        default: return state;
    }
};

export default searchReducer;