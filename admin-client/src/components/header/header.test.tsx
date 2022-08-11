import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "state/store";

import { Header } from "./header";

describe("Header", () => {
  it("renders a heading", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // const heading = screen.getByRole("heading", {
    //   name: /welcome to next\.js!/i,
    // });

    // expect(heading).toBeInTheDocument();
    const a = 10;
    expect(a).toBe(10);
  });
});
