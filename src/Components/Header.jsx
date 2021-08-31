import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


function AuthMenuItem(props) {
    if (props.authInfo.auth) {
        return props.children;
    }
    return (<></>)
}


function LoginMenuItem({authInfo}) {
    if (authInfo.auth) {
        return (<><Link to="/logout">Выход</Link> </>)
    }
    return (<><Link to="/login">Вход</Link></>)
}

function Header(props) {
    const authInfo = useSelector(state => state);

    return (
        <>
            <Link to="/">Главная</Link> | &nbsp;
            <Link to="/course">Курсы</Link> | &nbsp;
            <AuthMenuItem authInfo={authInfo}>
                <Link to="/teacher">Преподаватели</Link> | &nbsp;
                <Link to="/student">Студенты</Link> | &nbsp;
                <Link to="/schedule">Расписание</Link> | &nbsp;
            </AuthMenuItem>
            <LoginMenuItem authInfo={authInfo}/>
            <hr/>
        </>
    );
}

export default Header;