import "./style.css"
import { useState } from "react"
import A from "../Body/SubComponents/A-component"
import { LanguageSelect } from "./SelectLanguage"
import { useLanguage } from "../../shared/Hooks/useLanguage"

export default function NavBar() {
    const { t } = useLanguage()
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="nav-bar-pai">
                <a href="#home">
                    <i className="fa-solid fa-house"></i>
                </a>

                <div className="navContent">
                    <A className="Projetos" href="#projetos">{t.nav.projects}</A>
                    <A className="Skills" href="#skills">{t.nav.skills}</A>
                    <A className="Sobre" href="#sobre">{t.nav.about}</A>
                    <A className="Contato" href="#contato">{t.nav.contact}</A>
                    <LanguageSelect />
                </div>
                <h1 className="h1-name">Andrei Moreira</h1>
                <button className="hamburger" onClick={() => setOpen(true)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <div className={`mobile-menu ${open ? "open" : ""}`}>
                <div className="div-button-menu">
                    <LanguageSelect />
                    <button className="close" onClick={() => setOpen(false)}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className="div-links-menu">
                    <a className="home" href="#home" onClick={() => setOpen(false)}>Início</a>
                    <a className="Projetos" href="#projetos" onClick={() => setOpen(false)}>Sobre</a>
                    <a className="Skills" href="#skills" onClick={() => setOpen(false)}>Skills</a>
                    <a className="Sobre" href="#sobre" onClick={() => setOpen(false)}>Projetos</a>
                    <a className="Contato" href="#contato" onClick={() => setOpen(false)}>Contato</a>
                </div>
            </div>
        </>
    )
}
