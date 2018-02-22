import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import * as actionsType from "../../redux/actions";
import StudentProfile from "./StudentProfile";

class StudentProfileContainer extends Component {
    componentWillMount() {
        const fetchUsers = async () => {
            try {
                const userRes = await axios.get("http://localhost:8888/users");
                const accountsRes = await axios.get(
                    "http://localhost:8888/accounts"
                );
                this.props.getUsers(userRes.data);
                this.props.getAccounts(accountsRes.data);
            } catch (err) {
                console.error("OUR ERROR", err);
            }
        };
        fetchUsers();
    }

    render() {
        const userAccount = this.props.user[this.props.match.params.id]
            ? this.props.user[this.props.match.params.id].account
            : "";
        console.log("userAccount: ", userAccount);

        const user = this.props.user[this.props.match.params.id]
            ? this.props.user[this.props.match.params.id]
            : "";
        console.log("user: ", user);

        const account = this.props.accounts[userAccount]
            ? this.props.accounts[userAccount]
            : "";
        console.log("account: ", account);
        return (
            <div className="container">
                <StudentProfile account={account} user={user} />
            </div>
        );
    }
}

StudentProfileContainer.propTypes = {
    user: PropTypes.object,
    accounts: PropTypes.object
};

const mapStateToProps = state => {
    return { user: state.user, accounts: state.accounts };
};

const mapDispatchToProps = dispatch => {
    return {
        getAccounts: accounts => dispatch(actionsType.accountStore(accounts)),
        getUsers: users => dispatch(actionsType.userStore(users))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    StudentProfileContainer
);
