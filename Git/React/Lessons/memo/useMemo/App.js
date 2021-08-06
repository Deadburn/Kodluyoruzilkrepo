import "./App.css";
import {useState, useMemo} from 'react'
import Header from './components/Header'

//const data = { name : "Cihan"}  yöntem 1 

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')

  const data = useMemo(() => { // yöntem 2
    return calculateObject(number) 
  },[number])  
  // dependency array'a yazdığın değer değiştikçe render edilir

  // const data = calculateObject() 
  // inanılmaz bir maaliyet


  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />
      <hr />
      
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>Increment</button>

      <br /><br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    
    </div>
  );
}
// bu fonksiyon belirli bir süre alıyor ve sürekli aynı şeyleri
// yapması çok gereksiz

function calculateObject(number){
  console.log("Calculationg...")
  for(let i=0; i<1000000000; i++){}
  console.log("Calculationg completed!")

  return { name : "Cihan", number} 
}

export default App;
