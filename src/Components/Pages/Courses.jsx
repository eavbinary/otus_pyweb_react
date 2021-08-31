import React, {useState} from 'react';
import CourseList from "../CourseList";
import Modal from "../Modal/Modal";
import $api from "../../Helper/http";
import {useSelector} from "react-redux";

function Courses(props) {
    const authInfo = useSelector(state => state);
    const [modalActive, setModalActive] = useState(false);
    const [inName, setInName] = useState("");
    const [inDescription, setInDescription] = useState("");


    async function createNewCourse(name, description) {
        setModalActive(false);
        const request = await $api.post('/course/', {
            name: name,
            description: description
        }, {
            headers: {Authorization: `Bearer ${localStorage.getItem('tokenAccess')}`}
        })
        console.log(request);
    }

    let createButton = "";
    if (authInfo.auth) {
        createButton = <button onClick={() => {
            setModalActive(true);
        }}>Добавить курс
        </button>
    }


    return (
        <div>
            {createButton}
            <CourseList/>
            <Modal active={modalActive} setActive={setModalActive}>
                <h1>Новый курс</h1>
                <form>
                    Наименование:<br/>
                    <input type="text" value={inName}
                           onChange={event => setInName(event.target.value)}/><br/>
                    Описание:<br/>
                    <textarea rows="10" cols="45" name="text"
                              value={inDescription}
                              onChange={event => setInDescription(event.target.value)}/><br/><br/>
                    <center>
                        <button onClick={async () => {
                            await createNewCourse(inName, inDescription);
                        }}>Создать
                        </button>
                    </center>
                </form>
            </Modal>

        </div>
    );
}

export default Courses;