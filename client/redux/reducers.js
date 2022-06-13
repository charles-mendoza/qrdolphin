import { SET_DARK_MODE } from './actions';

const initialState = {
  darkMode: false
}

export const themeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_DARK_MODE:
      return {...state, darkMode: actions.payload}
    default:
      return state;
  }
}
