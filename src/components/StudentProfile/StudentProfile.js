import React from "react";
import "./StudentProfile.css";
import ScrollButton from "./ScrollTopButton/ScrollTopButton";


const StudentProfile = ({ account, user, peerUser, graduationDate }) => {
    return (
        <div className="container">
            <h1>Graduation Date: {graduationDate}</h1>
            <div className="avatar">
                <div className="avatar-image">
                    <img src={user.avatar} alt="Avatar" />
                </div>
                <div className="avatar-data">
                    <div className="st-name">{`${user.firstName} ${
                        user.lastName
                    }`}</div>
                    <div className="field">
                        <label>Email:</label>
                        <div className="field-entry">{account.email}</div>
                    </div>
                    <div className="field">
                        <label>Phone:</label>
                        <div className="field-entry">{user.phoneNumber}</div>
                    </div>
                    <div className="field">
                        <label>Birth date:</label>
                        <div className="field-entry">{user.birthDate}</div>
                    </div>
                    <div className="field">
                        <a
                            href={account.githubAccount || "https://github.com"}
                            className="github"
                        >
                            <i className="fab fa-github-square fa-2x" />
                        </a>
                        <a
                            href={
                                account.linkedinAccount ||
                                "https://www.linkedin.com"
                            }
                            className="linkedin"
                        >
                            <i className="fab fa-linkedin fa-2x" />
                        </a>
                        <a
                            href={
                                account.twitterAccount || "http://twitter.com/"
                            }
                            className="twitter"
                        >
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
                        <img src={peerUser.avatar} alt="PeerAvatar" />
                    </div>
                    <div className="peer-data">{account.peerReview}</div>
                </div>
            </div>
            <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
        </div>
    );
};

export default StudentProfile;
