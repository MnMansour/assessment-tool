import React from 'react';
import './search.css';
import {connect} from 'react-redux';

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: ''
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    const name = this.state.name;
    const regex = /\w/;
    const classes = Object.values(this.props.classes);
    const filterClasses = classes.filter(singleClass =>{
      return singleClass.name.toLowerCase().includes(name.toLowerCase());
    });
    console.log(filterClasses);
  }
  render() {
    return (
      <section className="container">
        <h2>Teacher Dashboard</h2>
        <h4>Classes</h4>
        <form onSubmit={(e)=>{this.handleSubmit(e)}}>
          <i className="fa fa-search"></i>
          <input
             type="text"
             className="search-input"
             placeholder="search"
             value={this.state.name}
             onChange={e=>this.setState({
               name: e.target.value
             })}
           />
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        classes: state.userClass
    }
}


export default connect(mapStateToProps)(Search);
