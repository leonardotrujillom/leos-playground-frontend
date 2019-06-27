import * as React from "react";
import {connect} from 'react-redux';
// import history from '../config/history';
// import { GoogleLogin } from "react-google-login";

interface Props {
    pending: boolean;
    isLoggedIn: boolean;

    signIn(username: string, password: string): void;
    googleSignIn(accessToken: string): void;
}

interface Props {

}

interface State {

}

class Login extends React.Component<Props, State> {
    private readonly emailRef: any;
    private readonly passwordRef: any;

    constructor(props: Props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    render(): React.ReactNode{
        return(
            <div>
                <h1>This will be a login page...</h1>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        pending: state.auth.pending,
        isLoggedIn: state.auth.isLoggedIn
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // signIn: (username: string, password: string) => {
        //     dispatch(signIn(username, password))
        // },

        // googleSignIn: (accessToken: string) => {
        //     dispatch(googleSignIn(accessToken))
        // }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)