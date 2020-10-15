import React from "react";
import renderer from "react-test-renderer";
import TopBar from "../index";
import "jest-styled-components";

import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;

jest.mock("react-redux", () => ({
  useSelector: () => jest.fn()
}))


describe("TopBar", () => {
  it("Should render menu", () => {
    const tree = renderer.create(<TopBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});