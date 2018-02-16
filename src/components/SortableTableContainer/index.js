import React, { Component } from "react";
import "./sortableTable.css";
import { connect } from "react-redux";
import {  showClasses } from "../../redux/actions";
import { handleDate, handleNumber, handleAlpha } from "../../utilities/sort";
import { fetchClassess } from "../../API";
import {classSelector} from '../../redux/selector'
import SortableTable from '../SortAbleTable'

class SortableTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    };
  }
  componentDidMount() {
    fetchClassess()
      .then(res => {
      this.props.showClasses(res.data);
      this.setState({classes:this.props.classes})
      })
	  .catch(err => console.log(err)); 
  }
  handleSortDate = (sortBy, isReversed) => {
    const sorted = handleDate(this.props.classes,
      sortBy,
      isReversed
    );
    this.setState({ classes: sorted });
  };
  handleSortNum = (sortBy, isReversed) => {
    const sorted = handleNumber(this.props.classes,
      sortBy,
      isReversed
    );
    this.setState({ classes: sorted });
  };
  handleSortAlpha = (sortBy, isReversed) => {
    const sorted = handleAlpha(
      this.props.classes,
      sortBy,
      isReversed
    );
    this.setState({ classes: sorted });
  };

  render(){
    return (
      <SortableTable 
        classes={this.state.classes} 
        handleSortDate={this.handleSortDate} 
        handleSortNum={this.handleSortNum}  
        handleSortAlpha={this. handleSortAlpha}/>
    )
  }
}
const mapStateToProps = state => {
  return {
    classes: classSelector(state)
};
}
const mapDispatchToProps = dispatch => {
  return {
    showClasses: (classes) => dispatch(showClasses(classes))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SortableTableContainer);
