type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
};

const initialState: { user: User | null } = {
  user: null,
};

export function authReducer(
  state = initialState,
  action: { type: string; payload: any }
): typeof initialState {
  switch (action.type) {
    case "auth/login":
      return {
        ...state,
        user: action.payload,
      };

    case "user/set":
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
