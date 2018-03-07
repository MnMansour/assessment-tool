import React, { Component } from "react";
import "./login.css";
import {connect} from "react-redux";
import {logOut} from "../../redux/actions";
import {userSelector} from "../../redux/selectors";
import PropTypes from "prop-types";

class User extends Component {

handleLogout=(e)=>{
	e.preventDefault();
	this.props.logout();
	window.location.href="/app/home";
}

CorrectPassword=()=>{
	return(
		<div>
			{`You are welcome ${this.props.user[0].firstName}...`}
			<form onSubmit={(e)=>{this.handleLogout(e);}}>
				<input type="submit" value="Logout"/>
			</form>

		</div>
	);
}

render() {
	return (
		<div>
			{this.props.user.flag==="error"? this.handleLogout():<this.CorrectPassword/>}
		</div>
	);
}
}
const mapStateToProps = (state)=>{
	return {
		user: userSelector(state)
	};
};
const mapDispatchToProps = (dispatch)=>{
	return { 
		logout: ()=>dispatch(logOut()),
	};
};

User.propTypes = {
	user: PropTypes.object,
	logout:PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(User);