import React from "react";

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

export default Item;
