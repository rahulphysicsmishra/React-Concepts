import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Blog</Link>
        </nav>
    )
}

export default Navbar