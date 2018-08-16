import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { required, email} from 'redux-form-validators';
import {login} from '../../redux/actions/actions';
import {Input} from '../Inputs';
import FormModal from '../Modal';
import {RESET_PASSWORD} from '../../util/constants'

import './style.scss';

class SignIn extends Component {

  state = {
    loginError: false,
    modalIsOpen: false,
  }

  onSubmit = values => {
    this.props.login(values.email, values.password).catch(()=>this.setState({loginError:true}))
  }

  modal = (title) => {
    const {modalIsOpen} = this.state;
    return <FormModal title={title} modalIsOpen={modalIsOpen} closeModal={this.closeModal}/>
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render(){
    const {loginError} = this.state;
    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        { loginError && <div className="login-error">incorrect email or password
          <span onClick={()=>this.setState({loginError: false})}>x</span></div> }
        <div>
          <Field label="email" name="email" component={Input} validate={[required(), email()]} type="text" />

          <Field label="password" name="password" component={Input} validate={required()} type="password" />
          <span className="forgot" onClick={this.openModal} >Forgot your Password?</span>
          <div>
            <button className="login-button" type="submit" >Login</button>
          </div>
          {this.modal(RESET_PASSWORD)}
        </div>
      </form>
    )
  }
}

let form = reduxForm({
  form: 'signin',
})(SignIn)

form = connect( '',{login})(form);

export default form;
