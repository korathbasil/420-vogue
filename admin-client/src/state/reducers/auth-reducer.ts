type User = {
  _id: string;
  name: string;
  email: string;
};

const initialState = {
  user: {},
  loggedIn: false,
};

export function authReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
  }
}
