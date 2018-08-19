import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required, url} from 'redux-form-validators';
import {writeToDatabase} from '../../redux/actions/actions';
import * as constants from '../../util/constants'
import {Input, Textarea} from '../Inputs';

import './style.scss';

class ProjectsAndAssignments extends Component {

  componentDidMount() {
    const {Data, initialize} = this.props;
      if(Data){
        initialize(Data)
      };
  }

  onSubmit = (values) => {
    const {user, title, Data ,closeModal} = this.props;
    if (Data) {
      const id = Data.id
      const path = `${title}/${user.uid}/${id}`;
      this.props.writeToDatabase(path, {...values, id}).then(()=> closeModal())
    }
    else {
      const id = new Date().getTime(),
        path = `${title}/${user.uid}/${id}`;
    this.props.writeToDatabase(path, {...values, id}).then(()=> closeModal())
    }

  }

  render(){
    const isProjectForm = this.props.title === constants.PROJECTS;
    const name = isProjectForm ? 'project' : 'assignment';
    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        <div>
          <Field label={`${name} name`} name="name" component={Input} validate={required()} type="text" />

          {!isProjectForm &&
            <div>
              <label>assignment on-going</label>
              <div>
                <Field name="ongoing" component="select">
                  <option value="ongoing">Yes</option>
                  <option value="done">Done</option>
                </Field>
              </div>
            </div>
          }

          <Field label="repositorie link" name="repo" component={Input} validate={[required(), url()]} type="text" />

          <Field label="live at" name="live" component={Input} type="text" />

          <Field label="description" name="description" component={Textarea}  />
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
})(ProjectsAndAssignments);

form = connect(mapStateToProps, {writeToDatabase})(form);

export default form;
