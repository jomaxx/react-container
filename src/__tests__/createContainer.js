import React from "react";
import { render } from "react-testing-library";
import { createContainer } from "../";

it("has initial state", () => {
  const Container = createContainer({ done: true });
  const spy = jest.fn(() => null);

  render(<Container>{spy}</Container>);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toMatchSnapshot();
});

it("derives state from props", () => {
  const Container = createContainer();
  const spy = jest.fn(() => null);

  Container.getDerivedStateFromProps = () => ({
    done: true
  });

  render(<Container>{spy}</Container>);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toMatchSnapshot();
});
