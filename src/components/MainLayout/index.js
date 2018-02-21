import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header";
import Login from "../Login";
import LoginAdmin from "../LoginAdmin";
import Footer from "../Footer";
import StudentProfile from "../StudentProfile/index";

const MainLayout = ({ match }) => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path={`${match.url}/home`} render={() => <h1>home</h1>} />
                <Route path={`${match.url}/login-admin`} component={LoginAdmin} />
                <Route path={`${match.url}/login`} component={Login} />
                <Route
                    path={`${match.url}/student-profile/:id`}
                    component={StudentProfile}
                />
                <Redirect from={match.url} to={`${match.url}/home`} />
            </Switch>
            <Footer />
        </Fragment>
    );
};

export default MainLayout;
