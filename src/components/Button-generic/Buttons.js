import React, {Component} from "react";
import "./button.css";
import PropTypes from "prop-types";
//import icon from "../../assets/loading.svg";

export class Button extends Component{
	render(){
		return(
			<div className="primary">
				<button className={this.props.type || "primary-button"} 
					onClick={this.props.onclick}  disabled>
					{this.props.icon && <img src={this.props.icon} alt="icon" 
						className={`${this.props.type}-img` }/>}
					{this.props.label || "Generic -Button"}</button>
			</div>
		);
	}
}


Button.propTypes={
	icon:PropTypes.node,
	label:PropTypes.string,
	class:PropTypes.string,
	onclick:PropTypes.func.isRequired
};
