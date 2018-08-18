import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from 'redux-form-validators';
import {writeToDatabase} from '../../redux/actions/actions';
import {Input} from '../Inputs';

import './style.scss';

class Skills extends Component {

  componentDidMount() {
    const {Data, initialize} = this.props
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
    console.log(this.props);
    return (
      <form className="form" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        <div>
          <Field label="skill name" name="skill" component={Input} validate={required()} type="text" />

          <div>
            <label>skill level</label>
            <div>
              <Field name="level" component="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
            </div>
          </div>

          <div>
            <button type="submit" >ADD</button>
          </div>'
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
