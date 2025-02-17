import { useState } from 'react'
import './App.css'
import TodoInput from './component/todoInput'
import TodoList from './component/todoList'
function App() {
const [listTodo, setlistTodo] = useState([])
let addList =(inputText)=>{
  if (inputText !== '') 
  setlistTodo([...listTodo,inputText]); 
};
const deleteListItem=(key)=>{
let newListTodo = [...listTodo];
newListTodo.splice(key,1)
setlistTodo([...newListTodo])
}
  return (
<div className="main-container">
  <div className="center-container">
<TodoInput addList={addList}/>
<h1 className='app-heading'>TODO</h1>
<hr/>
{listTodo.map((listItem,i)=>{
  return(
    <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
  )
})}
  </div>
</div>
  )
}

export default App
