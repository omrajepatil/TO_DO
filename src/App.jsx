import { useState } from 'react'
import Nav from '../component/Nav'
// import './component/nav.css'
import './App.css'

function App() {
  const [todos, setTodos] = useState()
  const [todo, setTodo] = useState([])


  const handleAdd = () =>{
    setTodos([...todos, {todo, isCompleted:false}])
    setTodo("")
  }

  const handleChange = (e) =>{
    
    setTodo("e.target.value")
  }

  const handleEdit = () =>{
    
  }

  const handleDelete = () =>{
    
  }

  return (
    <>
      <Nav></Nav>
      <div className="todo">
        <div className="add">
        <input onChange={handleChange}  value={todo} type="text" placeholder="Add a task"/>
        <button onClick={handleAdd}>Add Task +</button>
        </div>
        <div className="todoList">
        {todos.map(item=>{
          return
           ( <><h2>Your ToDos</h2><p>{item.todo}</p><button onClick={handleEdit}>Edit</button><button onClick={handleDelete}>Delete</button></> );
          })}
        </div>
      </div>
    </>
  )
}

export default App
