import React, { Component } from 'react'
import './StudentTable.css'
import { connect } from 'react-redux'
import Item from './Item';
import axios from 'axios';
import * as actionsType from '../../redux/actions'

class StudentTable extends Component{

  componentWillMount() {
    axios.get('http://localhost:8888/users')
         .then(res => this.props.getUsers(res.data))
         .catch(err=>console.log(err))
  }

  render(){

    const ListItems = Object.values(this.props.user)
                          .filter(item=> this.props.match.params.id === item.id)
                          .map(item => [`${item.firstName} ${item.lastName}`]);

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
            {ListItems.map((item, i) => <Item key={i} id={i} fullName={item}/>)}
    			</ul>
    		</div>
      )
    }
    }

const mapStateToProps =(state)=>{
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getUsers: (users)=>dispatch(actionsType.userStore(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentTable);
