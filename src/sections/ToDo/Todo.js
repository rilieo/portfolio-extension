import React, { useState }from 'react'

import ToDoItem from '../../components/TodoItem'
import './Todo.css';

function Todo() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Finish ML Project",
            completed: false
        },
        {
            id: 2,
            text: "Study for tests",
            completed: false
        },
        {
            id: 3,
            text: "Make Feature plushies",
            completed: false
        },
    ])
    const [text, setText] = useState('');

    function addTask() {
        setTasks(...tasks, {
            id: tasks.length + 1,
            text: text,
            completed: false
        })
    }

    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(
            tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    };
                }
                return task;
            })
        );
    }

    return (
        <div className="todo">
            <h1>Todo List</h1>
            {tasks.map(task => 
                    <ToDoItem key={tasks.id}
                              task={task}
                              deleteTask={removeTask}
                              toggleCompleted={toggleCompleted}
                     />
            )}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="todo-button" onClick={addTask}>Add Task</button>
        </div>
    );
};

export default Todo;
