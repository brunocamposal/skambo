import React from 'react';
import Card from '../index';
import TestRenderer from 'react-test-renderer';

describe('Card  Snapshot test', () => {
  it('Card Snapshot test Render', () => {
    const tree = TestRenderer.create(<Card />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});