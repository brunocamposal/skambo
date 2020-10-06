import React from 'react';
import FormContainer from '../index';
import TestRenderer from 'react-test-renderer';

describe('Form  Snapshot test', () => {
  it('Form  Snapshot test Render', () => {
    const tree = TestRenderer.create(<FormContainer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
