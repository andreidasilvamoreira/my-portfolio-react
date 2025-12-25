import { useLanguage } from "../../shared/Hooks/useLanguage"
import "./style.css"

export default function About() {
    const { t } = useLanguage()

    return (
        <>
            <div id="sobre" className="div-pai-de-todos-sobre-mim">

                <div className="about-container">

                    <div className="about-text">
                        <h1 className="h1-sobre">{t.about.title}</h1>
                        <h3 className="subtitle">{t.about.subtitle}</h3>
                        {t.about.description.map((text, index) => (
                            <p key={index} className="p-descricao">
                                {text}
                            </p>
                        ))}
                        <div className="div-list">{t.about.highlights.map((highlight, index) => (
                            <ul key={index} className="list-highlights">
                                <li className="list-li-highlight">
                                    <i class="fa-solid fa-check"></i>
                                    {highlight}
                                </li>
                            </ul>
                        ))}</div>

                        <p className="p-closing">{t.about.closing}</p>
                    </div>

                    <div className="about-visual">
                        <div className="code-div"></div>
                        <div className="linha-icon"></div>

                        <div className="icon-div">
                            <i class="fa-brands fa-php"></i><i class="fa-solid fa-database"></i><i class="fa-brands fa-git-alt"></i>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

