import {createLogger} from 'redux-logger'
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import baseReducer from '../reducers/baseReducer';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [promiseMiddleware, thunk];
if (process.env.NODE_ENV === `development`) {
    middlewares.push(createLogger({
        diff: true,
        duration: true
    }));
}

export default compose(applyMiddleware(...middlewares))(createStore)(baseReducer);