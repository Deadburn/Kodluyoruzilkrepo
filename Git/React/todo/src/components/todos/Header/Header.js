import {useState} from 'react'

function Header({ setFilterText, todos, setTodo  }) {

    const handleChange = (e) => {
        setTodo((e) => {
           
        })
    }

    return (
        <div className="header">
            <h1>todos</h1>
            <form >
                <input 
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={handleChange}
                    autoFocus   
                />
            </form>
        </div>
    )
}

export default Header
