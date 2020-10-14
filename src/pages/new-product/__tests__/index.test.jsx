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

jest.mock('react-router-dom', () => ({
	__esModule: true,
	useHistory: jest.fn(),
	Link: () => <a></a>
}));

jest.mock('jwt-decode', () => () => ({
	// __esModule: true,
	jwtDecode: jest.fn('token', 3),
}));

describe("NewProduct", () => {
	it("Should render NewProduct", () => {
		const tree = TestRenderer.create(<NewProduct />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
