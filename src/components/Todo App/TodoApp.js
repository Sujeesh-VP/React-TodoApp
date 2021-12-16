import React, {useState} from 'react'
import './TodoApp.css'

function TodoApp() {

    const [items, setItems] = useState([])
    const [data, setData] = useState('')
   
    const addItems = () => {
       setItems([...items, {
         id: items.length,
         value : data.toUpperCase()
       }])
       setData('')
    }
   
    const removeItems = (i) => {
       if(!window.confirm("Are you sure?"))
         return
       let currentItems = [...items]
       currentItems.splice(i, 1)
       setItems(currentItems)
    }
    
    return (
        <div>
            <h1>Todo App</h1>
            <div className = "input-div">  
                <input type = "text" value = {data} placeholder = "ENTER TASK" onChange = {(e) => {setData(e.target.value)}}/>
                <button className = "add" onClick = {() => addItems()}>Add</button>
          </div>
          <ul>
           {items.map((item, k) => {
             return <li className = "task">{item.value} <button className = "delete" onClick = {() => removeItems(k)}>Delete</button></li>
           })}
          </ul>
        </div>
    );
}

export default TodoApp
