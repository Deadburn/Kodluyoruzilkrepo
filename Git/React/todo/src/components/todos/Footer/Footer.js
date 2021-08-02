import React from 'react'

function Footer({ todos, setTodo, filterData, setFilterData}) {
    const allCompleted = () => {
        const newTodos = []
        setTodo(newTodos)
    }


    return (
        <footer className="footer">

            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count">
                <strong>{todos.length}</strong>
                 items left
            </span>

            <ul className="filters">
                <li>
                    <a 
                    onClick={() => setFilterData("all")}
                    className={filterData === "all" ? "selected" : null}
                    >All</a>
                </li>
                <li>
                    <a
                        onClick={() => setFilterData("active")}
                        className={filterData === "active" ? "selected" : null}    
                    >Active</a>
                </li>
                <li>
                    <a
                        onClick={() => setFilterData("completed")}
                        className={filterData === "completed" ? "selected" : null}   
                    >Completed</a>
                </li>
            </ul>

            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button onClick={() => allCompleted()} className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default Footer
