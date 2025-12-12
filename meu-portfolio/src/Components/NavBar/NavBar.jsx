import "./style.css"
import A from "../Body/SubComponents/A-component"

export default function NavBar() {
    return (
        <>
            <div className="nav-bar-pai">
                <a href="#home">
                    <i className="fa-solid fa-house"></i>
                </a>
                <div className="navContent">
                    <A href="#projetos" className="Projetos">Projects</A>
                    <A href="#skills" className="Skills">Skills</A>
                    <A href="#sobre" className="Sobre">About</A>
                    <A href="#contato" className="Contato">Contacts</A>
                </div>
            </div>
        </>
    )
}