import React from 'react'

function Section({ todos, setTodo }) {
    const checkTodo = (index, todo) => {
        const newTodos = [...todos]
        newTodos[index] = {...todo, done: todo.done ? false : true}
        setTodo(newTodos)
    }

    const deleteTodo = (todo) => {
        const newTodos = todos.filter((t) => t !== todo)
        setTodo(newTodos)
    }

    return (
        <div className="main">
            <input
                className="toggle-all" 
                type="checkbox"
            />
            <label htmlFor="toggle-all">
                Mark as complete
            </label>
            
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className={todo.done ? "completed" : ""}>
                        <div className="view">
                            <input 
                                className="toggle"
                                type="checkbox"
                                defaultChecked={todo.done}
                                onChange={() => checkTodo(index, todo)}
                            />
                            <label>{todo.text}</label> 
                            <button
                                onClick={() => deleteTodo(todo)}
                                className="destroy"
                            ></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Section
