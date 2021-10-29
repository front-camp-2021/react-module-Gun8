import { combineReducers } from 'redux';
import filtersReducer from './filters/filtersReducer';
import slidersReducer from './sliders/slidersReducer';


const rootReducer = combineReducers({
    filters: filtersReducer,
    sliders: slidersReducer,
});

export default rootReducer

