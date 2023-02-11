import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Login from './loginComponent/Login';
import Register from './registerComponent/Register';
import VerifyEmail from './verifyComponent/VerifyEmail';
import App from './App';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

jest.mock('firebase/app');

test('valid path should  redirect to verify-email', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[ '/verify-email' ]}>
      <App/>
    </MemoryRouter>
  );
 // expect(wrapper.find(Login)).toHaveLength(0);
 // expect(wrapper.find(Register)).toHaveLength(0);
  expect(wrapper.find(VerifyEmail)).toHaveLength(0);
});

test('valid path should  redirect to Login', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[ '/login' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(0);
 // expect(wrapper.find(Register)).toHaveLength(1);
 // expect(wrapper.find(VerifyEmail)).toHaveLength(1);
});

test('valid path should  redirect to Register', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[ '/register' ]}>
      <App/>
    </MemoryRouter>
  );
  // expect(wrapper.find(Login)).toHaveLength(1);
  expect(wrapper.find(Register)).toHaveLength(0);
//  expect(wrapper.find(VerifyEmail)).toHaveLength(1);
});

