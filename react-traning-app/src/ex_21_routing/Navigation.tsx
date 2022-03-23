import { Link } from "react-router-dom"

const Navigation = () => {
    return <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/facility/150'>Facility</Link></li>
        </ul>
    </nav>
}

export { Navigation }