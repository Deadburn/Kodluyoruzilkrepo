import { useState, useEffect } from 'react'

import './styles.css'

import List from "./List";
import Form from "./Form"

function Contacts() {
    const [contacts, setContacts] = useState([{
         fullName: "Cihan",
         phoneNumber: "05078141483"
    },
    {
        fullName: "Ali",
        phoneNumber: "50784567865"
    }
]);

    useEffect(() => {
        console.log(contacts)
    },[contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
