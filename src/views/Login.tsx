import * as React from "react";
import {connect} from 'react-redux';
import { HashLoader } from "react-spinners"
import { GoogleLogin } from "react-google-login";

import Header from "../components/common/Header";
import history from '../config/history';
import variables from '../css/app.variables.scss';
import { signIn, googleSignIn } from "../actions/authActions";

const FontAwesome = require("react-fontawesome");

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

    onSignInHandler = () => {

    };

    googleSignInHandler = (response: any) => {
        console.log(response);
        this.props.googleSignIn(response.accessToken);
    };

    onKeyUpHandler = (e: any) => {
        if (e.keyCode === 13) {
            this.onSignInHandler();
        }
    };

    render(): React.ReactNode{
        if (this.props.pending) {
            return (
                <div className='sweet-loading'
                     style={{width: 20, top: "calc(50% - 50px)", left: "calc(50% - 50px)", position: "absolute"}}>
                    <HashLoader
                        sizeUnit={"px"}
                        size={80}
                        color={variables.text_blue}
                        loading={this.props.pending}
                    />
                </div>
            )
        }

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
                    fe_awesomeClass: "home"
                }]}
                title={{name: "Sign In", style: {fontSize: 25}}}
                />
                <div className={"container-fluid"}>
                    <div className={"row"} style={{marginTop: 150}}>
                        <div className={"col-12"} style={{textAlign: "center"}}>
                            <div className={"login-box"} style={{width: 250, display: "inline-block", marginBottom: 50}}>
                                <div className={"login-survey"} onKeyUp={this.onKeyUpHandler} style={{marginBottom: 25}}>
                                    <input type={"text"} ref={this.emailRef} tabIndex={1}
                                           style={{marginBottom: 10}}
                                           placeholder={" Email Address"}
                                    />
                                    <input type={"password"} ref={this.passwordRef} tabIndex={2}
                                           style={{marginTop: 10, marginBottom: 10}}
                                           placeholder={" Password"}
                                    />
                                    <button onClick={this.onSignInHandler.bind(this)} tabIndex={3} 
                                            style={{marginTop: 10}} className={"btn btn-primary"}>
                                        <FontAwesome className="super-crazy-colors"
                                                     name="sign-in"
                                                     size="lg"
                                        /> Sign In
                                    </button>
                                </div>
                                <span className={"login-sep"}> or </span>
                                <div className={"login-box-google"} style={{marginTop: 25, marginBottom: 25}}>
                                    <GoogleLogin
                                        clientId="106927662967-qb7ubv8bc90egoknv79br4m10s3841c9.apps.googleusercontent.com"
                                        buttonText="Sign In with Google"
                                        // uxMode='redirect'
                                        // redirectUri="http://localhost:3000/home"
                                        onSuccess={this.googleSignInHandler}
                                        onFailure={this.googleSignInHandler}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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
        signIn: (username: string, password: string) => {
            dispatch(signIn(username, password))
        },

        googleSignIn: (accessToken: string) => {
            dispatch(googleSignIn(accessToken))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)
