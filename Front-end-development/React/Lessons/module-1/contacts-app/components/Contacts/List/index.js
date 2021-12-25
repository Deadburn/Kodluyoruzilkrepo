import {useState} from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState('')

    const filteredContext = contacts.filter((item) => {
        return Object.keys(item).some((key) => (
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        ))
    })

    console.log("filtered: ",filteredContext)

    return (
        <div>
            <input 
                placeholder="Filter Contact"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}

            />

            <ul className="list">
                { filteredContext.map((contact, index) => (
                    <li key={index}>
                        <span>{contact.fullName}</span> <span>{contact.phoneNumber}</span>
                    </li>
                ))}
            </ul>

            <p>Total Contacts({filteredContext.length})</p>

        </div>
    )
}

export default List
