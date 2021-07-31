import React, { useState, useEffect } from 'react'

function Counter() {
    const [number, setNumber] = useState(0)
    // const [name, setName] = useState('Cihan')

    // componentDidMount
    useEffect(() => {
        console.log('Component mount edildi!')
        
       const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000)

        return () => clearInterval(interval)
    
    }, [])

    useEffect(() => {
        console.log("NumberState güncellendi")
    }, [number])

    // useEffect(() => {
    //     console.log("NameState güncellendi")
    // }, [name])


    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>

            <hr />

            {/* <h1>{name}</h1>
            <button onClick={() => setName("Gülden")}>click</button> */}
        </div>
    )
}

export default Counter
