import React, {useEffect, useState} from 'react';

import Modal from "../Modal/Modal";
import $api from "../../Helper/http";
import {Link, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

function Course(props) {
    const authInfo = useSelector(state => state);
    const [course, setCourse] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const id = props.match.params.id;

    async function fetchCourse() {
        const response = await $api.get('/course/' + id);
        if (response === undefined) {
            setCourse(null);
        } else {
            setCourse(response.data);
        }
    }

    let deleteButton = "";
    if (authInfo.auth) {
        deleteButton = <div>
            <button
                onClick={

                    async () => {
                        const result = await $api.delete('/course/' + id,
                            {},
                            {
                                headers: {Authorization: `Bearer ${localStorage.getItem('tokenAccess')}`}
                            })
                        setDeleted(true);
                    }

                }
            >Удалить
            </button>
        </div>;
    }


    useEffect(() => {
        fetchCourse();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (deleted)
    {
        return (<Redirect to={{pathname: "/course"}}/>);
    }

    if (course === null) {
        return (<div><h1>Ошибка получения данных.</h1></div>)
    } else {
        return (
            <div>
                <h1>{course.name}&nbsp;
                    <button
                        onClick={() => {
                            setModalActive(true);
                        }}>
                        Записаться на курс
                    </button>
                </h1>
                {course.description}

                {deleteButton}


                <Modal active={modalActive} setActive={setModalActive}>
                    <h1>Запись на курс {course.name}<br/></h1>
                    <form>
                        ФИО:
                        <input/><br/>
                        eMail:
                        <input/><br/><br/>
                        <center>
                            <button onClick={() => {

                                setModalActive(false)
                            }}>Отправить
                            </button>
                        </center>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Course;