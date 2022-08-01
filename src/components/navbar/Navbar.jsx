import "./navbar.scss"
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <a className="menu-items" href="#intro">About</a>
            <a className="menu-items" href="#projects">Projects</a>
            <a className="menu-items" href="#contact">Contact</a>
            <a className="menu-items" href="#resume">Resume</a>
            {/* <Link to="/blog" className="menu-items">Blog</Link> */}
        </div>
    )
}