import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from 'prop-types';
import { showClasses } from "../../redux/actions";
import { classSelector } from "../../redux/selector";
import { handleDate, handleNumber, handleAlpha } from "../../utilities/sort";
import { fetchClassess } from "../../API";
import SortableTable from '../SortableTable';
import Search from '../Search';
import "./sortableTable.css";

class SortableTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    };
  }
  componentDidMount() {
    this.showAllClasses();
  }
  showAllClasses = () => {
    fetchClassess()
      .then(res => {
        this.props.showClasses(res.data);
        this.setState({ classes: this.props.classes });
      })
      .catch(err => console.log(err));
  };
  handleSortDate = (sortBy, isReversed) => {
    const sorted = handleDate(this.props.classes, sortBy, isReversed);
    this.setState({ classes: sorted });
  };
  handleSortNum = (sortBy, isReversed) => {
    const sorted = handleNumber(this.props.classes, sortBy, isReversed);
    this.setState({ classes: sorted });
  };
  handleSortAlpha = (sortBy, isReversed) => {
    const sorted = handleAlpha(this.props.classes, sortBy, isReversed);
    this.setState({ classes: sorted });
  };


  render(){
    return (
      <section>
        <Search
          classes={this.props.classes}
          onChange={(classes) => this.setState({classes})}
         />
        <SortableTable
          classes={this.state.classes}
          handleSortDate={this.handleSortDate}
          handleSortNum={this.handleSortNum}
          handleSortAlpha={this.handleSortAlpha}
        />
      </section>      
    );
  }
}
const mapStateToProps = state => {
  return {
    classes: classSelector(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showClasses: classes => dispatch(showClasses(classes))
  };
};

SortableTableContainer.propTypes = {
  showClasses: propTypes.func.required,
  classes: propTypes.array.required 
}
export default connect(mapStateToProps, mapDispatchToProps)(
  SortableTableContainer
);



