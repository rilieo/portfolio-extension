import React from 'react'
import './toDoItem.css';

function toDoItem({ task, toggleCompleted, deleteTask}) {
    function handleChange() {
        toggleCompleted(task.id);
    }
        
    return (
    <div className="todo-item">
        <input 
            type="checkbox"
            checked={task.completed}
            onChange={handleChange}
        />
        <p>{task.text}</p>
        <button onClick={() => deleteTask(task.id)}>
        X
        </button>
        </div>
    );
}

export default toDoItem;
