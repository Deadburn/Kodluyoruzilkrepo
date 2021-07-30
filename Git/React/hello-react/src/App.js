import './App.css';
import React from 'react'

import User from "./components/User"


const friends = [
  {
    id: 1,
    name: "Cihan",
  },
  {
    id: 2,
    name: "Sefa",
  },
  {
    id: 3,
    name: "Gökhan",
  },
]

function App(){
  //return React.createElement('div', null, 'Hello')
  return (
    <>
      <User 
        //name="Cihan"
        surname="Alıcı"
        isLoggedIn={true}
        age={29}
        friends={friends}
        address={{
          title: "Ataşehir/Istanbul",
          zip: 34755,
        }}
      
      />
      
    </>
  )
}

export default App