import React, { Component } from "react";
import "./login.css";
<<<<<<< HEAD
import { connect } from "react-redux";
import { logOut } from "../../redux/actions";
import { UserSelector } from "../../redux/selectors";
=======
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {resetState} from "../../redux/actions";
import {userSelector} from "../../redux/selectors";
>>>>>>> feature/login
import PropTypes from "prop-types";

class User extends Component {
	handleLogout = e => {
		e.preventDefault();
		this.props.logout();
		window.location.href = "/app/home";
	};

<<<<<<< HEAD
	render() {
		return (
			<div>
				{`You are welcome ${this.props.user[0].firstName}...`}
				<form
					onSubmit={e => {
						this.handleLogout(e);
					}}
				>
					<input type="submit" value="Logout" />
				</form>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		user: UserSelector(state)
	};
};
const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logOut())
=======
handleLogout=()=>{
	this.props.logout();
	this.props.history.push("/app/home");
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
			{this.props.user[0].flag==="error"? this.handleLogout():this.CorrectPassword()}
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
		logout: ()=>dispatch(resetState()),
>>>>>>> feature/login
	};
};

User.propTypes = {
<<<<<<< HEAD
	user: PropTypes.object,
	logout: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
=======
	user: PropTypes.any,
	logout:PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User));
>>>>>>> feature/login
