import "./contact.scss"
import twitter from "./twitter.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <h2>Contact me at aimeenyy(at)gmail(dot)com</h2>
            <h2>or, find me online</h2>
            <div className="socials">
                <img src={twitter} alt="twitter" />
                <img src={github} alt="github" />
                <img src={linkedin} alt="linkedin" />
                <img src={instagram} alt="instagram" />
            </div>
        </div>
    )
}