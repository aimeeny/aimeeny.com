import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro" style={{ backgroundImage: "url(/assets/seattlesmall.png)" }}>
            <div className="container">
                <h1>My name is <span className="highlight">Aimee Young</span>, 
                and I'm <br/>a <span className="highlight">web
                developer</span>.</h1>
            </div>
            
        </div>
    )
}