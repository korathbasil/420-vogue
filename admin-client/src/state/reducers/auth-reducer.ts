type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
};

const initialState: { user: User | null; loggedIn: boolean } = {
  user: null,
  loggedIn: false,
};

export function authReducer(
  state = initialState,
  action: { type: string; payload: any }
): typeof initialState {
  switch (action.type) {
    case "auth/login":
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };

    case "user/set":
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
