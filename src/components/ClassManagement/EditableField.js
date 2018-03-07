import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actionsType from "../../redux/actions.js";

function EditableField(labelEdit) {
    class CustomsField extends React.Component {
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
                            onChange={e =>
                                this.setState({ name: e.target.value })
                            }
                        />
                    ) : (
                        this.state.name
                    )}
                    <span
                        className="edit-button"
                        onClick={() =>
                            this.props.fieldEdit(this.props.i, this.state.name)
                        }
                    >
                        <i className="fas fa-pencil-alt" />
                    </span>
                </p>
            );
        }
    }

    CustomsField.propTypes = {
        fieldEdit: PropTypes.func,
        isEdit: PropTypes.bool,
        i: PropTypes.number,
        name: PropTypes.string
    };

    const mapDispatchToProps = dispatch => {
        return {
            fieldEdit: (indexToChange, name) =>
                dispatch(actionsType[labelEdit](indexToChange, name))
        };
    };

    return connect(null, mapDispatchToProps)(CustomsField);
}

export default EditableField;
