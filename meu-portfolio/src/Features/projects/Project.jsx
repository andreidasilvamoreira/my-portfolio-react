import "./style.css"
import { useLanguage } from "../../shared/Hooks/useLanguage"
import notebook from "../../../public/notebook.png"
export default function Projects() {
    const { t } = useLanguage();
    return (
        <>
            <section id="projetos" className="div-pai-de-todos-projetos">
                <h1 className="h1-projetos">{t.projects.title}</h1>
                <div className="div-pai-projetos">
                    <div className="cards">
                        <div className="card card-principal">
                            <div className="image">
                                <div className="image-overlay"></div>
                            </div>
                            <div className="itens-card">
                                <h2>Sistema de Reservas Imobiliárias</h2>
                                <ul className="list-principal">
                                    <li className="list-p">PHP -</li>
                                    <li className="list-p">regras Complexas -</li>
                                    <li className="list-p">Array multidimencionais</li>
                                </ul>
                                <a href="" className="button-ver-projeto">Ver Projetos</a>
                            </div>

                        </div>
                        <div className="card card-secundario">
                            <h2>Ecommerce Full Stack</h2>
                            <p>Escalavel, Login com token, gerenciamento de produtos, busca de produto por id</p>
                            <a href="" className="button-ver-projeto">Ver Projetos</a>
                        </div>
                        <div className="card card-one">
                            <h2>Ecommerce Full Stack</h2>
                            <p>Escalavel, Login com token, gerenciamento de produtos</p>
                            <ul className="list-skills">
                                <li className="list">React</li>
                                <li className="list">Node.js</li>
                                <li className="list">MySQL</li>
                            </ul>
                        </div>
                        <div className="card card-two">
                            <h2>Ecommerce Full Stack</h2>
                            <p>CRUD completo para pedidos Cliente e senhas</p>
                            <ul className="list-skills">
                                <li className="list">PHP</li>
                                <li className="list">Laravel</li>
                                <li className="list">MySQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}