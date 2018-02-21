import React from "react";
import PropTypes from "prop-types";

const Item = props => {
    return (
        <li key={props.id}>
            <i
                className={`${
                    props.id % 2 === 0 ? "fas" : "far"
                } fa-user-circle`}
            />{" "}
            {props.fullName}
        </li>
    );
};

Item.propTypes = {
    id: PropTypes.number,
    fullName: PropTypes.string
};

export default Item;
