const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  if (action.type === "SET_USER_INFO") {
    return {
      ...state,
      users: [...state.users, action.payload],
    };
  } else {
    return state;
  }
};

export default userReducer;
