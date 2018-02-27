import React, {Component} from "react";
import "./button.css";
import PropTypes from "prop-types";
//import icon from "../../assets/loading.svg";

export class PrimaryButton extends Component{
	render(){
		return(
			<div className="primary">
				<button className={this.props.class || "primary-button"} type={this.props.type || "button"} >
					<img src={this.props.icon} alt="icon" className={this.props.image||"primary-button-img" }/>
					{this.props.label || "Generic -Button"}</button>
			</div>
		);
	}
}

export class SecondaryButton extends Component{
	render(){
		return(
			<div className="secondary">
				<button className={this.props.class || "secondary-button"} type={this.props.type || "button"}>  
					<img src={this.props.icon || "no-icon"} alt="icon" className={this.props.image||"secondary-button-img" }/>
					{this.props.label || "Generic -Button"}</button>
			</div>
		);
	}
}

export class TertiaryButton extends Component{
	render(){
		return(
			<div className="tertiary">
				<button className={this.props.class || "tertiary-button"} type={this.props.type || "button"}>
					<img src={this.props.icon || "no-icon"} alt="icon" className={this.props.image||"tertiary-button-img" }/>
					{this.props.label || "Generic -Button"}</button>
			</div>
		);
	}
}

PrimaryButton.propTypes={
	icon:PropTypes.node,
	label:PropTypes.string,
	class:PropTypes.string,
	type:PropTypes.string,
	image:PropTypes.string
};

SecondaryButton.propTypes={
	icon:PropTypes.node,
	label:PropTypes.string,
	class:PropTypes.string,
	type:PropTypes.string,
	image:PropTypes.string
};

TertiaryButton.propTypes={
	icon:PropTypes.node,
	label:PropTypes.string,
	class:PropTypes.string,
	type:PropTypes.string,
	image:PropTypes.string
};