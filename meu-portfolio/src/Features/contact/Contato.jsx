import { useLanguage } from "../../shared/Hooks/useLanguage";
import Div, { DivAux } from "./div-links";
import Form from "./formulario";
import "./style.css";

export function Contato() {
    const { t } = useLanguage()
    return (
        <>
            <section id="contato" className="div-contato-pai-de-todos">
                <div className="contato-pai">
                    <DivAux className="h1-contato" containerClass="contato" as="h1">
                        {t.contact.title}
                    </DivAux>
                    <DivAux className="p-contato" containerClass="div-contato">
                        {t.contact.titleDescription}
                    </DivAux>
                </div>
                <div className="div-contato-form">
                    <div className="links-contato">
                        <Div title="LinkedIn:" className="linkedin" url="http://www.linkedin.com/in/andreidasilvamoreira" value="Andrei-da-Silva-Moreira" />
                        <Div title="GitHub:" className="github" url="https://github.com/andreidasilvamoreira" value="andreidasilvamoreira" />
                        <Div title={t.contact.telephone} className="telefone"/>
                        <a className="telefone-link" href="https://wa.me/5562993513125?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar">+55 62 99351-3125</a>
                    </div>
                    <Form />
                </div>
            </section>
        </>
    )
}