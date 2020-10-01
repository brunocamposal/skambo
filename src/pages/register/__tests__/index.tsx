import React from 'react'
import renderer from 'react-test-renderer'
import Register from '../index'
import 'jest-styled-components'

import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

describe('Register', () => {
  it("Should render register", () => {
    const tree = renderer
      .create(<Register />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})