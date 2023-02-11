// import React from 'react';
// import { shallow } from 'enzyme';
// import Login from '../loginComponent/Login'
// import Adapter from 'enzyme-adapter-react-16';
// import { configure } from 'enzyme';

// import Firebase from "../firebase";
// import { authMock } from "../setupTests";
// import { render, cleanup, fireEvent } from '@testing-library/react';
// // @ts-ignore
// Firebase.auth = authMock;

// configure({ adapter: new Adapter() });
// // describe what we are testing
// describe('Login Component', () => {
//     afterEach(cleanup);
//     // make our assertion and what we expect to happen 
//     it('should render without throwing an error', () => {
//         expect(shallow(<Login />).find('form.login_form').exists()).toBe(true)
//     })
//     it('renders a email input', () => {
//         expect(shallow(<Login />).find('#email').length).toEqual(1)
//     })
//     it('renders a password input', () => {
//         expect(shallow(<Login />).find('#password').length).toEqual(1)
//     })
// })

// describe('Email input', () => {
//     it('should respond to change event and change the state of the Login Component', () => {
//         const wrapper = shallow(<Login />);
//         wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'blah@gmail.com' } });
//         expect(wrapper.state('email')).toEqual('blah@gmail.com');
//     })
// })

// describe('Password input', () => {
//     it('should respond to change event and change the state of the Login Component', () => {
//         const wrapper = shallow(<Login />);
//         wrapper.find('#password').simulate('change', { target: { name: 'password', value: 'cats' } });
//         expect(wrapper.state('password')).toEqual('cats');
//     })
// })

// describe('<SignOutButton />', () => {
//   afterEach(cleanup);

//   it('calls Firebase signOut on click', async () => {
//     const SignOutButton = (await import('./SignOutButton')).default;
//     const { getByText } = render(<SignOutButton />);
//     const button = getByText('Sign Out');
//     fireEvent.click(button);
//     expect(Firebase.auth().signOut).toHaveBeenCalled();
//   });
// });






// import React from 'react';
// import expect from 'chai';
// import { shallow } from 'enzyme';

// import Login from '../loginComponent/Login';
// import { Button, TextField } from '@mui/material';

// import Adapter from 'enzyme-adapter-react-16';
// import { configure } from 'enzyme';

// configure({ adapter: new Adapter() });


// describe('<Login>', () => {
//   it('has a login button', () => {
//     const wrapper = shallow(<Login/>);
//     expect(wrapper.containsMatchingElement(<Button type='submit'>Login</Button>)).isValid(true);
//   });

//   it('has a email input field', () => {
//     const wrapper = shallow(<Login/>);
//     expect(wrapper.containsMatchingElement(<TextField type="email" />)).isValid(true);
//   });

//   it('has a password input field', () => {
//     const wrapper = shallow(<Login/>);
//     expect(wrapper.containsMatchingElement(<TextField type="password" />)).isValid(true);
//   });

//   it('passes login information', () => {
//     const email = 'tjgarlick@gmail.com';
//     const password = '123password';
//     const wrapper = shallow(<Login handleLogin={state => {
//       expect(state.email).toBe(email);
//       expect(state.password).toBe(password);
//     }}/>);
//     wrapper.setState({ email: 'tjgarlick@gmail.com', password: '123password'});
//     wrapper.find('Button').simulate('click');
//   });
// });


// import React from "react";
// import {  shallow } from "enzyme";
// import Login from '../loginComponent/Login';

// import Adapter from 'enzyme-adapter-react-16';
// import { configure } from 'enzyme';

// configure({adapter: new Adapter()});

// describe("Test login form", function() {
//   let wrapper;

//   it("ユーザー名を正しく作成された。", function() {
//     wrapper = shallow(<Login />);
//     wrapper.find('TextField[type="text"]').simulate("change", {
//       target: { id: "username", value: "world" }
//     });
//     expect(wrapper.state("username")).toEqual("world");
//   });

//   it("パスワードを正しく作成された。", function() {
//     wrapper = shallow(<Login />);
//     wrapper.find('TextField[type="text"]').simulate("change", {
//       target: { id: "password", value: "123" }
//     });
//     expect(wrapper.state("password")).toEqual("123");
//   });

//   it("login check with right data", () => {
//     wrapper = shallow(<Login />);
//     wrapper
//       .find('TextField[type="text"]')
//       .simulate("change", { target: { id: "username", value: "world" } });
//     wrapper
//       .find('TextField[type="password"]')
//       .simulate("change", { target: { id: "password", value: "123" } });
//     wrapper.find("Button").simulate("click");
//     expect(wrapper.state("loggedIn")).toBe(true);
//   });
// });


// import React from 'react';
// import { shallow } from 'enzyme';
// import Login from  '../loginComponent/Login';

// import Adapter from 'enzyme-adapter-react-16';
// import { configure } from 'enzyme';

// configure({adapter: new Adapter()});

// describe('Test case for testing login', () => {
//     let wrapper;
//     test('username check', () => {
//         wrapper = shallow(<Login />);
//         wrapper.find('TextField[type="email"]').simulate('change', { target: { name: 'username', value: 'sinerajarc@gmail.com' } });
//         expect(wrapper.state('username')).toEqual('sinerajarc@gmail.com');
//     })
//     it('password check', () => {
//         wrapper = shallow(<Login />);
//         wrapper.find('TextField[type="password"]').simulate('change', { target: { name: 'password', value: 'sineraja123' } });
//         expect(wrapper.state('password')).toEqual('krishankant123');
//     })
//     it('login check with right data', () => {
//         wrapper = shallow(<Login />);
//         wrapper.find('TextField[type="email"]').simulate('change', { target: { name: 'username', value: 'sinerajarc@gmail.com' } });
//         wrapper.find('TextField[type="password"]').simulate('change', { target: { name: 'password', value: 'sineraja123' } });
//         wrapper.find('Button').simulate('click');
//         expect(wrapper.state('setTimeActive')).toBe(true);
//     })
//     it('login check with wrong data', () => {
//         wrapper = shallow(<Login />);
//         wrapper.find('TextField[type="email"]').simulate('change', { target: { name: 'username', value: 'sineraja' } });
//         wrapper.find('TextField[type="password"]').simulate('change', { target: { name: 'password', value: 'sineraja123' } });
//         wrapper.find('Button').simulate('click');
//         expect(wrapper.state('setTimeActive')).toBe(false);
//     })
// })



// import React from 'react';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { useAuthValue } from '../AuthContext';
// import { Login } from './Login';

// configure({ adapter: new Adapter() });

// describe('LoginForm Component', () => {
//   it('should show username label', () => {
//     // WHEN
//     const signInFormElement = useAuthValue(<Login />);
//     const usernameLabelElement = signInFormElement.find('TextField[type="email"]');

//     // THEN
//     expect(usernameLabelElement.text()).toEqual('Email Id');
//   });

//   it('should show password label', () => {
//     // WHEN
//     const signInFormElement = useAuthValue(<Login />);
//     const passwordLabelElement = signInFormElement.find('[data-testid="label-password"]');

//     // THEN
//     expect(passwordLabelElement.text()).toEqual('Password');
//   });

//   it('should submit the username and password', () => {
//     // GIVEN
//     const onSubmitMock = jest.fn();
//     const password = 'test';
//     const username = 'test@gmail.com';

//     // WHEN
//     const signInFormElement = useAuthValue(<Login onSubmit={onSubmitMock}/>);

//     const passwordInput = signInFormElement.find('[data-testid="input-password"]');
//     const usernameInput = signInFormElement.find('[data-testid="input-username"]');
//     const signInSubmitButton = signInFormElement.find('[data-testid="button-sign-in-submit"]');

//     passwordInput.simulate('change', { target: { value: password } });
//     usernameInput.simulate('change', { target: { value: username } });
//     signInSubmitButton.simulate('submit');

//     // THEN
//     /* 
//     onSubmit will be called with 3 parameters but only the first one interests me:
//     values : Object
//     The field values in the form of { field1: 'value1', field2: 'value2' }.
//     https://redux-form.com/8.2.2/docs/api/reduxform.md/#-code-onsubmit-function-code-optional-
    
//     a less explicite option:
//     expect(onSubmitMock.mock.calls[0][0]).toEqual({username, password});
//     */
//     expect(onSubmitMock).toHaveBeenCalledWith(
//       {username, password},
//       expect.any(Function),
//       expect.any(Object),
//     );
//   });

//   it('should show a errorMessage message if passed one', () => {
//     // GIVEN
//     const onSubmitMock = jest.fn();
//     const errorMsg = 'errorMessage message';

//     // WHEN
//     const signInFormElement = useAuthValue(<Login errorMessage={errorMsg} onSubmit={onSubmitMock}/>);
//     const errorMessageElement = signInFormElement.find('[data-testid="error-message"]');

//     // THEN
//     expect(errorMessageElement.text()).toEqual(errorMsg);
//   });
// });



import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountWithProviders } from '../mountWithProviders';
import { Login } from './Login';

configure({ adapter: new Adapter() });

describe('LoginForm Component', () => {
  it('should show username label', () => {
    // WHEN
    const signInFormElement = mountWithProviders(<Login />);
    const usernameLabelElement = signInFormElement.find('[data-testid="username"]');
    // THEN
    expect(usernameLabelElement.id()).toEqual('username');
  });

  it('should show password label', () => {
    // WHEN
    const signInFormElement = shallow(<Login />);
    const passwordLabelElement = signInFormElement.find('<FormControl> </FormControl>');
    // THEN
    expect(passwordLabelElement.TextField()).toEqual('username');
  });

  it('should submit the username and password', () => {
    // GIVEN
    const onSubmitMock = jest.fn();
    const password = 'test';
    const username = 'test@gmail.com';

    // WHEN
    const signInFormElement = mountWithProviders(<Login onSubmit={onSubmitMock}/>);

    const passwordInput = signInFormElement.find('[data-testid="input-password"]');
    const usernameInput = signInFormElement.find('[data-testid="input-username"]');
    const signInSubmitButton = signInFormElement.find('[data-testid="button-sign-in-submit"]');

    passwordInput.simulate('change', { target: { value: password } });
    usernameInput.simulate('change', { target: { value: username } });
    signInSubmitButton.simulate('submit');

    // THEN
    /* 
    onSubmit will be called with 3 parameters but only the first one interests me:
    values : Object
    The field values in the form of { field1: 'value1', field2: 'value2' }.
    https://redux-form.com/8.2.2/docs/api/reduxform.md/#-code-onsubmit-function-code-optional-
    
    a less explicite option:
    expect(onSubmitMock.mock.calls[0][0]).toEqual({username, password});
    */
    expect(onSubmitMock).toHaveBeenCalledWith(
      {username, password},
      expect.any(Function),
      expect.any(Object),
    );
  });

  it('should show a errorMessage message if passed one', () => {
    // GIVEN
    const onSubmitMock = jest.fn();
    const errorMsg = 'errorMessage message';

    // WHEN
    const signInFormElement = mountWithProviders(<Login errorMessage={errorMsg} onSubmit={onSubmitMock}/>);
    const errorMessageElement = signInFormElement.find('[data-testid="error-message"]');

    // THEN
    expect(errorMessageElement.text()).toEqual(errorMsg);
  });
});