import React from 'react';
import {Link} from 'react-router-dom';
import ReactTable from "react-table";
import Edit from './Edit';
import Progress from './Progress';
import "react-table/react-table.css";
import defaultImage from '../../assets/default-image.jpg';

const UsersTable = ({users, showProgress, showEdit}) => (
  <ReactTable
    data={users}
    columns={[
      {
        id: 'image',
        accessor: user => <Link to={'/profile/'+user.displayName} className="image-cropper"><img src={user.image ? user.image : defaultImage} alt="user"/></Link>,
        width: 60
      },{
        Header: " Full Name",
        id: 'full Name',
        accessor: user => <Link to={'/profile/'+user.displayName}>{user.fullname}</Link>,
        minWidth: 150
      },{
        Header: "Class",
        id: "class",
        accessor: user => <div >{user.class ? user.class : "not set"}</div>,
      },{
        Header: "Progress",
        accessor: "progress",
        Cell: row => <Progress value={row.value? row.value : 0} />,
        show: showProgress ? showProgress: false,
      },{
        id:"edit",
        accessor: user => <Edit Data={user} />,
        maxWidth: 50,
        show: showEdit ? showEdit: false,
      },
    ]}

    pageSize={users.length < 8 ? users.length : 8}
    className={users.length < 8 ? "-highlight hide-bottom" : "-highlight"}
    noDataText="No users found!"
  />
);

export default UsersTable;
