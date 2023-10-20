const initialState = {
  user: null,
  loggedIn: false,
};

type UserAction =
  | {
      type: "LOGIN";
      payload: string;
    }
  | {
      type: "LOGOUT";
    };

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action?.payload,
        loggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
