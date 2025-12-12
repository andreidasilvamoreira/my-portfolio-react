import P from "./SubComponents/P-component"
import A from "./SubComponents/A-component"
import "../Body/style.css"

export default function Body() {
    return (
        <>
            <div id="home" className="div-body-pai">
                <div className="div-descricao"><h1 className="h1-nome">Andrei Moreira</h1>
                    <P className="p">Backend-Focused Full Stack Developer</P>
                    <P className="p descricao">I build fast, secure, and scalable APIs using PHP, Laravel, MySQL, and React.</P>
                    <div className="botao-pai">
                        <A href="projetos" className="btn projetos">View Projects</A>
                        <A href="contato" className="btn contato">Talk to me</A>
                    </div>
                </div>
                <div><img className="minha-foto" src="/eu.jpeg" alt="" /></div>
            </div>
        </>
    )
}