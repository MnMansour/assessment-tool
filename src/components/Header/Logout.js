import React, { Component } from "react";

import { connect } from "react-redux";
import { logOut } from "../../redux/actions";
import PropTypes from "prop-types";

class Logout extends Component {
	handleLogout = e => {
		e.preventDefault();
		this.props.logout();
		window.location.href = "/app/home";
	};

	render() {
		return (
			<span
				className={this.props.class}
				onClick={e => {
					this.handleLogout(e);
				}}
			>
				Logout
			</span>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logOut())
	};
};

Logout.proptypes = {
	logout: PropTypes.func
};

export default connect(mapDispatchToProps)(Logout);
