import React, {useState} from "react"

function ReactFunctionExample() {
    const [count, setCount] = useState(100)

    return (
        <div>
            <h1 color="brown">React Function Method</h1>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default ReactFunctionExample