import React from "react";
import FormContainer from "../index";
import renderer from "react-test-renderer";

describe("Form  Snapshot test", () => {
  it("Form  Snapshot test Render", () => {
    const tree = renderer
      .create(
        <FormContainer />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

