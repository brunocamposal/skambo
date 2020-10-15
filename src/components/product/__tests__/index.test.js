import React from "react";
import renderer from "react-test-renderer";
import Product from "../index";
import "jest-styled-components";

global.MutationObserver = window.MutationObserver;

jest.mock('react-router', () => ({
  useParams: jest.fn().mockReturnValue({ id: '123' }),
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Product", () => {
  it("Should render product", () => {
    const tree = renderer.create(<Product />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});