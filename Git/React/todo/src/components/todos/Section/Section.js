import React,{useState, useEffect, memo} from 'react'

import Todo from './Todo'

function Section({ addedTodo, filter, setTodoLen, clear }) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        if(addedTodo !== ""){
            setTodos([...todos, {name: addedTodo, completed: false}])
        }
    },[addedTodo])

    useEffect(() => {
        setTodos(todos.filter((item) => item.completed === false))
    }, [clear])

    useEffect(() => {
        let len
        if(filter ==="Active"){
            len = todos.filter((item) => item.completed === false)
            setTodoLen(len.length)
        } else if(filter === "Completed"){
            len = todos.filter((item) => item.completed === true)
            setTodoLen(len.length)
        } else {
            setTodoLen(todos.length)
        }
    }, [filter, todos])

    const handleCheck = (i) => {
        setTodos(
            todos.map((item) => 
                item.name === i.name ? {...item, completed: !i.completed} : item
            )
        )
    }

    const handleRemoveItem = (name) => {
        let newTodos = todos.filter((item) => item.name !== name)
        console.log(todos)
        setTodos(newTodos)
    }

    const handleMarkAll = () => {
        let markedTodos = todos.map((a) => ({...a, completed:true}))
        setTodos(markedTodos)
    }

    return (
        <div className="main">
            <input
                className="toggle-all" 
                type="checkbox"
            />
            <label htmlFor="toggle-all" onClick={() => handleMarkAll()}>
                Mark as complete
            </label>
            
            <ul className="todo-list">
                {filter === "All" && 
                    todos.map((i, j) => (
                        <Todo
                            key={j}
                            handleRemoveItem={handleRemoveItem}
                            handleCheck={handleCheck}
                            i={i}
                        />
                    ))
                }

                {filter === "Active" && 
                    todos.map((i,j) => (
                        !i.completed && (
                            <Todo
                                key={j}
                                handleRemoveItem={handleRemoveItem}
                                handleCheck={handleCheck}
                                i={i}
                            />
                        )
                    ))
                }

                {filter === "Completed" && 
                    todos.map((i,j) => 
                        i.completed && (
                            <Todo 
                                key={j}
                                handleRemoveItem={handleRemoveItem}
                                handleCheck={handleCheck}
                                i={i}
                            />
                        )
                     )
                }

            </ul>
        </div>
    )
}

export default memo(Section)
