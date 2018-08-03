import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from 'redux-form-validators';
import {Input} from '../Inputs';

import './style.scss';

class Skills extends Component {

  componentDidMount() {
    const {body, initialize} = this.props
      if(body){
        initialize(body)
      };
  }

  onSubmit = values => console.log(JSON.stringify(values))

  render(){
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

export default reduxForm({
  form: 'EAEForm',
})(Skills)
