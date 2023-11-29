import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const {taskID, successCallback} = props
    
    const deleteTask = e => {
        console.log("hello delete", taskID)
        axios.delete('http://localhost:5000/api/task/delete/' + taskID)
        .then(res => {
            successCallback()
        })
        .catch(err => console.log("delete error", err))
    }

    return(
        <button onClick={deleteTask}>Delete</button>
    )
}

export default DeleteButton