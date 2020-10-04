import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { FormInput } from '../formFields';



class LoginForm extends Component {
  render()  {
    return (
      <form className={`${className} sign-in-form`}>
      sign innn
      <Field className='sign-in-form__email'
      type='email'
      title='Email'
      placeholder='Email'
      name='email'
      component={FormInput}/>
      <Field className='sign-in-form__password'
      type='password'
      title='Password'
      placeholder='Password'
      name='password'
      component={FormInput}/>
  </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'SignIn'
})(LoginForm);

export default LoginForm; 