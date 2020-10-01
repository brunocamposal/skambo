import React from "react";
import FormField from "../index";
import renderer from "react-test-renderer";
import { Form } from "semantic-ui-react";

import { shallow } from "enzyme";

describe("FormField Snapshot test", () => {
  it("FormField Snapshot test Render", () => {
    const tree = renderer
      .create(
        <FormField name="name" label="label" type="type" inputRef={() => {}} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Test Enzyme", () => {
  it("Rendering all arguments", () => {
    const wrapper = shallow(
      <FormField/>
    );

    expect(
      wrapper.equals(
        <Form.Field >
          <label/>
          <input/>
        </Form.Field>
      )
    ).toBeTruthy();
  });
});
