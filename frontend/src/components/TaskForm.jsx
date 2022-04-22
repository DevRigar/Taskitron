import { useState } from "react"
import {useDispatch} from 'react-redux'
import {createTask} from '../features/tasks/taskSlice'

function TaskForm() {
  const [title,setTitle] = useState("") 
  const dispatch = useDispatch()
  
  
  const onSubmit = e =>{
    e.preventDefault()
    dispatch(createTask({title}))
    setTitle('')
  }

  return <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor = "title">Task</label>
            <input 
                type="title" 
                name='title' 
                id='title' 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
            />
        </div>
        <div className="form-group">
            <button className="btn btn-block" type='submit'>
                Add Task
            </button>
        </div>
      </form>
  </section>
}

export default TaskForm