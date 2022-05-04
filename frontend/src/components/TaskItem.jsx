import {useDispatch} from 'react-redux'
import {deleteTask} from '../features/tasks/taskSlice'

function TaskItem({task}) {
  const dispatch = useDispatch()

  return (
    <div className="goal">
        <div>
            {new Date(task.createdAt).toLocaleString('en-GB').substring(0,10)}
        </div>
        <h2>{task.title}</h2>
        <h2>{task.description}</h2>
        <h2>{task.location}</h2>
        <h2>{task.priority}</h2>
        <h2>{task.assign}</h2>
        <h2>{task.list}</h2>
        <h2>{task.date}</h2>
        <button onClick={()=> dispatch(deleteTask(task._id))} className="close">X</button>
    </div>
  )
}

export default TaskItem