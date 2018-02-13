import React from 'react'
import './StudentTable.css'
import { connect } from 'react-redux'

const StudentTable = (props) => {
  const ListItems = Object.values(props.user.users).map((item,index)=>{
    if (props.match.params.id === item.id) {
      return(
        <li key={index}><i className={`${index % 2 === 0 ? 'fas' : 'far'} fa-user-circle`}></i> {`${item.firstName} ${item.lastName}`}</li>
      )
    }
});
  return (
    <div className="stu-table">
      <h3 className="title">Student</h3>
      <form>
      <div className="group">
        <input type="text" required/>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Search</label>
      </div>
    </form>
			<ul className="list-table">
        {ListItems}
			</ul>
		</div>
  )
}

const mapStateToProps =(state)=>{
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(StudentTable);
