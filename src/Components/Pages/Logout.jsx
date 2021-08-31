import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {checkToken, cleanToken} from "../../Helper/token";

function Logout(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        cleanToken();
        dispatch({type: 'SET_AUTH', payload: checkToken()});
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (<Redirect to={{pathname: "/"}}/>);
}

export default Logout;