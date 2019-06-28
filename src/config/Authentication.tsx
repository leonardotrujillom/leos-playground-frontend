import React from 'react';
import {connect} from 'react-redux';
import history from '../config/history';
import {mySelf} from "../actions/authActions";
import {HashLoader} from 'react-spinners';
import toastr from 'toastr';
import {User} from "../models/User";
import variables from '../css/app.variables.scss';

interface Props {
    user: User
    pending: boolean;
    isLoggedIn: boolean;

    mySelf(): void;
}

interface State {
}


export default function (ComposedComponent: any, adminOnly: boolean) {

    class Authentication extends React.Component<Props, State> {

        componentWillMount(): void {
            if (!this.props.isLoggedIn) {
                this.props.mySelf();
            } else if (adminOnly && !this.props.user.isAdmin) {
                toastr.warning("This view is admin only.");
                history.push("/home");
            }
        }

        componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): void {
            if (!nextProps.isLoggedIn && !nextProps.pending) {
                window.location.href = `${window.location.origin}/preview`;
            }
            if (nextProps.isLoggedIn && !nextProps.pending) {
                if (adminOnly && !nextProps.user.isAdmin) {
                    toastr.warning("This view is admin only.");
                    history.push("/home");
                }
            }
        }

        render() {
            if (this.props.pending || !this.props.isLoggedIn) {
                return (
                    <div style={{width: 20, top: "calc(50% - 50px)", left: "calc(50% - 50px)", position: "absolute"}}>
                        <HashLoader
                            sizeUnit={"px"}
                            size={80}
                            color={variables.text_blue}
                            loading={true}
                        />
                    </div>
                )
            }
            return (
                <ComposedComponent {...this.props} />
            );
        }

    }

    const mapStateToProps = (state: any) => {
        return {
            user: state.auth.user,
            pending: state.auth.pending,
            isLoggedIn: state.auth.isLoggedIn
        }
    };
    const mapDispatchToProps = (dispatch: any) => {
        return {
            mySelf: () => {
                dispatch(mySelf());
            }
        }
    };
    return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}