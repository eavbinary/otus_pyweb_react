import React, {useEffect, useState} from 'react';
import CourseItem from "./CourseItem"
import $api from "../Helper/http";

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    async function fetchCourses() {
        const response = await $api.get('/course/');
        if (response === undefined) {
            setCourses([]);
        } else {
            setCourses(response.data);
        }
    }

    useEffect(() => {
        fetchCourses();
    }, [])

    return (
        <div>
            <h2>Список курсов</h2>
            {courses.map((courses) =>
                <CourseItem course={courses} key={courses.id}/>
            )}

        </div>

    );
};
export default CourseList;