import {CHANGE_PAGE, CHANGE_NUMBER_OF_PAGES} from "./paginationTypes";

export const changePage = (num) => {
  return {
      type: CHANGE_PAGE,
      payload: num
  };
};

export const changeNumOfPages = (num) => {
    return {
        type: CHANGE_NUMBER_OF_PAGES,
        payload: num
    };
};