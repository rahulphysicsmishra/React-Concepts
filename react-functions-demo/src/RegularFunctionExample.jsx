import React, {useState} from "react"

function RegularFunctionExample() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((prev)=>prev+1)
    }

    function decrement() {
        setCount((prev)=>prev-1)
    }

    return (
        <div>
            <h1>Regular Javascript Function</h1>
            <p>Counter: {count}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default RegularFunctionExample