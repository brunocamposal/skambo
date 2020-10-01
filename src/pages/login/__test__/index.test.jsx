import React from "react";
import Login from "../index";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";

import enzyme from 'enzyme'

jest.mock("react-redux", () => ({
  __esModule: true,
  useDispatch: () => jest.fn(),
}));

jest.mock("react-hook-form", () => ({
  __esModule: true,
  useForm: () => ( {register: jest.fn(), handleSubmit: jest.fn(), errors: jest.fn()} ),
}));

describe("teste do compoenente Login", () => {
  it("render Link component", () => {
    const tree = enzyme.shallow(<Login />)
    
    expect(tree.find(Link).length).toBe(2)
  });
  it("Render Form component", () => {
    const tree = enzyme.shallow(<Login />)
    
    expect(tree.find(Form).length).toBe(1)
  });
});
