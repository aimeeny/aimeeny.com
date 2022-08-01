import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro" style={{ backgroundImage: "url(/assets/seattlesmall.png)" }}>
            <div className="container">
                <h1>My name is <span className="highlight">Aimee Young</span>, 
                and I'm <br/>a <span className="highlight">web
                developer</span>.</h1>
                <p> 
                I have experience in developing projects from start to finish, back-end to front-end, creating meaningful and thoughtful user experiences, and connecting with customers and teammates. 
                </p>
            </div>
            <a href="#projects" className="scroll-down">
                <div className="mouse">
                    <span></span>
                </div>
                <div className="arrow">
                    <span></span>
                </div>
            </a>
        </div>
    )
}