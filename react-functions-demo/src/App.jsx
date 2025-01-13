import { useState } from 'react'
import RegularFunctionExample from './RegularFunctionExample'
import ReactFunctionExample from './ReactFunctionExample'
import CustomHook from './CustomHook'

function App() {
  const {count, increment} = CustomHook()
  return (
    <>
     <h1>Understanding React Function vs Javascript vs Custom</h1>
     <RegularFunctionExample />
     <ReactFunctionExample />
     <div>
      <h1>Custom Hook Example </h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
     </div>
    </>
  )
}

export default App
