import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from 'redux-form-validators';
import {writeToDatabase} from '../../redux/actions/actions';
import {Input} from '../Inputs';

import './style.scss';

class Skills extends Component {


  onSubmit = (values) => {
    const {user, title ,closeModal} = this.props;
    const id = new Date().getTime(),
      path = `${title}/${user.uid}/${id}`;
    this.props.writeToDatabase(path, {...values, id}).then(()=> closeModal())
  }

  render(){
    console.log(this.props);
    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        <div>
          <Field label="skill name" name="skill" component={Input} validate={required()} type="text" />

          <div>
            <button type="submit" >ADD</button>
          </div>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

let form = reduxForm({
  form: 'SkillsForm'
})(Skills);

form = connect(mapStateToProps, {writeToDatabase})(form);

export default form;
