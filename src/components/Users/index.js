import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./style.scss";
import defaultImage from '../../assets/default-image.jpg';

class Users extends Component {

  state = {
    users: {}
  }

  componentWillMount() {
    const {usersData} = this.props;
    const users = _.map(usersData, ((user) => user));
    this.setState({users});
  }

  componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth});
  }

  render() {
    const {users, width} = this.state;
    const {usersData, user} = this.props;
    const role = usersData[user.uid].role;
    console.log(role);
    return (
      <div className="users-page">
        <ReactTable
          data={users}
          columns={[
            {
              id: 'image',
              accessor: user => <div className="image-cropper "><img src={user.image ? user.image : defaultImage} alt="user"/></div>,
              width: 60
            },{
              Header: " full name",
              id: 'full Name',
              accessor: user => <Link to={'/profile/'+user.displayName}>{user.fullname}</Link>,
              minWidth: 150
            },{
              Header: "Class",
              id: "class",
              accessor: user => <div >{user.class ? user.class : "not set"}</div>,
            },{
              Header: "Prograss",
              accessor: "prograss",
              Cell: row => (
                <div className="prograss">
                  <div
                    className="prograss__bar"
                    style={{ width: `${row.value}%`,
                      backgroundColor: row.value > 66 ? '#85cc00'
                        : row.value > 33 ? '#ffbf00' : '#ff2e00'}}
                  />
                </div>
              ),
              show: width > 500,
            },{
              id:"edit",
              accessor: user => <div >edit</div>,
              maxWidth: 60
            }
          ]}
          defaultPageSize={users.length < 8 ? users.length : 8}
          className={users.length < 8 ? "-highlight hide-bottom" : "-highlight"}
        />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    user: state.user,
    usersData: state.dbUsers,
  };
}

export default connect(mapStateToProps, null)(Users);
