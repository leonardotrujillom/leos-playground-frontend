import * as React from 'react';
import {Route, Router} from "react-router-dom";
import history from './config/history';
// import { GoogleLogin } from 'react-google-login';

// import logo from './logo.svg';
import { connect } from 'react-redux';

import Login from "./views/Login";
import Preview from "./views/Preview";

interface Props {
    history: any;
}

class App extends React.Component<Props> {

    render(): React.ReactNode {
        return(
            <Router history={history}>
                <Route path={"/login"} component={Login}/>
                <Route path={"/preview"} component={Preview}/>
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
