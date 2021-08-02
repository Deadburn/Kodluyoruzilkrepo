import React from 'react'

function Header({ setFilterText, filterText, todos,setTodo  }) {

    const handleSubmit = (e) => {
        const newTodos = [...todos]
        newTodos[todos.length] = { id: todos.length, text: filterText, done: false  }
        setTodo(newTodos)
    }

    

    return (
        <div className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={(e) => setFilterText(e.target.value)}
                    autoFocus   
                />
            </form>
        </div>
    )
}

export default Header
