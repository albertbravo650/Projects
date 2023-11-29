import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import './css/list.css'

const TaskList = (props) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
        .then((res) => {
            console.log("get working", res.data)
            setTasks(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    const removeFromDom = taskID => {
        setTasks(tasks.filter(task => task._id !== taskID))
    }

    return(
        <div>
            {
                tasks.map((task, index) => {
                    // console.log(task._id)
                    return(
                        <div key={index}>
                            <div className='listTask'>
                                {/* <Link to={`/task/${task._id}`}>{task.title}</Link> */}
                                <div className='topTask'>
                                    <div>
                                        <h3>{task.title}</h3>
                                        <p>{task.description}</p>
                                    </div>
                                    <div className='checkBox'>
                                        <input type='checkbox' name='task' id='task'></input>
                                        <label htmlFor='task'>Completed</label>
                                    </div>
                                </div>
                                <br/>
                                <div className='bottomTask'>
                                    <Link to={`/task/edit/${task._id}`}>Edit</Link>
                                    <DeleteButton taskID={task._id} successCallback={()=>removeFromDom(task._id)} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskList