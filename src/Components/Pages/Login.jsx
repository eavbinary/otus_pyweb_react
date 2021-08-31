import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {checkToken} from '../../Helper/token'
import {auth} from "../../Helper/http";


function Login(props) {
    const dispatch = useDispatch();
    const authInfo = useSelector(state => state);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onClickLogin = async () => {
        console.log('Login...')
        // admin
        // j6v-58s-KpZ-NBA
        try {
            await auth(userName, password);
        }
        catch (e) {

        }
        dispatch({type: 'SET_AUTH', payload: checkToken()});
    }

    if (authInfo.auth) {
        return (<Redirect to={{pathname: "/"}}/>);
    }

    return (
        <div>
            <h1>Вход</h1>
            Имя пользователя:<br/>
            <input value={userName}
                   onChange={event => setUserName(event.target.value)}/><br/>
            Пароль:<br/>
            <input value={password}
                   onChange={event => setPassword(event.target.value)}/><br/><br/>
            <button onClick={() => {
                onClickLogin();
            }}>Вход
            </button>
            <h1>{authInfo.auth}</h1>
        </div>
    );
}

export default Login;