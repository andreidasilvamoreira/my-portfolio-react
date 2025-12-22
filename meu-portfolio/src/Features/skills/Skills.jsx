import "./style.css";
import SkillCategory from "./Skill-component";
import { useLanguage } from "../../shared/Hooks/useLanguage";

export default function Skills() {
    const { t } = useLanguage()

    return (
        <section id="skills" className="pai-de-todos-skills">
            <div className="skill-div">
                <h1 className="h1-skills">{t.skills.title}</h1>
            </div>

            <div className="div-centralizar">
                <div className="glass-card div-pai-Skills">
                    <SkillCategory
                        title="Back-end"
                        skills={["PHP", "Laravel", "Axios"]}
                        containerClass="div-back-end"
                        titleClass="back-end"
                    />

                    <SkillCategory
                        title="Front-end"
                        skills={["React", "JavaScript", "HTML5", "CSS3"]}
                        containerClass="div-front-end"
                        titleClass="front-end"
                    />

                    <SkillCategory
                        title={t.skills.sections.database}
                        skills={["MySQL", "SQLite"]}
                        className="div-banco-de-dados"
                        titleClass="banco-de-dados"
                    />
                </div>

                <div className="glass-card softSkills">
                    <SkillCategory
                        title={t.skills.sections.practices}
                        skills={["Scrum", "Kanban", "Padrão REST", "Clean Code"]}
                        className="div-metodologia"
                        titleClass="metodologia"
                    />
                    <SkillCategory
                        title={t.skills.sections.tools}
                        skills={[
                            "Git", "GitHub", "VSCode", "PhpStorm",
                            "Postman", "Insomnia", "MySQL Workbench"
                        ]}
                        className="div-ferramenta"
                        titleClass="ferramentas"
                    />
                </div>
            </div>
        </section>
    );
}
