import * as React from 'react';
import {Route, Router} from "react-router-dom";
import "./css/App.scss";
import history from './config/history';

// import logo from './logo.svg';]
import { connect } from 'react-redux';

import Login from "./views/Login";
import Preview from "./views/Preview";
import Home from "./views/Home";
import RequireAuthentication from  "./config/Authentication";

interface Props {
    history: any;
}

class App extends React.Component<Props> {

    render(): React.ReactNode {
        return(
            <Router history={history}>
                <Route path={"/login"} component={Login}/>
                <Route path={"/preview"} component={Preview}/>

                <Route exact path={"/"} component={RequireAuthentication(Home, false)}/>
            </Router>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        history: ownProps.history
    }
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
