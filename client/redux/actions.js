export const SET_DARK_MODE = "SET_DARK_MODE";

export const setDarkMode = (darkMode) => (dispatch) => {
  dispatch({
    type: SET_DARK_MODE,
    payload: darkMode
  });
}
