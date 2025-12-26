import { useLanguage } from "../../shared/Hooks/useLanguage"
import "./style.css"
import CardAbout from "./card-about"
import TextAbout from "./text-about"

export default function About() {
    

    return (
        <div id="sobre" className="div-pai-de-todos-sobre-mim">
            <div className="about-container">
                <TextAbout/>
                <CardAbout/>
            </div>
        </div >
    )
}
