import "./style.css"

export default function NavBar() {
    return (
        <>
            <div className="nav-bar-pai">
                <a href="#projetos" className="Projeto">Projects</a>
                <a href="#skills" className="Skills">Skills</a>
                <a href="#sobre" className="Sobre">About</a>
                <a href="#contato" className="Contato">Contacts</a>
                <div className="div-invisivel"></div>
            </div>
        </>
    )
}