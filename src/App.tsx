import * as React from 'react';
import { GoogleLogin } from 'react-google-login';

import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

interface Props {
    history: any;
}

class App extends React.Component<Props, any> {

    render(): React.ReactNode {
        return(
            <div>
                <h1>Welcome to Leo's Playground</h1>
            </div>
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
