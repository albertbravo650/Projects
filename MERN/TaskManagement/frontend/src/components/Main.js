import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import React, {useEffect, useState} from 'react';
import axios from "axios";

const Main = (props) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
        .then(res => {
            setTasks(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const removeFromDom = taskID => {
        axios.delete('http://localhost:5000/api/task/delete/' + taskID)
        .then(res => {
            console.log(res);
            setTasks(tasks.filter(task => task._id !== taskID));
        })
        .catch(err => console.log(err))
    }

    const createTask = newParam => {
        axios.post('http://localhost:5000/api/task', newParam)
        .then(res => {
            console.log(res);
            setTasks([...tasks, res.data]);
        })
        .catch(err => console.log("hello errororor", err));
    }

    return(
        <div>
            <h1>Hello</h1>
            <TaskForm tasks={tasks} setTasks={setTasks} onSubmitProp={createTask}
            initialTitle="" initialDes=""/>
            <hr/>
            <TaskList tasks={tasks} setTasks={setTasks} removeFromDom={removeFromDom}/>
        </div>
    );
}

export default Main;