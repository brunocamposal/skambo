import React from 'react';
import Login from '../index';
import TestRenderer from 'react-test-renderer';

jest.mock('react-redux', () => ({
  __esModule: true,
  useDispatch: () => jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useHistory: jest.fn(),
  Link: () => <a></a>
}));

jest.mock('react-hook-form', () => ({
  __esModule: true,
  useForm: () => ({ register: jest.fn(), handleSubmit: jest.fn(), errors: jest.fn() }),
}));

test('Render Form component', () => {
  const tree = TestRenderer.create(<Login />).toJSON();

  expect(tree).toMatchSnapshot();
});

