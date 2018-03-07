import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import * as actionsType from "../../redux/actions";
import FilterList from "./FilterList";
import "./StudentTable.css";

class StudentTableContainer extends Component {
    componentWillMount() {
        axios
            .get("http://localhost:8888/users")
            .then(res => this.props.getUsers(res.data))
            .catch(err => console.log(err));
    }

    render() {
        const ListItems = this.props.classes[this.props.match.params.id]
            ? this.props.classes[this.props.match.params.id].user_ids
            : [];

        const users = Object.keys(this.props.user).length
            ? ListItems.map(id => this.props.user[id])
            : [];

        const StudList = users.map(
            item => `${item.firstName} ${item.lastName}`
        );

        return (
            <div className="stu-table">
                <FilterList ListItems={StudList} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        classes: state.classes
    };
};

StudentTableContainer.propTypes = {
    classes: PropTypes.object,
    user: PropTypes.object
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: users => dispatch(actionsType.userStore(users))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    StudentTableContainer
);
