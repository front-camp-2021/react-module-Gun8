import { combineReducers } from 'redux';
import filtersReducer from './filters/filtersReducer';
import slidersReducer from './sliders/slidersReducer';
import productsReducer from './products/productsReducer';


const rootReducer = combineReducers({
    filters: filtersReducer,
    sliders: slidersReducer,
    products: productsReducer
});

export default rootReducer

