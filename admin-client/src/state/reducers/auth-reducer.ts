type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
};

const initialState = {
  user: {} as User,
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
    default:
      return state;
  }
}
