import {memo} from 'react'

function Footer({ setFilter, todoLen, setClear}) {
    return (
        <footer className="footer">

            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count">
                <strong>{todoLen}</strong>
                 items left
            </span>

            <ul className="filters">
                <li>
                    <a 
                    href="#"
                    onClick={() => setFilter("all")}
                    className="selected"
                    >All</a>
                </li>
                <li>
                    <a  
                        href="#"
                        onClick={() => setFilter("Active")}
                    >Active</a>
                </li>
                <li>
                    <a  
                        href="#"
                        onClick={() => setFilter("Completed")} 
                    >Completed</a>
                </li>
            </ul>

            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button 
                className="clear-completed"
                onClick={() => setClear((prevState) => !prevState)} 
            >
                Clear completed
            </button>
        </footer>
    )
}

export default memo(Footer)
