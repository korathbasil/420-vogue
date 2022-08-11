import { FC, ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "state/store";

const customRender = (ui: JSX.Element, options?: object) => {
  render(<Provider store={store}>{ui}</Provider>);
};

export { customRender as render };
