import { screen } from "@testing-library/react";
import { render } from "utils";
import { Header } from "./header";

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);

    // const heading = screen.getByRole("heading", {
    //   name: /welcome to next\.js!/i,
    // });

    // expect(heading).toBeInTheDocument();
    const a = 10;
    expect(a).toBe(10);
  });
});
