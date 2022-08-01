import "./projects.scss";
import fiberamie from "./fiberamie.png";
import dreamer from "./dreamer.png"
import sourcebook from "./sourcebook.png"
import chirp from "./chirp.png"


export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1 className="scroll-down">Projects</h1>
            <div className="project-images">
                <a href="https://github.com/aimeeny/fiberamie" rel="noreferrer" target="_blank"><img src={fiberamie} alt="fiber amie" /></a>          
                <a href="https://github.com/PdxCodeGuild/class_koi/tree/main/code/aimee/html_css/lab03" rel="noreferrer" target="_blank"><img src={dreamer} alt="dreamer" /></a>               
                <a href="https://github.com/aimeeny/sourcebook" rel="noreferrer" target="_blank"><img src={sourcebook} alt="sourcebook" /></a>                
                <a href="https://github.com/PdxCodeGuild/class_koi/tree/main/code/aimee/django/lab03/chirp" rel="noreferrer" target="_blank"><img src={chirp} alt="chirp" /></a>            
            </div>
        </div>
    )
}