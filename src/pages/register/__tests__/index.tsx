import React from 'react'
import renderer from 'react-test-renderer'
import Register from '../index'
import 'jest-styled-components'

import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useHistory: jest.fn(),
  Link: () => <a></a>
}));

describe('Register', () => {
  it("Should render register", () => {
    const tree = renderer
      .create(<Register />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})