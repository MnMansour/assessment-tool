import React from 'react'
import './StudentTable.css'
import { connect } from 'react-redux'

const StudentTable = (props) => {
  console.log(ListItems);
  const ListItems = Object.keys(props.user).map(function(key, index) {
    console.log(`${props.user[key].firstName} ${props.user[key].lastName}`);

    return(
      <li><i className={`${index%2==0? 'fas' : 'far'} fa-user-circle`}></i> {`${props.user[key].firstName} ${props.user[key].lastName}`}</li>
    )




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
