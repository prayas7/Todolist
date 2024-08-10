import React from 'react';
import Todocard from './Todocard';

export default function Todolist(props) {
    const {todos} = props
    
  
    return (
        <ul className='main'>
            {todos.map((todo, todoindex) => (
                <Todocard {...props} key={todoindex} index={todoindex}>
                    <p>{todo}</p>
                </Todocard>
            ))}
        </ul>
    );
}
