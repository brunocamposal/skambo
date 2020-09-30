import React from "react";
import renderer from "react-test-renderer";
import Sidebar from "../index";
import "jest-styled-components";

import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;

describe("Sidebar", () => {
  it("Should render sidebar", () => {
    const tree = renderer.create(<Sidebar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
