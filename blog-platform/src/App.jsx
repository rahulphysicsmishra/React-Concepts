import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";


function App() {
  const [posts, setPosts] = useState([])

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/create" element={<CreatePost setPosts={setPosts} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
