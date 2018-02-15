import React, {Component} from 'react';
import './StudentTable.css';
import Item from './Item';
import { filterList } from "../../util/util.js";

class FilterList extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchKey:"",
      ListItems: this.props.ListItems
    }   
  } 

  handleSearch = e => {
    e.preventDefault();
    let result = this.props.ListItems;
    if (this.state.searchKey !== ""){
      result = filterList(this.props.ListItems, this.state.searchKey)
      }    
    this.setState({
      ListItems: result
    })
    this.setState({ searchKey: ""});
  }

  render(){   
    
    return (
      <div className="stu-table">
        <h3 className="title">Student</h3>
        <form onSubmit={this.handleSearch}>
          <div className="group">
            <input type="text" onChange={e => this.setState({searchKey: e.target.value})} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Search</label>
          </div>
        </form>
        <ul className="list-table">
          {this.state.ListItems.map((item, i) => <Item key={i} id={i} fullName={item} />)}
        </ul>
      </div>
    )
  }
}

export default FilterList;