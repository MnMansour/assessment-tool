import React from "react";
import propTypes from 'prop-types';

function SortableTable(props) {
  const classes = props.classes;
  return (
    <section> 
    <div className="classes">
      <div className="head">
        <div className="title">
          <span className="head__span">Id</span>
          <span className="head__span">
            <div
              onClick={() => props.handleSortNum("id", true)}
              className="arrow-up"
            />
            <div
              onClick={() => props.handleSortNum("id", false)}
              className="arrow-down"
            />
          </span>
        </div>
        <div className="title">
          <span className="head__span">Graduation Date </span>
          <span className="head__span">
            <div
              onClick={() => props.handleSortDate("graduationDate", true)}
              className="arrow-up"
            />
            <div
              onClick={() => props.handleSortDate("graduationDate", false)}
              className="arrow-down"
            />
          </span>
        </div>
        <div className="title">
          <span className="head__span">Name</span>
          <span className="head__span">
            <div
              onClick={() => props.handleSortAlpha("name", true)}
              className="arrow-up"
            />
            <div
              onClick={() => props.handleSortAlpha("name", false)}
              className="arrow-down"
            />
          </span>
        </div>
        <div className="title">
          <span className="head__span">Location</span>
          <span className="head__span">
            <div
              onClick={() => props.handleSortAlpha("name", true)}
              className="arrow-up"
            />
            <div
              onClick={() => props.handleSortAlpha("name", false)}
              className="arrow-down"
            />
          </span>
        </div>
        <div className="title">
          <span className="head__span">Participants</span>
          <span className="head__span">
            <div
              onClick={() => props.handleSortNum("participantCount", true)}
              className="arrow-up"
            />
            <div
              onClick={() => props.handleSortNum("participantCount", false)}
              className="arrow-down"
            />
          </span>
        </div>
        <div className="title">
          <span className="head__span">Current Sprint</span>
          <span className="head__span">
            <div
              onClick={() => props.handleSortNum("currentSprint", true)}
              className="arrow-up"
            />
            <div
              onClick={() => props.handleSortNum("currentSprint", false)}
              className="arrow-down"
            />
          </span>
        </div>
        <div className="title">
          <span className="head__span">Head Teacher</span>
          <span className="head__span">
            <div
              onClick={() => props.handleSortAlpha("headTeacher", true)}
              className="arrow-up"
            />
            <div
              onClick={() => props.handleSortAlpha("headTeacher", false)}
              className="arrow-down"
            />
          </span>
        </div>
        <div className="title">
          <span className="head__span">Planned Sprints</span>
          <span className="head__span">
            <div
              onClick={() => props.handleSortNum("plannedSprints", true)}
              className="arrow-up"
            />
            <div
              onClick={() => props.handleSortNum("plannedSprints", false)}
              className="arrow-down"
            />
          </span>
        </div>
        <div className="title">
          <span className="head__span">Manage</span>
        </div>
      </div>
      {classes.map((item, i) => {
        return (
          <div key={i} className="body">
            <div className="info">{item.id}</div>
            <div className="info">{item.graduationDate}</div>
            <div className="info">{item.name}</div>
            <div className="info">{item.location}</div>
            <div className="info">{item.participantCount}</div>
            <div className="info">{item.currentSprint}</div>
            <div className="info">{item.headTeacher}</div>
            <div className="info">{item.plannedSprints}</div>
            <div className="info"></div>
          </div>
        );
      })}
    </div>
    </section>
  );
}
export default SortableTable;


SortableTable.propTypes = {
  classes: propTypes.array,
  handleSortNum: propTypes.func,
  handleSortDate: propTypes.func,
  handleSortAlpha: propTypes.func

}