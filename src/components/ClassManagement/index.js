import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionsType from '../../redux/actions';
import FilterList from './FilterList';
import ClassOverview from './ClassOverview';

class classManagementContainer extends Component {
	componentWillMount() {
		this.fetchDb();
	}

	fetchDb = async () => {
		try {
			const classRes = await axios.get('http://localhost:8888/classes');
			const userRes = await axios.get('http://localhost:8888/users');
			this.props.getClasses(classRes.data);
			this.props.getUsers(userRes.data);
		} catch (error) {
			console.error('OUR ERROR', error);
		}
	};

	render() {
		const { match, classes, user } = this.props;
		const element = classes[match.params.id] ? classes[match.params.id] : '';

		const ListItems = classes[match.params.id]
			? classes[match.params.id].user_ids
			: [];

		const users = Object.keys(user).length ? ListItems.map(id => user[id]) : [];

		const StudList = users.map(item => `${item.firstName} ${item.lastName}`);
		return (
			<Fragment>
				<ClassOverview element={element} />
				<FilterList ListItems={StudList} />
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		classes: state.classes
	};
};

classManagementContainer.propTypes = {
	user: PropTypes.object,
	classes: PropTypes.object,
	getClasses: PropTypes.func
};

const mapDispatchToProps = dispatch => {
	return {
		getClasses: classes => dispatch(actionsType.classStore(classes)),
		getUsers: users => dispatch(actionsType.userStore(users))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	classManagementContainer
);
