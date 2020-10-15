import React from 'react';
import ChangeProfile from '../index';
import TestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Form } from 'semantic-ui-react';

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    errors: jest.fn(),
  }),
}));

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(),
}));

jest.mock('jwt-decode', () => () => ({}));

describe('Change-Profile Snapshot test', () => {
  it('Change Profile Snapshot test Render', () => {
    const tree = TestRenderer.create(<ChangeProfile />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

// describe('Test Enzyme', () => {
//   it('Rendering all arguments', () => {
//     const wrapper = shallow(<ChangeProfile />);

//     expect(
//       wrapper.containsAllMatchingElements(
//         <input name="name" type="type" placeholder="placeholder" ref={() => {}} />
//       )
//     ).to.equal(true);
//   });
// });
