// ref: https://blog.logrocket.com/testing-next-js-apps-jest/

// You should ensure that your application has been appropriately
// tested. You should include at least one snapshot test and
// appropriate unit tests for both the front-end and back-end of the
// application.

// import dependencies
import Home from "../pages/index"; // home/landing page
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// ***************************
// 1) Frontend Jest unit test
describe("Home", () => {
  it("renders the landing page heading", () => {
    render(<Home />);

    // Check if the page heading text renders correctly - element identified by testId
    expect(screen.getByTestId("heading").textContent).toBe(
      "Welcome to Glasgow Southside Board Gamers!"
    );
  });
});

// ***************************
// 2) Frontend snapshot test of /Home page
it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

// ***************************
// // 3) Backend unit test - in separate file: tests/badPw.test.js
