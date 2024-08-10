import { useState } from "react"

export default function Todoinput(props) {
  const {handleaddtodos} = props
  const[todoValue, settodoValue]= useState("")
  return (
    <header>
        <input value={todoValue} onChange={(e)=>{
          settodoValue(e.target.value)
        }} placeholder="Enter todo..."/>
        
        <button onClick={()=>{
          handleaddtodos(todoValue)
          settodoValue('')
        }}>Add</button>

    </header>
  )
}
