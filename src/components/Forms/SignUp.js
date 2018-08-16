import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { required, numericality, length, confirmation, url} from 'redux-form-validators';
import _ from 'lodash'
import {writeToDatabase} from '../../redux/actions/actions';
import {linkloginAccounts, storage} from '../../util/firebase';
import {Input} from '../Inputs';
import Image from '../Inputs/imageForm'

import './style.scss';

class SignUp extends Component {

  state = {
    loginError: false,
    error: '',
  }

  componentWillMount() {
    const {user, dbUsers, initialize} = this.props;
    if (dbUsers) {
      const initializeData = dbUsers[user.uid];
      if(initializeData) {
        this.setState({image: initializeData.image});
        initialize(initializeData)
      }
    }
  }

  onSubmit = (values) => {
    const {fullname, password} = values,
    {user} = this.props,
    displayName = this.displayName(fullname),
    data = { ...values, displayName, role: 'student', uid: user.uid},
    email= user.email;
    delete data.password;  delete data.repassword;

    if(user.providerData.length === 1) {
      linkloginAccounts(email, password).then( (user) =>{
        if(user.message)  this.setState({loginError: true, error: user.message})
        else {
          this.uploadToDatabase(data)
        }
      })
    } else {
      this.uploadToDatabase(data)
    }
  }

  uploadToDatabase =  (data) => {
    const {writeToDatabase, history} = this.props,
          path = `users/${data.uid}`;
    if(data.image) {
      storage.child(`profile/${data.uid}`).delete().catch((e)=>console.log(e))
      storage.child(`profile/${data.uid}`).put(data.image[0]).then((snapshot)=>{
        if(snapshot.message)  this.setState({loginError: true, error: snapshot.message})
         else {
           storage.child(`profile/${data.uid}`).getDownloadURL().then(function(url) {
             const image = url;
             writeToDatabase(path, {...data, image}).then((user)=>{
               history.push('/profile')
             });
           })
        }
      })
    } else {
      writeToDatabase(path, data).then((user)=>{
        history.push('/profile')
      });
    }
  }

  displayName = (_displayName) =>{
    const {dbUsers} = this.props;
    if (dbUsers) {
        const allNames = _.mapValues(dbUsers, (user)=> user.displayName);
      console.log(allNames);
      const nameExisted = _.includes(allNames, _displayName)
      const displayName = _displayName.replace(/ /g,"-").toLowerCase()
      if (nameExisted) return displayName+2
      else return displayName
    }
  }

  restetImage = () => {
    this.props.resetSection('image')
  }


  render() {
    const {loginError, error, image} = this.state;
    const {user:{providerData}} = this.props;
    return (
      <form className="signup-page" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        { loginError && <div className="login-error">{error}
          <span onClick={()=>this.setState({loginError: false})}>x</span></div> }
          <Field type="file" name="image" component={Image} resetImage={this.restetImage} Image={image}/>

          <div className="signup-page__name-phone">
            <Field label="full Name" name="fullname" component={Input} validate={[required()]} type="text" />
            <Field label="phone" name="phone" component={Input} validate={[required(), length({min:8}), numericality()]} type="text" />
          </div>

          {providerData.length === 1 && <div className="signup-page__passwords">
            <Field label="password" name="password" component={Input} validate={[required(), length({min:8})]} type="password" />
            <Field label="re-password" name="repassword" component={Input} validate={[required(), confirmation({ field: 'password', fieldLabel: 'password' })]} type="password" />
          </div>}

          <Field label="github link" name="github" component={Input} validate={[url()]} type="text" />
          <Field label="linkedin link" name="linkedin" component={Input} validate={[url()]} type="text" />
          <div>
            <button className="signup-button" type="submit" >Sign Up</button>
          </div>
      </form>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.user,
    dbUsers: state.dbUsers
  };
}

let form = reduxForm({
  form: 'signup'
})(SignUp);

form = connect(mapStateToProps, {writeToDatabase})(form);

export default form;
