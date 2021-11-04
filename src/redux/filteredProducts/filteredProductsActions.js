import {FILTER_PRODUCTS} from "./filteredProductsTypes";

export const filterProducts = (products) => {
  return {
      type: FILTER_PRODUCTS,
      payload: products
  }
};