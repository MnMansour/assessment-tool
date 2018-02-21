import React, {Component} from "react";
import './button.css';
import PropTypes from 'prop-types';

export class PrimaryButton extends Component{
	render(){
		return(
			<div className="primary">
				<button className="primary-button" >
					<img src={this.props.icon} alt="icon" className="primary-button-img"/>
				{this.props.label}</button>
			</div>
		);
	}
}

export class SecondaryButton extends Component{
	render(){
		return(
			<div className="secondary">
				<button className="secondary-button">  
					<img src={this.props.icon} alt="icon" className="secondary-button-img"/>
					{this.props.label}</button>
			</div>
		);
	}
}

export class TertiaryButton extends Component{
	render(){
		return(
			<div className="tertiary">
				<button className="tertiary-button">
					 <img src={this.props.icon} alt="icon" className="tertiary-button-img"/>
				 	{this.props.label}</button>
			</div>
		);
	}
}

PrimaryButton.propTypes={
	icon:PropTypes.node,
	label:PropTypes.string
}

SecondaryButton.propTypes={
	icon:PropTypes.node,
	label:PropTypes.string
}

TertiaryButton.propTypes={
	icon:PropTypes.node,
	label:PropTypes.string
}