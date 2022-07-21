import "./navbar.scss"

export default function Navbar() {
    return (
        <div className="navbar">
            <a className="menu-items" href="#intro">About</a>
            <a className="menu-items" href="#projects">Projects</a>
            <a className="menu-items" href="#contact">Contact</a>
            <a className="menu-items" href="#resume">Resume</a>
        </div>
    )
}