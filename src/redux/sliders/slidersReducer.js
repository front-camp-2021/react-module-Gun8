import {CHANGE_THUMB_LOCATION, RESET_SLIDERS, SET_SLIDERS} from './slidersTypes';

const initialState = {};

const slidersReducer = (state = initialState, action) => {
  switch (action.type){
      case SET_SLIDERS:
          return{
              ...action.payload
          };
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
