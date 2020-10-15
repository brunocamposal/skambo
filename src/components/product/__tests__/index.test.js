import React from 'react';
import renderer from 'react-test-renderer';
import Product from '../index';
import 'jest-styled-components';

import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  Link: () => {},
  useHistory: jest.fn(),
  Link: () => <a></a>,
}));

describe('Product', () => {
  it('Should render product', () => {
    const tree = renderer.create(<Product />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
