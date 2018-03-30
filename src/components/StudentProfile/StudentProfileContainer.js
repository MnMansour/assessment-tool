import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import * as actionsType from "../../redux/actions";
import {
	oneUserSelector,
	accountsSelector,
	classesSelector ,
	matchedClassSelector   
} from "../../redux/selectors";
import StudentProfile from "./StudentProfile";

class StudentProfileContainer extends Component {

	fetchUsers = async () => {
		try {
			const classesRes = await axios.get("http://localhost:8888/classes");
			this.props.getClasses(classesRes.data);

			const userRes = await axios.get(`http://localhost:8888/users/${this.props.match.params.id}`);
			this.props.getUser(userRes.data);

			const accountsRes = await axios.get(`http://localhost:8888/accounts/${userRes.data.account}`);
			this.props.getAccounts(accountsRes.data);

			const peerUserRes = await axios.get(`http://localhost:8888/users/${accountsRes.data.peer_user_id}`);
			this.props.getUser(peerUserRes.data);
		} catch (err) {
			console.error("OUR ERROR", err);
		}
	}

	componentWillMount() {
		this.fetchUsers();
	}  

	render() {
		const matchedClass = this.props.selectClassByUserId(this.props.match.params.id); 
		const graduationDate = matchedClass && matchedClass.graduationDate;
		const account = this.props.accounts? this.props.accounts : "";
		const matchedUser = Object.values(this.props.user).find(element => element.id === this.props.match.params.id);
		const matchedPeerUser = Object.values(this.props.user).find(element => element.id === account.peer_user_id);
		return (
			<div className="container">
				<StudentProfile account={account} user={matchedUser} peerUser={matchedPeerUser} graduationDate={graduationDate}/>
			</div>
		);
	}
}

StudentProfileContainer.propTypes = {
	user: PropTypes.object,
	accounts: PropTypes.object,
	classes: PropTypes.object
};

const mapStateToProps = (state) => {
	return { user: oneUserSelector(state), accounts: accountsSelector(state), classes: classesSelector(state), selectClassByUserId: (id) => matchedClassSelector(state, id)};
};

const mapDispatchToProps = dispatch => {
	return { getAccounts: accounts => dispatch(actionsType.accountStore(accounts)), getUser: user => dispatch(actionsType.oneUserStore(user)), getClasses: classes => dispatch(actionsType.classStore(classes)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(
	StudentProfileContainer
);