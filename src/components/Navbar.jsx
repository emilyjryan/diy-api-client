import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Constellations Home</Link>
                </li>

                <li>
                    <Link to='/new-constellation'>Add a New Constellation</Link>
                </li>
            </ul>
        </nav>
    )
}