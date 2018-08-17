import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required, date } from 'redux-form-validators';
import {writeToDatabase} from '../../redux/actions/actions';
import * as constants from '../../util/constants'
import {Input, Textarea} from '../Inputs';

import './style.scss'

class EducationAndExperience extends Component {

  // componentDidMount() {
  //   const {body, initialize} = this.props
  //     if(body){
  //       initialize(body)
  //     };
  // }

  componentWillMount() {
    console.log(this.props);
  }

  onSubmit = (values) => {
    console.log(JSON.stringify(values));
    const {user, title} = this.props,
          id = new Date().getTime(),
          path = `${title}/${user.uid}/${id}`;
          console.log(path);
    this.props.writeToDatabase(path, {...values, id})
  }

  render(){
    const isEducationForm = this.props.title === constants.EDUCATION;
    const place = isEducationForm ? 'school' : 'company';
    const title = isEducationForm ? 'field' : 'position';

    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        <div>
          <Field label={place} name="place" component={Input} validate={required()} type="text" />

          <Field label={title} name="title" component={Input} validate={required()} type="text" />

          {isEducationForm && <Field label="dgree" name="dgree" component={Input} validate={required()} type="text" />}
          <Field label="Location" name="location" component={Input} validate={required()} type="text" />

          <div className="groupFields">
            <Field label="From" name="fromDate" type="month" component={Input} validate={[required(), date({ format: 'yyyy-mm' })]}  />
            <Field label="To" name="toDate" type="month" component={Input} validate={[date({ format: 'yyyy-mm' })]}  />
          </div>

          <Field label="description" name="description" component={Textarea} validate={required()} />
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
  form: 'EAEForm'
})(EducationAndExperience);

form = connect(mapStateToProps, {writeToDatabase})(form);

export default form;
