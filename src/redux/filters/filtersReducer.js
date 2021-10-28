import {CHECK_FIELD, REMOVE_ALL_CHECKS} from "./filtersTypes";
import {initialState} from "./filtersInitialState";

const filtersReducer = (state = initialState, action) => {
    switch (action.type){
        case CHECK_FIELD:
            const name = action.payload.name;

            return {
                ...state,
                [name]: state[name].map((item, index) => {
                    if(action.payload.index === index){
                        return {
                            ...item,
                            checked: true
                        }
                    }

                    return item;
                })
            };

        case REMOVE_ALL_CHECKS:
            for (const [key, value] of Object.entries(state)) {
                state[key] = value.map(item => {
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