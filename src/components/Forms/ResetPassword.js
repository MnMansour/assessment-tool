import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendPasswordResetEmail} from '../../redux/actions/actions';
import { Field, reduxForm } from 'redux-form';
import { required, email} from 'redux-form-validators';
import {Input} from '../Inputs';

import './style.scss';

class ResetPassword extends Component {

  state = {
    loginError: false,
  }

  onSubmit = values => {
    const {email} = values;
    this.props.sendPasswordResetEmail(email).catch(()=>this.setState({loginError:true}))

  }

  render(){
    const {loginError} = this.state;
    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        { loginError && <div className="login-error">No user exists with such email
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

let form = reduxForm({
  form: 'resetPassword',
})(ResetPassword)

form = connect( '',{sendPasswordResetEmail})(form);

export default form;
