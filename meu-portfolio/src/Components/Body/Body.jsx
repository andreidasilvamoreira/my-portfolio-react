import "./style.css"

export default function Body() {
    return (
        <>
            <div className="div-body-pai">
                <div className="div-descricao"><h1 className="h1-nome">Andrei Moreira</h1>
                    <p className="p">Backend-Focused Full Stack Developer
                    </p>
                    <p className="p descricao">I build fast, secure, and scalable APIs using PHP, Laravel, MySQL, and React.</p>
                    <div className="botao-pai">
                        <button className="btn projetos">View Projects</button>
                        <button className="btn contato">Talk to me</button></div>
                </div>
                <div><img className="minha-foto" src="/eu.jpeg" alt="" /></div>
            </div>
        </>
    )
}