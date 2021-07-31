import { useState } from "react"

function App() {
  const [name, setName] = useState("Cihan");
  const [age, setAge] =useState(23)
  const [friends, setFriends] = useState(["Ahmet","Muradi"])
  const [address, setAddress] = useState({
    title: 'Mersin',
    zip: 33200
  })

  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ali Candan")}>Change Name</button>
      <button onClick={() => setAge((age) => age+=1)}>Change Age</button>
    
      <hr />
      <br />
      
      <h2>Friends</h2>
      {
        friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))
      }
      <button onClick={() => setFriends([...friends, "Cihan"])}>Add  new friend</button>
      
      <hr />
      <br />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>

      <br />
      <button onClick={() => setAddress({ ...address, title: "Ankara", zip: 37000 })}>Add  new address</button>
      

    </div>
  );
}

export default App;


