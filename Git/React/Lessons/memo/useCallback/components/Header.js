import React from 'react'

function Header({number, increment}) {
    console.log("Header Component Rerendered")
    return (
        <div>
            Header - {number}
            <br /> 
            <br />

            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default React.memo(Header)
