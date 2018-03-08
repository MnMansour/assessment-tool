import React, { Component } from "react";
import "./login.css";
import { connect } from "react-redux";
import { logOut } from "../../redux/actions";
import { UserSelector } from "../../redux/selectors";
import PropTypes from "prop-types";

class User extends Component {
	handleLogout = e => {
		e.preventDefault();
		this.props.logout();
		window.location.href = "/app/home";
	};

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
	};
};

User.propTypes = {
	user: PropTypes.object,
	logout: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
