import React, {useState} from 'react'
import testRenderer  from 'react-test-renderer';
import NewProduct from '../';

jest.mock('react', ()=>{
    useState: [_, jest.fn()]
})

// jest.mock('react-router-dom', () => {
//     Link: ({children}) => <a>{children}</a>,
//     useHistory: jest.fn(),
// })

test('render', ()=>{
const tree = testRenderer.create(<NewProduct/>).toJSON();
expect(tree).toMatchSnapshot()
})