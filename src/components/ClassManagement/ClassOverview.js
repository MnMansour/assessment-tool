import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import { percentage } from "../../util/util.js";
import EditableField from "./EditableField";
import * as actionsType from "../../redux/actions";
import "./ClassOverview.css";

class ClassOverview extends Component {
    componentWillMount() {
        axios
            .get("http://localhost:8888/classes")
            .then(res => this.props.getClasses(res.data))
            .catch(err => console.log("err: ", err));
    }

    render() {
        
        const NameOfClass = EditableField("classEdit");
        const element = this.props.classes[this.props.match.params.id] ? this.props.classes[this.props.match.params.id] : "";
        const currentSprint = element.currentSprint;
        const plannedSprints = element.plannedSprints;

        return (
            <div className="class-dashboard">
                <h1>Teacher Dashboard</h1>
          
                <div  className="class-detail">
                    <div className="row">
                        <div className="col-4">
                            <h3 className="title">Location</h3>
                            <p>{element.location}</p>
                        </div>
                        <div className="col-4">
                            <h3 className="title">Class Name</h3>
                            <NameOfClass
                                isEdit={element.isEdit}
                                name={element.name}
                                i={(element.id)}
                            />
                            <h3 className="title">
                                Total number of participants
                            </h3>
                            <p>{element.participantCount}</p>
                        </div>
                        <div className="col-4">
                            <h3 className="title">Overall progress</h3>
                            <p>
                                {`${percentage(
                                    currentSprint,
                                    plannedSprints
                                )}%`}
                            </p>
                            <div className="meter animate">
                                <span
                                    style={{
                                        width: `${percentage(
                                            currentSprint,
                                            plannedSprints
                                        )}%`
                                    }}
                                >
                                    <span />
                                </span>
                            </div>
                            <p>
                                Every student completed {currentSprint}/{
                                    plannedSprints
                                }{" "}
                                sprints successfully.
                            </p>
                        </div>
                    </div>
                </div>
              
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        classes: state.classes
    };
};

ClassOverview.propTypes = {
    user: PropTypes.object,
    classes: PropTypes.object,
    getClasses: PropTypes.func
};
const mapDispatchToProps = dispatch => {
    return {
        getClasses: classes => dispatch(actionsType.classStore(classes))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassOverview);
