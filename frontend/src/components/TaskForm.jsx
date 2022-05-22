import { useState } from "react"
import {useDispatch} from 'react-redux'
import {createTask} from '../features/tasks/taskSlice'
import DatePicker from 'react-datepicker'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/TaskForm.css'
import "react-datepicker/dist/react-datepicker.css";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function TaskForm() {
  const [listItems,setListItems]=useState([])
  const [taskDate,setTaskDate] = useState(new Date())
  const [task,setTask] = useState({
    title:"",
    description:"",
    location:"",
    priority:"",
    assign:"",
    list:['']
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
  
  function handleList(event){
    const listItem=task.list
    setListItems(prevListItems =>{
      return[
        ...prevListItems,
        listItem]
      
    })
    task.list=['']
  }
  const date=new Date(taskDate).toLocaleString('en-GB').substring(0,10)
  
  const onSubmit = e =>{
    e.preventDefault()
    dispatch(createTask({task,date,listItems}))
    
    console.log(taskDate)
    console.log(listItems)
    console.log(task)
    setTask({
      title:"",
      description:"",
      location:"",
      priority:"",
      assign:"",
    })
  }



  return <Container className="container-flat" >
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title" 
                name='title'
                id='title' 
                value={task.title} 
                onChange={handleChange}
              />
              </Form.Group>
              <Form.Group >
            <Form.Label>Description</Form.Label> 
            <Form.Control
                type="description" 
                name='description' 
                id='description' 
                value={task.description} 
                onChange={handleChange}
            />
        </Form.Group>
        <Form.Group >
            <Form.Label>Location</Form.Label>
            <Form.Control
                type="location" 
                name='location' 
                id='location' 
                value={task.location} 
                onChange={handleChange}
            />
        </Form.Group>
        <Form.Group >
        <Form.Label>Priority</Form.Label>
            <Form.Select
                type="priority" 
                name='priority' 
                id='priority' 
                value={task.priority} 
                onChange={handleChange}
            >
              <option value="Must do">Must do</option>
              <option value="Can be rescheduled">Can be rescheduled</option>
              <option value="Optional">Optional</option>
            </Form.Select>
        </Form.Group>
        <Form.Group >
        <Form.Label>Assign</Form.Label>
            <Form.Control
                type="assign" 
                name='assign' 
                id='assign' 
                value={task.assign} 
                onChange={handleChange}
            />
        </Form.Group>
        
          </Col>
          <Col> 
            <Form.Group>            
                <Form.Label>Date</Form.Label>               
                <DatePicker className="form-control"
                  type="taskdate" 
                  name='taskdate' 
                  id='taskdate' 
                  onChange={setTaskDate}
                  value={taskDate}
                  selected={taskDate}
                  dateFormat="dd/MM/y"
                />       
     
            </Form.Group>
            <Form.Group >
              <Form.Label>List</Form.Label>
                <Form.Control
                type="list" 
                name='list' 
                id='list' 
                value={task.list}
                onChange={handleChange}
                />
                <Button className="btn-sm mt-2 mb-2 ml-5" 
                onClick={handleList}>Add item to list</Button>
                <ListGroup>
                 {listItems.map(function(listItem,index){
                   return <ListGroup.Item key={index}>{listItem}</ListGroup.Item>
                 })}
               </ListGroup>
            </Form.Group>
          </Col>             
        </Row>
            <Row>
            <Form.Group>
            <Button className="mt-4 mb-2" variant="primary" type="submit">
                Add Task
            </Button>
            </Form.Group>
            </Row>
      </Form>
  </Container>
}

export default TaskForm