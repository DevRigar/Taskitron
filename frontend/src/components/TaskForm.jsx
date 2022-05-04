import { useState } from "react"
import {useDispatch} from 'react-redux'
import {createTask} from '../features/tasks/taskSlice'
import DatePicker from 'react-date-picker'





function TaskForm() {
  const [taskDate,setTaskDate] = useState(new Date())
  const [task,setTask] = useState({
    title:"",
    description:"",
    location:"",
    priority:"",
    assign:"",
    list:[],
  }) 
  const dispatch = useDispatch()




  function handleChange(event) {
    const { name, value } = event.target;

    setTask(prevTask => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }
  
  const date=new Date(taskDate).toLocaleString('en-GB').substring(0,10)
  
  const onSubmit = e =>{
    e.preventDefault()
    dispatch(createTask({task,date}))
    console.log(task)
    console.log(taskDate)
    setTask({
      title:"",
      description:"",
      location:"",
      priority:"",
      assign:"",
      list:[],
    })
  }

  return <section className="form">
      <form onSubmit={onSubmit} >
        <div className="form-group">
            <label htmlFor = "title">Task</label>
            <input 
                type="title" 
                name='title'
                id='title' 
                value={task.title} 
                onChange={handleChange}
            />
        </div>
        <div clas sName="form-group">
        <label htmlFor = "date">Date</label>
            <DatePicker
              type="taskdate" 
              name='taskdate' 
              id='taskdate' 
              onChange={setTaskDate}
              value={taskDate}
              format="dd/MM/y"
             />
        </div>
        <div className="form-group">
            <label htmlFor = "description">description</label>
            <input
                type="description" 
                name='description' 
                id='description' 
                value={task.description} 
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor = "location">location</label>
            <input
                type="location" 
                name='location' 
                id='location' 
                value={task.location} 
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor = "priority">priority</label>
            <input
                type="priority" 
                name='priority' 
                id='priority' 
                value={task.priority} 
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor = "assign">assign</label>
            <input
                type="assign" 
                name='assign' 
                id='assign' 
                value={task.assign} 
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor = "list">list</label>
            <input
                type="list" 
                name='list' 
                id='list' 
                value={task.list} 
                onChange={handleChange}
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