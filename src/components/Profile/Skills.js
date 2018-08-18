import React from 'react';
import {connect} from 'react-redux';
import {deleteFromDatabase} from '../../redux/actions/actions';
import removeIcon from '../../assets/delete-icon-white.png';
import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';




const Skills = ({Data: {skill, level, id}, enableEdit, user, deleteFromDatabase}) => {
  const removeSkill = () => {


    confirmAlert({
        title: 'Confirm to remove',
        message: 'Are you sure to do this.',
        buttons: [{
            label: 'Yes',
            onClick: () => {
              if (user) {
                const path = `skills/${user.uid}`
                deleteFromDatabase(path, id)
              }
            }
          },
          { label: 'No'}
        ]})
  }
  return (
    <div className="section__body__skills">
      <div>{skill}</div>
      <div>{level}</div>
      {enableEdit && <img src={removeIcon} alt="remove" onClick={()=>removeSkill()}/>}
    </div>
  )
};


function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {deleteFromDatabase})(Skills);
