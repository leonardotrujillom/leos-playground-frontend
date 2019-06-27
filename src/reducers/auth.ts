import { User } from "../models/User"

export const actions = {
    SIGN_IN: "SIGN_IN",
    SIGN_IN_FULFILLED: "SIGN_IN_FULFILLED",
    SIGN_IN_REJECTED: "SIGN_IN_REJECTED",

    SIGN_OUT: "SIGN_OUT",
    SIGN_OUT_FULFILLED: "SIGN_OUT_FULFILLED",
    SIGN_OUT_REJECTED: "SIGN_OUT_REJECTED",

    MY_SELF: "MY_SELF",
    MY_SELF_FULFILLED: "MY_SELF_FULFILLED",
    MY_SELF_REJECTED: "MY_SELF_REJECTED"
};

interface AuthInterface {
    user: User | null;
    isLoggedIn: boolean;
    pending: boolean;
}

const stateObj: AuthInterface = {user: null, isLoggedIn: false, pending: false};
export default (state = stateObj, action: { type: string, payload: any }) => {

    state = {...state};

    switch (action.type) {
        case "SIGN_IN_PENDING":
            state.pending = true;
            return state;
        case actions.SIGN_IN_FULFILLED:
            state.pending = false;
            state.isLoggedIn = true;
            state.user = new User(action.payload.id, action.payload.username, action.payload.displayName, action.payload.emailAddress, action.payload.applicationRoles);
            return state;
        case actions.SIGN_IN_REJECTED:
            state.user = null;
            state.pending = false;
            state.isLoggedIn = false;
            return state;
        case "SIGN_OUT_PENDING":
            state.pending = true;
            return state;
        case actions.SIGN_OUT_FULFILLED:
            state.user = null;
            state.pending = false;
            state.isLoggedIn = false;
            return state;
        case actions.SIGN_OUT_REJECTED:
            state.user = null;
            state.pending = false;
            state.isLoggedIn = false;
            return state;

        case "MY_SELF_PENDING":
            state.pending = true;
            return state;
        case actions.MY_SELF_FULFILLED:
            state.pending = false;
            state.isLoggedIn = true;
            state.user = new User(action.payload.id, action.payload.username, action.payload.displayName, action.payload.emailAddress, action.payload.applicationRoles);
            return state;
        case actions.MY_SELF_REJECTED:
            state.user = null;
            state.pending = false;
            state.isLoggedIn = false;
            return state;
        default:
            return state
    }
};