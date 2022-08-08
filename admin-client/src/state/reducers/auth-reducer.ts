type User = {
  _id: string;
  name: string;
  email: string;
};

const initialState = {
  user: {} as User,
  loggedIn: false,
};

export function authReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    default:
      return state;
  }
}
