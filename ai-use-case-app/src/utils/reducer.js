const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const userReducer = (state = initialState, action) => {
  if (action.type === "SET_USER_INFO") {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return state;
  }
};

export default userReducer;
