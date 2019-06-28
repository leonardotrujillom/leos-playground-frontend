import * as React from "react";
import {connect} from 'react-redux';
// import { GoogleLogin } from "react-google-login";

import Header from "../components/common/Header";
import history from '../config/history';
import variables from '../css/app.variables.scss';

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

    toPreviewHandler = () => {
        history.push("/preview");
    };

    render(): React.ReactNode{
        return(
            <div>
                <Header buttons={[{
                    name: {text: "Home", style: {fontSize: 15}},
                    handler: this.toPreviewHandler.bind(this),
                    class: "btn btn-light",
                    style: {
                        borderRadius: 15,
                        marginRight: 5,
                        marginTop: 12,
                        height: 40,
                        border: `1px solid ${variables.border_gray}`
                    },
                    fe_awesomeClass: "sign-in"
                }]}
                title={{name: "Sign In and Sign Up", style: {fontSize: 25}}}
                />
                <div className={"container-fluid"} style={{color: variables.text_blue}}>
                    <span style={{fontSize: 25}}>This will be a login page...</span>
                </div>
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