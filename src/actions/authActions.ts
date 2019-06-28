import {actions} from '../reducers/auth'
import axios from 'axios';
import toastr from 'toastr';

export const signIn = (username: string, password: string) => {
    const auth = btoa(unescape(encodeURIComponent(username + ":" + password)));
    const config = {
        headers: {
            'Authorization': "Basic " + auth,
            'Content-Type': 'application/json'
        }
    };

    return (dispatch: (arg0: { payload: Promise<any>; type: string }) => void) => {
        dispatch({
            type: actions.SIGN_IN, payload: new Promise(function (resolve, reject) {
                axios.post(`${process.env.REACT_APP_BASE_URL}/public/login`, null, config)
                    .then(response => {
                        resolve(response.data)
                    })
                    .catch(e => {
                        reject(e);
                        showError(e);
                    })
            })
        });
    }
};

export const googleSignIn = (accessToken: string) => {
    // const auth = btoa(unescape(encodeURIComponent(username + ":" + password)));
    const authToken = accessToken;
    const config = {
        headers: {
            'Authorization': authToken,
            'Content-Type': 'application/json'
        }
    };

    return (dispatch: (arg0: { payload: Promise<any>; type: string }) => void) => {
        dispatch({
            type: actions.SIGN_IN, payload: new Promise(function (resolve, reject) {
                axios.post(`${process.env.REACT_APP_BASE_URL}/public/login`, null, config)
                    .then(response => {
                        resolve(response.data)
                    })
                    .catch(e => {
                        reject(e);
                        showError(e);
                    })
            })
        });
    }
};

export const signOut = () => {
    return (dispatch: (arg0: { payload: Promise<any>; type: string }) => void) => {
        dispatch({
            type: actions.SIGN_OUT, payload: new Promise(function (resolve, reject) {
                axios.get(`${process.env.REACT_APP_BASE_URL}/public/logout`)
                    .then(response => {
                        resolve(response.data)
                    })
                    .catch(e => {
                        reject(e);
                        showError(e);
                    })
            })
        });
    }
};

export const mySelf = () => {
    return (dispatch: (arg0: { payload: Promise<any>; type: string }) => void) => {
        dispatch({
            type: actions.MY_SELF, payload: new Promise(function (resolve, reject) {
                axios.get(`${process.env.REACT_APP_BASE_URL}/user/myself`)
                    .then(response => {
                        resolve(response.data)
                    })
                    .catch(e => {
                        reject(e);
                    })
            })
        });
    }
};

const showError = (e: any) => {
    try {
        toastr.error(`${e}. ${e.response.data.message}`);
    } catch (ex) {
        toastr.error(`${e}.`);
    }
};