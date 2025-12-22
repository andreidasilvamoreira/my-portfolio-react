import P from "./SubComponents/P-component"
import A from "./SubComponents/A-component"
import "../Body/style.css"
import { useLanguage } from "../../shared/Hooks/useLanguage";

export default function Body() {
    const { t } = useLanguage();

    return (
        <>
            <div id="home" className="hero">
                <div className="div-descricao"><h1 className="h1-nome">Andrei Moreira</h1>
                    <P className="p">{t.home.description[0]}</P>
                    <P className="p descricao">{t.home.description[1]}</P>
                    <div className="botao-pai">
                        <A href="#projetos" className="btn projetos">{t.home.actions.projects}</A>
                        <A href="#contato" className="btn contato-body">{t.home.actions.contacts}</A>
                    </div>
                </div>
                <div><img className="minha-foto" src="/eu.jpeg" alt="" /></div>
            </div>
        </>
    )
}