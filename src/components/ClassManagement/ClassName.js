import React from "react";
import { connect } from "react-redux";
import * as actionsType from "../../redux/actions.js";
import PropTypes from "prop-types";

class ClassName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
    }

    render() {
        return (
            <p>
                {this.props.isEdit ? (
                    <input
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                ) : (
                    this.state.name
                )}
                <span
                    className="edit-button"
                    onClick={() =>
                        this.props.classEdit(this.props.i, this.state.name)
                    }
                >
                    <i className="fas fa-pencil-alt" />
                </span>
            </p>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        classEdit: (indexToChange, name) =>
            dispatch({ type: actionsType.CLASS_EDIT, indexToChange, name })
    };
};

ClassName.propTypes = {
    classEdit: PropTypes.func,
    isEdit: PropTypes.bool,
    i: PropTypes.number,
    name: PropTypes.string
};

export default connect(null, mapDispatchToProps)(ClassName);
