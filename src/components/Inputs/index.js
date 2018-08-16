import React from 'react';
import ReactQuill from 'react-quill';

import './style.scss';
import 'react-quill/dist/quill.snow.css';


export const Input = ({ input, label, type, meta: { touched, error }}) => (
  <div className="inputField">
    <label htmlFor={input.name}>{label}</label>
    <input {...input}  type={type} id={input.name}/>
      {touched && error && <div className="error">{error}</div>}
  </div>
);


export const Textarea = ({ input, label, meta: { touched, error }}) => (
  <div className="inputField">
    <label htmlFor={input.name}>{label}</label>

      <ReactQuill
        {...input}
        theme='snow'
        modules={Textarea.modules}
        formats={Textarea.formats}
        bounds={'.app'}
       />
      {touched && error && <div className="error">{error}</div>}
  </div>
);

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Textarea.modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link', 'image', 'video'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Textarea.formats = [
  'bold', 'italic', 'underline', 'blockquote',
  'list', 'bullet',
  'link', 'image', 'video'
]
