import React from 'react'

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Props passed to the component: ", props);
    return <WrappedComponent {...props} />
  };
};

const HelloComponent = ({name, age}) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Your age is {age}.</p>
    </div>
  )
}

const EnhancedHelloComponent = withLogger(HelloComponent);

function App() {

  return (
    <>
      <EnhancedHelloComponent name="Rahul" age={32} />
    </>
  )
}

export default App
