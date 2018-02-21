import React from "react";
import "./StudentProfile.css";

function StudentProfile(props) {
    const account = props.Account; 
    return (
        <div className="container">
            <h1>Graduation Date: {account.graduationDate}</h1>
            <div className="avatar">
                <div className="avatar-image">
                    <img src="images/Avatar1.png" alt="Avatar1" />
                </div>
                <div className="avatar-data">
                    <div className="st-name">Byron Amorim</div>
                    <div className="field">
                        <label>Email:</label>
                        <div className="field-entry">{account.email}</div>
                    </div>
                    <div className="field">
                        <label>Phone:</label>
                        <div className="field-entry">24124</div>
                    </div>
                    <div className="field">
                        <label>Birth date:</label>
                        <div className="field-entry">March 26, 1980</div>
                    </div>
                    <div className="field">
                        <a href="http://github.com/" className="github">
                            <i className="fab fa-github-square fa-2x" />
                        </a>
                        <a href="http://linkedin.com/" className="linkedin">
                            <i className="fab fa-linkedin fa-2x" />
                        </a>
                        <a href="http://twitter.com/" className="twitter">
                            <i className="fab fa-twitter-square fa-2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="courses">
                <h1>Completed 3rd party courses</h1>
                <h2>{account.coursesCompleted}</h2>
            </div>
            <div className="education">
                <h1>Previous Education</h1>
                <h2>{account.education}</h2>
            </div>
            <div className="teacher-review">
                <h1>Teacher assessment</h1>
                <p>{account.teacherReview}</p>
            </div>
            <div className="peer-review">
                <h1>Peer reviews</h1>
                <div className="peer-detail">
                    <div className="peer-image">
                        <img src="images/Avatar2.png" alt="Avatar2" />
                    </div>
                    <div className="peer-data">{account.peerReview}</div>
                </div>
            </div>
        </div>
    );
}  

export default StudentProfile;