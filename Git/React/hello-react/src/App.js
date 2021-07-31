import './App.css';
import React from 'react'

import User from "./components/User"

const friends = [
  {
    id: 1,
    name: 'Cihan'
  },
  { 
    id:2,
    name: 'Emir'
  },
  {
    id: 3,
    name: 'Hasan'
  },
  {
    id: 4,
    name: 'Tayfun'
  },
]

function App(){
  //return React.createElement('div', null, 'Hello')
  return (
    <>
      <User 
        //name="Cihan"
        surname="Alıcı"
        age={23}
        isLoggedIn={true}
        friends={friends}
        address={{
          title: "Mezitli/Mersin",
          zip: 33200,
        }}
      />
      </>
  )
}


export default App