import React from 'react';
import {Link} from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import defaultImage from '../../assets/default-image.jpg';

const UsersTable = ({users, showPrograss, showEdit}) => (
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
        show: showPrograss ? showPrograss: false,
      },{
        id:"edit",
        accessor: user => <div >edit</div>,
        maxWidth: 50,
        show: showEdit ? showEdit: false,
      }
    ]}
    defaultPageSize={users.length < 8 ? users.length : 8}
    className={users.length < 8 ? "-highlight hide-bottom" : "-highlight"}
  />
);

export default UsersTable;
