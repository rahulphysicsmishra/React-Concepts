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


const withLoggerNew = (WrappedComponent) => {
  return (props) => {
    console.log("New props : ", props);
    return <WrappedComponent {...props} />
  };
}

const UserInfo = ({name, age, contact}) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Your age is {age}</p>
      <p>Your contact is {contact}</p>
    </div>
  )
}

const EnhancedHelloComponentNew = withLoggerNew(UserInfo);

const withStatus = (WrappedComponent) => {
  return (props) => {
    const status = (props.age)>=18 ?  "Adult" : "Minor" ;
    const canVote = (props.citizen) == 1 ? "yes" : "no";
    console.log("All props: ", props);
    return <WrappedComponent {...props} status={status} canVote={canVote} />
  }
}

const enhancedUserInfo = ({name, age, status, citizen, canVote}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{status}</p>
      <p>Can vote : {canVote}</p>
    </div>
  )
}
const EnhancedHelloComponent2 = withStatus(enhancedUserInfo);

function App() {

  return (
    <div>
      <EnhancedHelloComponent name="Rahul" age={32} />
      <EnhancedHelloComponentNew name="Bhuvi" age={32} contact={1234} />
      <EnhancedHelloComponent2 name="Andy" age={36} citizen={1} />
    </div>
  )
}

export default App
