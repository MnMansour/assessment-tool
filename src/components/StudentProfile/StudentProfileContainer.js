import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Layout/StudentProfile.css";
import { connect } from "react-redux";
import axios from "axios";
import * as actionsType from "../../redux/actions";
import StudentProfile from "./StudentProfile";

class StudentProfileContainer extends Component {
    componentWillMount() {
        const fetchUsers = async () => {
            try {
                const userRes = await axios.get("http://localhost:8888/users");
                this.props.getUsers(userRes.data);
                const accountsRes = await axios.get("http://localhost:8888/accounts");
                this.props.getAccounts(accountsRes.data);       
            } catch (err) {
                console.error("OUR ERROR", err);
            }
        };        
        fetchUsers();        
    }

    render() {  

        const UserAccount = this.props.user[this.props.match.params.id] ? this.props.user[this.props.match.params.id].account: "";
        console.log("UserAccount: ",UserAccount);

        const User = this.props.user[this.props.match.params.id];
        console.log("User: ", User);              

        const Account = this.props.accounts[UserAccount] ? this.props.accounts[UserAccount] : "";
        console.log("Account: ", Account);        

        return (
            <div className="container">
                <StudentProfile Account={Account} User={User} />
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
    return { getUsers: users => dispatch(actionsType.userStore(users)), getAccounts: accounts => dispatch(actionsType.accountStore(accounts)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    StudentProfileContainer
);