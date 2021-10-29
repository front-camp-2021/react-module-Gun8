import {CHANGE_THUMB_LOCATION, RESET_SLIDERS} from './slidersTypes';

export const changeThumbLocation = (data) => {
  return {
      type: CHANGE_THUMB_LOCATION,
      payload: data
  }
};

export const resetSlider = () => {
  return {
      type: RESET_SLIDERS
  }
};