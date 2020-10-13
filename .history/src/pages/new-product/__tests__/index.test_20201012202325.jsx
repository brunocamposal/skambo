import React from 'react';
import TestRenderer from 'react-test-renderer';
import NewProduct from '../index';
import jwtDecode from 'jwt-decode';
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;

jest.mock('react-redux', () => ({
	__esModule: true,
	useSelector: () => jest.fn(),
}));

// jest.mock('react-router-dom', () => ({
// 	__esModule: true,
// 	useHistory: jest.fn(),
// 	Link: () => <a></a>
// }));



// jest.mock('react-hook-form', () => ({
// 	__esModule: true,
// 	useForm: () => ({
// 		register: jest.fn(),
// 		handleSubmit: jest.fn(),
// 		errors: {},
// 		reset: jest.fn(),
// 	}),
// }));

// test('render <NewProduct />', () => {

// 	const jwtDecode = jest.fn('token', 3)
// 	jest.mock('jwt-decode', () => ({
// 		// __esModule: true,
// 		jwtDecode: jest.fn('token', 3),
// 	}));


// 	const tree = TestRenderer.create(<NewProduct />).toJSON();
// 	expect(tree).toMatchSnapshot()
// })
describe("NewProduct", () => {
	it("Should render NewProduct", () => {
		const tree = TestRenderer.create(<NewProduct />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
