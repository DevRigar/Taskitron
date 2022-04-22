import {useDispatch} from 'react-redux'
import {deleteTask} from '../features/tasks/taskSlice'

function TaskItem({task}) {
  const dispatch = useDispatch()

  return (
    <div className="goal">
        <div>
            {new Date(task.createdAt).toLocaleString('en-GB')}
        </div>
        <h2>{task.title}</h2>
        <button onClick={()=> dispatch(deleteTask(task._id))} className="close">X</button>
    </div>
  )
}

export default TaskItem