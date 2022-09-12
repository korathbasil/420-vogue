import { legacy_createStore as createStore, combineReducers } from "redux";
import { authReducer } from "./reducers/auth-reducer";

export const store = createStore(
  combineReducers({
    auth: authReducer,
  })
);

export type State = ReturnType<typeof store.getState>;
