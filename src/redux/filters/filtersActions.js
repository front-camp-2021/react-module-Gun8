import {CHECK_FIELD ,REMOVE_ALL_CHECKS} from "./filtersTypes";

export const checkField = (data) => {
    return {
        type: CHECK_FIELD,
        payload: data
    }
};

export const removeAllChecks = () => {
  return {
      type: REMOVE_ALL_CHECKS
  }
};