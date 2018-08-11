import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, date } from 'redux-form-validators';
import * as constants from '../../util/constants'
import {Input, Textarea} from '../Inputs';

import './style.scss'

class EducationAndExperience extends Component {

  componentDidMount() {
    const {body, initialize} = this.props
      if(body){
        initialize(body)
      };
  }

  onSubmit = values => console.log(JSON.stringify(values))

  render(){
    const isEducationForm = this.props.title === constants.EDUCATION;
    const Titles = isEducationForm ? constants.Forms.Education : constants.Forms.Experience;
    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        <div>
          <Field label={Titles.place} name={Titles.place} component={Input} validate={required()} type="text" />

          <Field label={Titles.title} name={Titles.title} component={Input} validate={required()} type="text" />

          <Field label="Location" name="location" component={Input} validate={required()} type="text" />

          <div className="groupFields">
            <Field label="From" name="from-date" type="month" component={Input} validate={[required(), date({ format: 'yyyy-mm' })]}  />
            <Field label="To" name="to-date" type="month" component={Input} validate={[date({ format: 'yyyy-mm' })]}  />
          </div>

          <Field label={Titles.description} name={Titles.description} component={isEducationForm ? Input : Textarea} validate={required()} />
          <div>
            <button type="submit" >ADD</button>
          </div>'
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'EAEForm',
})(EducationAndExperience)
