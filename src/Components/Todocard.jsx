import React from 'react';

export default function Todocard(props) {
    const { children, handledelete, index} = props;
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button className='edit'> <i className="fa-solid fa-pen-to-square"></i></button>
                <button className='delete' onClick={()=>{
                    handledelete(index)
                }}><i className="fa-solid fa-trash"></i></button>
                
                
            </div>
        </li>
    );
}
