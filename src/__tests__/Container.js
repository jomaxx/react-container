import React from "react";
import { render } from "react-testing-library";
import { Container } from "../";

it("renders container", () => {
  const spy = jest.fn(() => null);

  render(<Container>{spy}</Container>);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toMatchSnapshot();
});

it("consumes container", () => {
  const spy = jest.fn(() => null);

  render(
    <Container>
      <Container.Consumer>{spy}</Container.Consumer>
    </Container>
  );

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toMatchSnapshot();
});

it("sets state", () => {
  const spy = jest.fn(() => null);

  render(
    <Container>
      <Container.Consumer>{spy}</Container.Consumer>
    </Container>
  );

  spy.mock.calls[0][0].setState({ done: true });

  expect(spy).toHaveBeenCalledTimes(2);
  expect(spy).toMatchSnapshot();
});
