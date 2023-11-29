import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import './css/main.css'
import { useNavigate } from "react-router-dom";

const Main = (props) => {
    const [tasks, setTasks] = useState([]);
    const [errors, setErrors] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
        .then(res => {
            setTasks(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const removeFromDom = taskID => {
        console.log(taskID)
        axios.delete('http://localhost:5000/api/task/delete/' + taskID)
        .then(res => {
            console.log(res);
            setTasks(tasks.filter(task => task._id !== taskID));
        })
        .catch(err => console.log("axios delete err", err))
    }

    const createTask = newParam => {
        console.log(newParam)
        axios.post('http://localhost:5000/api/task', newParam)
        .then(res => {
            console.log("post working", res);
            setTasks([...tasks, res.data]);
            nav('/');
        })
        .catch(err => {
            console.log("hello errororor", err);
            const errorResponse = err.response.data.errors
            const errorArr = []
            for(const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        });

    }

    return(
        <div className="main">
            <div className="top">
                <h1>Task Management App</h1>
                <h2>Add a Task</h2>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <TaskForm tasks={tasks} setTasks={setTasks} onSubmitProp={createTask}
                initialTitle="" initialDes=""/>
            </div>
            <div className="bottom">
                <h2>All Tasks:</h2>
                <TaskList tasks={tasks} setTasks={setTasks} removeFromDom={removeFromDom}/>
            </div>
        </div>
    );
}

export default Main;