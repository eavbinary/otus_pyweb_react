import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {checkToken} from "./Helper/token";

function createAuthState()
{
    return {auth: checkToken()}
}

const reducerAuth = (state = createAuthState(), action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {...state,
                auth: action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducerAuth);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
