import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const TaskList = (props) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
        .then((res) => {
            console.log(res.data)
            setTasks(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    const removeFromDom = taskID => {
        setTasks(tasks.filter(task => task._id !== taskID))
    }

    return(
        <div>
            <h2>All Tasks:</h2>
            {
                tasks.map((task, index) => {
                    return(
                        <div key={index}>
                            <div className='listTask'>
                                <Link to={`/task/${task._id}`}>{task.title}</Link>
                                <br/>
                                <Link to={`/task/edit/${task._id}`}>Edit</Link>
                                <DeleteButton taskID={task._id} successCallback={()=>removeFromDom(task._id)} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskList