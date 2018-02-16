import React, {Component} from 'react';
import './StudentTable.css';
import Item from './Item';
import { filterList } from "../../util/util.js";

class FilterList extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchKey:""
    }   
  } 

  render(){    
    const result = filterList(this.props.ListItems, this.state.searchKey)
    return (
      <div className="stu-table">
        <h3 className="title">Student</h3>
        <div className="group">
          <input 
            type="text"
            value={this.state.searchKey}
            onChange={e => this.setState({searchKey: e.target.value})} 
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Search</label>
        </div>
        <ul className="list-table">
          {result.map((item, i) => <Item key={i} id={i} fullName={item} />)}
        </ul>
      </div>
    )
  }
}

export default FilterList;