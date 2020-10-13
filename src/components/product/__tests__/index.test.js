import React from "react";
import renderer from "react-test-renderer";
import Product from "../index";
import "jest-styled-components";

import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;

describe("Product", () => {
  it("Should render product", () => {
    const tree = renderer.create(<Product />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});