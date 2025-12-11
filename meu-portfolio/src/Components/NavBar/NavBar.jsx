import "./style.css"

export default function NavBar() {
    return (
        <>
            <div className="nav-bar-pai">
                <a href="/projetos" className="Projeto">Projetos</a>
                <a href="/skills" className="Skills">Skills</a>
                <a href="/sobre" className="Sobre">Sobre</a>
                <a href="/contato" className="Contato">Contato</a>
                <div className="div-invisivel"></div>
            </div>
        </>
    )
}