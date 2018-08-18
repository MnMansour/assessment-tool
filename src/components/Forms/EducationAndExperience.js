import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required, date } from 'redux-form-validators';
import {writeToDatabase} from '../../redux/actions/actions';
import * as constants from '../../util/constants'
import {Input, Textarea} from '../Inputs';

import './style.scss'

class EducationAndExperience extends Component {

  componentDidMount() {
    const {Data, initialize} = this.props
      if(Data){
        initialize(Data)
      };
  }

  componentWillMount() {
    console.log(this.props);
  }

  onSubmit = (values) => {
    const {user, title, Data} = this.props;
    if (Data) {
      const id = Data.id
      const path = `${title}/${user.uid}/${id}`;
      this.props.writeToDatabase(path, {...values, id})
    }
    else {
      const id = new Date().getTime(),
        path = `${title}/${user.uid}/${id}`;
    this.props.writeToDatabase(path, {...values, id})
    }

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
            <button type="submit" >Save</button>
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
