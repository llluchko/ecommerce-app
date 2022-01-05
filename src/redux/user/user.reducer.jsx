const INITIAL_STATE = {
  currentUser: null,
};

// null is value; pass the state value if it's in the function else pass the initial state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
