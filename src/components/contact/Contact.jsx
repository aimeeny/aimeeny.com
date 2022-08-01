import "./contact.scss";
import twitter from "./twitter.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <h2>Contact me at aimeenyy(at)gmail(dot)com</h2>
            <br />
            <h2>Or, find me online:</h2>
            <div className="socials">
                <a href="https://twitter.com/HiAimeeYoung" rel="noreferrer" target="_blank"><img src={twitter} alt="twitter" /></a>
                <a href="https://github.com/aimeeny" rel="noreferrer" target="_blank"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/aimeenyoung/" rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://www.instagram.com/ardenbriarknits/" rel="noreferrer" target="_blank"><img src={instagram} alt="instagram" /></a>
            </div>
            <div className="footer">
                <h3>&copy; Aimee Young 2022</h3>
                <h3>This site was made in React. <a href="https://github.com/aimeeny/aimeeny.com" rel="noreferrer" target="_blank">See the code here.</a></h3>
            </div>
        </div>
    )
}