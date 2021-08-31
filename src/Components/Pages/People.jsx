import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import $api from "../../Helper/http";


function People(props) {
    const authInfo = useSelector(state => state);
    const [people, setPeople] = useState([]);


    async function fetchPeople(teacher) {
        const data = await $api.get('/people/?is_teacher=' + teacher.toString(),
            {headers: {Authorization: `Bearer ${localStorage.getItem('tokenAccess')}`}}
        )
        try {
            setPeople(data.data);
        } catch {
            setPeople([]);
        }
    }

    useEffect(() => {
        fetchPeople(props.teacher);
    }, [props.teacher]) // eslint-disable-line react-hooks/exhaustive-deps


    if (!authInfo.auth) {
        return (<Redirect to={{pathname: "/login"}}/>);
    }

    let header = "Студенты"
    if (props.teacher) {
        header = "Преподаватели"
    }

    return (
        <div>
            <h1>{header}</h1>
            <ul>
                {people.map((people) =>
                    <li key={people.id}>
                        {people.user_data.username}({people.user_data.first_name} {people.user_data.last_name})
                    </li>
                )}
            </ul>
        </div>
    );
}

export default People;