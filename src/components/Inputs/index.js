import React from 'react';
import './style.scss';

export const Input = ({ input, label, type, meta: { touched, error }}) => (
  <div className="inputField">
    <label htmlFor={input.name}>{label}</label>
    <input {...input}  type={type}/>
      {touched && error && <div className="error">{error}</div>}
  </div>
);


export const Textarea = ({ input, label, meta: { touched, error }}) => (
  <div className="inputField">
    <label htmlFor={input.name}>{label}</label>
    <textarea {...input} rows="4" />
      {touched && error && <div className="error">{error}</div>}
  </div>
);
