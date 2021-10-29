import {CHANGE_THUMB_LOCATION, RESET_SLIDERS} from './slidersTypes';

const initialState = {
    price: {
        min: 53,
        max: 85000,
        formatValue: value => value + '₴',
        filterName: "Price"
    }
};

const slidersReducer = (state = initialState, action) => {
  switch (action.type){
      case CHANGE_THUMB_LOCATION:
          const name = action.payload.name;

          return{
              ...state,
              [name]: {
                  ...state[name],
                  selected: action.payload.selected
              }
          };

      case RESET_SLIDERS:
          for (const [key, value] of Object.entries(state)) {
              state[key] = {
                  ...state[key],
                  selected: {
                      from: value.min,
                      to: value.max
                  }
              }
          }

          return {...state};

      default: return state;
  }
};

export default slidersReducer;
