import React from 'react';
import ReactTable from "react-table";
import { Field, reduxForm } from 'redux-form';
import { required, email} from 'redux-form-validators';
import {Input} from '../Inputs';
import "react-table/react-table.css";

const Table = ({Data, title, length, onSearch, onDelete, handleSubmit, onSubmit, resetSection}) => {
  const submit= (values) =>{
    onSubmit(values);
    resetSection('email');
  }
  return (
    <div className="admin-page__table">
      <div className="title">{title}</div>
      <input className="input" placeholder="Searh here!" onChange={onSearch}/>
      <ReactTable
        data={Data}
        columns={[
          {Header: 'Email',
           accessor: 'email'},
          {
           accessor: 'id',
           maxWidth: 70,
           Cell: row => <div onClick={()=>onDelete(row.value)}>Delete</div>,
         },
        ]}
        pageSize={Data.length < 8 ? Data.length : 8}
        className={Data.length < 8 ? "-highlight hide-bottom" : "-highlight"}
        noDataText="No Data!"
      />
    <form className="form" onSubmit={ handleSubmit(submit) }>
        <Field label="email" name="email" component={Input} validate={[required(), email()]} type="text" />
        <button className="button" type="submit">Add</button>
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'signin',
})(Table);
