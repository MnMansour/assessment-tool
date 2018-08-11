import React, { Component } from 'react';
import {auth} from 'firebase';
import { Field, reduxForm } from 'redux-form';
import { required, email, numericality, length, confirmation, url} from 'redux-form-validators';
import {linkloginAccounts, writeData} from '../../util/firebase'
import {Input} from '../Inputs';

class SignUp extends Component {

  state = {
    loginError: false,
    body:this.props.body,
    id: null,
    github: null,
  }

  componentDidMount(){
    auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        console.log(firebaseUser);
        this.setDefaultValues(firebaseUser);
      }
    })
  }

  setDefaultValues = (Data) => {
    this.setState({
      id: Data.displayName,
      github: Data,
    });
  }

  onSubmit = async values => {
    const {fullname, phone, email, password, github, linkedin} = values,
          {Id} = this.state,
    userDate = {
      fullname,
      phone,
      email,
      github,
      linkedin,
      role: 'student',
    },
    userLink = `users/${Id}`;
    console.log(userDate, userLink);
    await linkloginAccounts(email, password);
    await writeData(userLink, userDate)
  }

  render() {
    const {loginError} = this.state
    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        { loginError && <div className="login-error">That display name is already taken, try another one.
          <span onClick={()=>this.setState({loginError: false})}>x</span></div> }
        <div>
          <Field label="full Name" name="fullname" component={Input} validate={[required()]} type="text" />

          <Field label="phone" name="phone" component={Input} validate={[required(), length({min:8}), numericality()]} type="text" />

          <Field label="email" name="email" component={Input} validate={[required(), email()]} type="text" />

          <Field label="password" name="password" component={Input} validate={[required(), length({min:8})]} type="password" />

          <Field label="re-password" name="repassword" component={Input} validate={[required(), confirmation({ field: 'password', fieldLabel: 'password' })]} type="password" />

          <Field label="github link" name="github" component={Input} validate={[url()]} type="text" />

          <Field label="linkedin link" name="linkedin" component={Input} validate={[url()]} type="text" />

          <div>
            <button className="signup-button" type="submit" >Sign Up</button>
          </div>
        </div>
      </form>
    )
  }

}

export default reduxForm({
  form: 'signup',
})(SignUp)
