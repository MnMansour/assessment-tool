import React from 'react'
import './StudentTable.css'
import { connect } from 'react-redux'
import Item from './Item'

const StudentTable = (props) => {
  const ListItems = Object.values(props.user.users).map((item,index)=>{
    if (props.match.params.id === item.id) {
      return(
         [`${item.firstName} ${item.lastName}`]
      )
    }
});

  console.log('ListItems',ListItems);

  return (
    <div className="stu-table">
      <h3 className="title">Student</h3>
      <form onSubmit={this.handleSearch}>
      <div className="group">
        <input type="text" onChange={e => this.set}/>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Search</label>
      </div>
    </form>
			<ul className="list-table">
        {ListItems.map((item, i) => <Item id={i} fullName={item}/>)}
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
