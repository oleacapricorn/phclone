import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import LoginForm from 'login';

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <LoginForm className='login__form'/>            
      </div>
    )
  }
}

export default Login; 