import { combineReducers } from 'redux';
import filtersReducer from './filters/filtersReducer';
import slidersReducer from './sliders/slidersReducer';
import productsReducer from './products/productsReducer';
import searchReducer from './search/searchReducer';
import filteredProductsReducer from './filteredProducts/filteredProductsReducer';
import paginationReducer from './pagination/paginationReducer';
import wishListReducer from './wishList/wishListReducer';


const rootReducer = combineReducers({
    filters: filtersReducer,
    sliders: slidersReducer,
    products: productsReducer,
    search: searchReducer,
    filteredProducts: filteredProductsReducer,
    pagination: paginationReducer,
    wishList: wishListReducer
});

export default rootReducer;

