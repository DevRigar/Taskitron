import {useDispatch} from 'react-redux'
import {deleteTask} from '../features/tasks/taskSlice'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function TaskItem({task}) {
  const dispatch = useDispatch()
  

  return (
    <Card className='mt-4'>
      <Row className="g-0">
        <Col md={5}>
          <Card.Header >{task.title}</Card.Header>
        </Col>
        <Col md={5}>
          <Card.Header>{task.date}</Card.Header>
        </Col>
        <Col className="d-flex justify-content-center mb-0 align-items-center" md={2}> 
          <Button  variant="danger" size="sm"
          onClick={()=> dispatch(deleteTask(task._id))}
          >X</Button>
        </Col>
      </Row>
    <ListGroup variant="flush">
      
        <Form.Label className={task.description ? "d-flex justify-content-start mb-0" : "d-none"}>Description</Form.Label>
        <ListGroup.Item className={task.description ? 'pt-0' : "d-none"}>{task.description}</ListGroup.Item>
      
    
        <Form.Label className={task.location ? "d-flex justify-content-start mb-0" : "d-none"}>Location</Form.Label>
        <ListGroup.Item className={task.location ? 'pt-0' : "d-none"}>{task.location}</ListGroup.Item>
      
        <Form.Label className={task.priority ? "d-flex justify-content-start mb-0" : "d-none"}>Priority</Form.Label>
        <ListGroup.Item className={task.priority ? 'pt-0' : "d-none"}>{task.priority}</ListGroup.Item>

        <Form.Label className={task.assign ? "d-flex justify-content-start mb-0" : "d-none"}>Assigned to:</Form.Label>
        <ListGroup.Item className={task.assign ? 'pt-0' : "d-none"}>{task.assign}</ListGroup.Item>

        <Form.Label className={task.list.length > 0 ? "d-flex justify-content-start mb-0" : "d-none"}>List</Form.Label>
        {task.list.length > 0 && task.list.map(function(listItem,index){
                   return <ListGroup.Item key={index}>{listItem}</ListGroup.Item>
                 })}
      
      <Form.Label className="d-flex justify-content-start mb-0">Created at:</Form.Label>
      <ListGroup.Item className='pt-0'>{new Date(task.createdAt).toLocaleString('en-GB').substring(0,10)}</ListGroup.Item>
    
    </ListGroup>

  </Card>






    // <div className="goal">
    //     <div>
    //         {new Date(task.createdAt).toLocaleString('en-GB').substring(0,10)}
    //     </div>
    //     <h2>{task.title}</h2>
    //     <h2>{task.description}</h2>
    //     <h2>{task.location}</h2>
    //     <h2>{task.priority}</h2>
    //     <h2>{task.assign}</h2>
    //     <h2>{task.list}</h2>
    //     <h2>{task.date}</h2>
    //     <button onClick={()=> dispatch(deleteTask(task._id))} className="close">X</button>
    // </div>
  )
}

export default TaskItem