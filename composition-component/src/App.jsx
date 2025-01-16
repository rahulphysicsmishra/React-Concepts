import React from "react"
import ProfileCard from "./Profile"

function App() {

  const user = {
    name: "Rahul",
    bio: "Just few info",
    imageURL: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    email: "r@gmail.com",
    phone: "1234",
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ProfileCard user={user} />
    </div>
  )
}

export default App
