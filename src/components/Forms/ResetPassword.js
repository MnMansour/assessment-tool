import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, email} from 'redux-form-validators';
import {doSendPasswordResetEmail} from '../../util/firebase';
import {Input} from '../Inputs';

import './style.scss';

class ResetPassword extends Component {

  state = {
    loginError: false,
  }

  onSubmit = values => {
    const {email} = values;
    doSendPasswordResetEmail(email)
    .then(function(response) {
        console.log(response);
        return response;
    }).catch(error => {
        console.error(error);
        this.setState({loginError: true})
    });
  }

  render(){
    const {loginError} = this.state;
    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        { loginError && <div className="login-error">No user record with this email
          <span onClick={()=>this.setState({loginError: false})}>x</span></div> }
        <div>
          <Field label="email" name="email" component={Input} validate={[required(), email()]} type="text" />

          <div>
            <button className="login-button" type="submit" >Reset</button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'resetPassword',
})(ResetPassword)
