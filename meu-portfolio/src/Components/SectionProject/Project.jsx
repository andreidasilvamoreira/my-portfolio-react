import "./style.css"

export default function Projects() {

    return (
        <>
            <section id="projetos" className="div-pai-de-todos-projetos">
                <div className="div-h1"><h1 className="h1-projetos">Projects</h1></div>
                <div className="div-pai-projetos">
                    <div class="card">
                        <h3 className="titulo-projeto">API de Restaurante</h3>
                        <p className="p-projeto">CRUD completo para pedidos, clientes e itens de menu</p>
                        <div className="sessao-skill"><p className="card-skill">Laravel</p><p className="card-skill">MySQL</p><p className="card-skill">RestFull</p></div>
                    </div>

                    <div class="card">
                        <h3 className="titulo-projeto">E-commerce Full Stack</h3>
                        <p className="p-projeto">Carrinho, login com token e gerenciamento de produtos</p>
                        <div className="sessao-skill"><p className="card-skill">Laravel</p><p className="card-skill">React</p><p className="card-skill">RestFull</p><p className="card-skill">MySQL</p></div>
                    </div>

                    <div class="card">
                        <h3 className="titulo-projeto">API Biblioteca</h3>
                        <p className="p-projeto">Gerenciamento de livros, autores, categorias e validações</p>
                        <div className="sessao-skill"><p className="card-skill">Laravel</p></div>
                        <button className="btn-projeto">Ver Projeto</button>
                    </div>
                </div>
            </section>
        </>
    )
}