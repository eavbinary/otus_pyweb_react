import React from "react";
import {NavLink} from "react-router-dom";

const CourseItem = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={`/course/${props.course.id}`}>
                        {props.course.name}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default CourseItem;