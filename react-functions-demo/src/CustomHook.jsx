import React, {useState} from "react"

function CustomHook() {
    const [count, setCount] = useState(200)

    const increment = () => {
        setCount((prev)=>prev+1)
    }

    return {count, increment}
}

export default CustomHook