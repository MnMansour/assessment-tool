import React from 'react';
import propTypes from 'prop-types';
import './search.css';

class Search extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: ''
		};
	}
handleChange = (e)=>{  
	const name = e.target.value;
	
	this.setState({
		name 
	});
	const filterdList = this.props.classes.filter(singleClass =>{
		return singleClass[this.props.searchKey].toLowerCase().includes(name.toLowerCase());
	});
	this.props.onChange(filterdList);
    
}
render() {
	return (
		<section className="container">
			<h2>Teacher Dashboard</h2>
			<label htmlFor="classes" className="label-classes">{this.props.classesTable}</label><br/>
			<i className="fa fa-search"></i>
			<input
				type="text"
				id="classes"
				className="search-input"
				placeholder={`search by ${this.props.searchKey}`}
				value={this.state.name}
				onChange={e=>this.handleChange(e)}
			/>
		</section>
	);
}
}

Search.propTypes = {
	classes: propTypes.array
};

export default Search;

