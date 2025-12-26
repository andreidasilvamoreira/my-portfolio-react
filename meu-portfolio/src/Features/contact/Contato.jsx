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
                        {t.contact.contactDescription.map((description, index) => (
                            <p key={index}>{description}</p>
                        ))}

                        <Div classLink={"div-github"} className={"fa-brands fa-github"} link={"github"} url={"https://github.com/andreidasilvamoreira"} nome={"GitHub"} />
                        <Div classLink={"div-linkedin"} className={"fa-brands fa-linkedin"} link={"linkedin"} url={"http://www.linkedin.com/in/andreidasilvamoreira"} nome={"Linkedin"} />
                        <Div classLink={"div-email"} className={"fa-solid fa-envelope"} link={"email"} url={"https://mail.google.com/mail/?view=cm&to=andreidasilvamoreira14@gmail.com"} nome={"Email"} />
                        <Div classLink={"div-telefone"} className={"fa-solid fa-phone"} link={"telefone"} url={"https://wa.me/5562993513125?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar"} nome={t.contact.telephone} />
                    </div>
                    <Form />
                </div>
            </section>
        </>
    )
}