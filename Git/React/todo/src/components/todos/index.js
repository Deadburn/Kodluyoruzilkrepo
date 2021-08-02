import React,{useState, useEffect} from 'react'
import Header from './Header/Header.js'
import Section from './Section/Section.js'
import Footer from './Footer/Footer.js'

function Todos() {
    const [todos, setTodo] = useState([
        { id: 1, text: "Learn Javascript", done: true},
        { id: 2, text: "Learn React", done: false},
        { id: 3, text: "Have a life", done: false },
    ])
    let filter

    useEffect(()=>{},[todos])

    const [filterText, setFilterText] = useState('') 
    const [filterData, setFilterData] = useState('all')
    
    filter = todos.filter((item) => {
        return Object.keys(item).some((key) => 
        item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase))
    })

    filter = todos.filter((item) => {
        if(filterData === "all"){
            return todos
        } else if(filterData === "active"){
            return item.done === "false"
        } else {
            return item.done === "true"
        }
    })

    return (
        <div className="todoapp"> 
            <Header setFilterText={setFilterText} />
            {/* <!-- This section should be hidden by default and shown when there are todos --> */}
            <Section todos={filter} setTodo={setTodo} />
            {/* <!-- This footer should hidden by default and shown when there are todos --> */}
            <Footer todos={todos} setTodo={setTodo} filterData={filterData} setFilterData={setFilterData} />
        </div>
    )
}

export default Todos
