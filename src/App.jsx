import { useState } from "react";
import Todoinput from "./Components/Todoinput"
import Todolist from "./Components/Todolist"

function App() {
    const [todos, settodos]= useState([])
        const handleaddtodos =(newtodo)=>{
            const newtodolist =[...todos, newtodo]
            settodos(newtodolist)
        }
        const handledelete=(index)=>{
            const newtodolist= todos.filter((todo, todoindex)=>{
                return todoindex != index
            })
            settodos(newtodolist)

            

        }
        const handleedit=(index)=>{

        }
  
 return (
 <>
<Todoinput handleaddtodos={handleaddtodos}/>
<Todolist handledelete={handledelete}todos={todos}/>
 </>)
}
export default App
