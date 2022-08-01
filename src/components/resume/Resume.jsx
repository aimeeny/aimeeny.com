import "./resume.scss";
import resume from "./resume.png";
import resumepdf from "./resumepdf.pdf";

export default function Resume() {
    return (
        <div className="resume" id="resume">
            <h1>Resume</h1>
                <img src={resume} alt="resume" />
            <h3><a href={resumepdf} target="_blank" rel="noreferrer">View resume in new tab</a></h3>
        </div>
    )
}