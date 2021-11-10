import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST} from "./wishListTypes";

export const addToWishList = (item) => {
  return {
      type: ADD_TO_WISHLIST,
      payload: item
  }
};

export const removeFromWishList = (item) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: item
    }
};

export const clearWishList = () => {
  return {
      type: CLEAR_WISHLIST
  }
};
