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
                const classesRes = await axios.get(
                    "http://localhost:8888/classes"
                );
                this.props.getUsers(userRes.data);
                this.props.getAccounts(accountsRes.data);
                this.props.getClasses(classesRes.data);
            } catch (err) {
                console.error("OUR ERROR", err);
            }
        };
        fetchUsers();
    }

    render() {     
         
        const matchedUser = Object.values(this.props.classes).filter(
            element =>
                element.user_ids.includes(this.props.match.params.id)
        );

        const graduationDate = matchedUser.map(id => id.graduationDate);         

        const userAccount = this.props.user[this.props.match.params.id]
            ? this.props.user[this.props.match.params.id].account
            : "";        

        const user = this.props.user[this.props.match.params.id]
            ? this.props.user[this.props.match.params.id]
            : "";        

        const account = this.props.accounts[userAccount]
            ? this.props.accounts[userAccount]
            : "";       

        const peerUserId = account.peer_user_id;
        const peerUser = this.props.user[peerUserId] ? this.props.user[peerUserId] : "";        
        
        return (
            <div className="student-profile">
                <StudentProfile account={account} user={user} peerUser={peerUser} graduationDate={graduationDate} />
            </div>);
    }
}

StudentProfileContainer.propTypes = {
    user: PropTypes.object,
    accounts: PropTypes.object,
    classes: PropTypes.object
};

const mapStateToProps = state => {
    return { user: state.user, accounts: state.accounts, classes: state.classes };
};

const mapDispatchToProps = dispatch => {
    return { getAccounts: accounts => dispatch(actionsType.accountStore(accounts)), getUsers: users => dispatch(actionsType.userStore(users)), getClasses: classes => dispatch(actionsType.classStore(classes)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    StudentProfileContainer
);
