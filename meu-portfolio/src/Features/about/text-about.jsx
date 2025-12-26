import { useLanguage } from "../../shared/Hooks/useLanguage"
import "./style.css"

export default function TextAbout() {
        const { t } = useLanguage()

    return (
        <div className="about-text">
            <h1 className="h1-sobre">{t.about.title}</h1>
            <h3 className="subtitle">{t.about.subtitle}</h3>

            {t.about.description.map((text, index) => (
                <p key={index} className="p-descricao">
                    {text}
                </p>
            ))}

            <div className="div-list">
                {t.about.highlights.map((highlight, index) => (
                    <ul key={index} className="list-highlights">
                        <li className="list-li-highlight">
                            <i className="fa-solid fa-check"></i>
                            {highlight}
                        </li>
                    </ul>
                ))}
            </div>

            <p className="p-closing">{t.about.closing}</p>
        </div>
    )
}