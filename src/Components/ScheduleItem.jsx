import React from "react";
import Moment from 'react-moment';

const ScheduleItem = (props) => {
    let cardStyle = {border: "4px double black", width: "350px", margin: "10px"}

    return (
        <div style={cardStyle}>

            <Moment format="DD.MM.YYYY HH:mm">{new Date(props.schedule.class_date)}</Moment>
            <hr/>
            {props.schedule.group.course.name}<br/>
            Переподаватель:
            {props.schedule.teacher.user.first_name} {props.schedule.teacher.user.last_name}
        </div>
    );
};

export default ScheduleItem;