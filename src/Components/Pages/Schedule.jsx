import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import $api from "../../Helper/http";
import ScheduleItem from "../ScheduleItem";


function Schedule(props) {
    const authInfo = useSelector(state => state);
    const [schedule, setSchedule] = useState([]);

    async function fetchSchedule() {
        const response = await $api.get('/schedule/');
        console.log(response)
        if (response === undefined) {
            setSchedule([]);
        } else {
            setSchedule(response.data);
        }
    }

    useEffect(() => {
        fetchSchedule();
    }, [])

    if (!authInfo.auth) {
        return (<Redirect to={{pathname: "/login"}}/>);
    }

    return (
        <div>
            <h2>Расписание</h2>
            {schedule.map((schedule) =>
                <ScheduleItem schedule={schedule} key={schedule.id}/>
            )}

        </div>
    );


}

export default Schedule;