import React,{useState, useEffect} from 'react'
import Header from './Header/Header.js'
import Section from './Section/Section.js'
import Footer from './Footer/Footer.js'

function Todos() {
    const [todoInput, setTodoInput] = useState("")
    const [addedTodo, setAddedTodo] = useState("")
    const [filter, setFilter] = useState("All")
    const [todoLen, setTodoLen] = useState(0)
    const [clear, setClear] = useState(false)

    const handleSubmit = (e) => {
        setTodoInput("")
        e.preventDefault()
        setAddedTodo(todoInput)
    }

    useEffect(() => {
        setTodoInput('')
    },[addedTodo])

    return (
        <div className="todoapp"> 
            <Header
                addTodo={setTodoInput}
                handleSubmit={handleSubmit}
                todoInput={todoInput}
            />
            {/* <!-- This section should be hidden by default and shown when there are todos --> */}
            <Section 
                addedTodo={addedTodo}
                filter={filter}
                setTodoLen={setTodoLen}
                clear={clear}
            />
            {/* <!-- This footer should hidden by default and shown when there are todos --> */}
            <Footer 
                setFilter={setFilter} todoLen={todoLen} setClear={setClear}
            />
        </div>
    )
}

export default Todos
