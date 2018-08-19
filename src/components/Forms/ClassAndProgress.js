import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from 'redux-form-validators';
import {writeToDatabase} from '../../redux/actions/actions';
import {Input} from '../Inputs';

import './style.scss';

const ClassAndProgress = ({id, writeToDatabase, closeModal, handleSubmit}) => {
  const onSubmit = (values) => {
    const path = `users/${id}`;
    console.log(path);
    writeToDatabase(path, values).then(()=> closeModal())
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit) }>
      <div>
        <Field label="class name" name="class" component={Input} validate={required()} type="text" />
        <Field label="progress percent " name="progress" component={Input} validate={required()} type="text" />

        <div>
          <button type="submit" >Set</button>
        </div>
      </div>
    </form>
  )
}



let form = reduxForm({
  form: 'SkillsForm'
})(ClassAndProgress);

form = connect(null, {writeToDatabase})(form);

export default form;
