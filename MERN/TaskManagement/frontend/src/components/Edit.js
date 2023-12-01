import React, {useEffect, useState} from 'react'
import axios from  'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'
import TaskForm from './TaskForm'
import './css/main.css'

const Update = (props) => {
    const {id} = useParams()
    const [task, setTask] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    const[errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/task/' + id)
        .then(res => {
            setTask(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])

    const updateTask = taskParam => {
        axios.put('http://localhost:5000/api/task/' + id, taskParam)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => {
            const errorResponse = err.response.data.errors
            const errorArr = []
            for(const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }

    return(
        <div className='main'>
            <div className='top'>
                <h1>Task Management App</h1>
                <h2>Add a Task</h2>
                <Link to={'/'}>back to home</Link>
            </div>
            <h2>Edit Task</h2>
            {
                loaded && (
                    <div>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <TaskForm onSubmitProp={updateTask} initialTitle={task.title} initialDes={task.description} />
                    </div>
                )
                
            }
        </div>
    )
}

export default Update