import React, { Component } from "react";
import PropTypes from "prop-types";
import { filterList } from "../../util/util.js";
import StudentName from "./StudentName";
import "./StudentTable.css";

class FilterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: ""
        };
    }

    render() {
        const result = filterList(this.props.ListItems, this.state.searchKey);
        return (
            <div className="stu-table container">
                <h3 className="title">Students</h3>
                <div className="group">
                    <input
                        type="text"
                        value={this.state.searchKey}
                        onChange={e =>
                            this.setState({ searchKey: e.target.value })
                        }
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    <label>Search</label>
                </div>
                <ul className="list-table">
                    {result.map((item, i) => (
                        <StudentName key={i} id={i} fullName={item} />
                    ))}
                </ul>
            </div>
        );
    }
}

FilterList.propTypes = {
    ListItems: PropTypes.array
};

export default FilterList;
