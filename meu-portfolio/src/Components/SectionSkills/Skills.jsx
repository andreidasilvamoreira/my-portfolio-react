import "../SectionSkills/style.css";
import SkillCategory from "./Skill-component";

export default function Skills() {
    return (
        <section id="skills" className="pai-de-todos-skills">
            <div className="skill-div">
                <h1 className="h1-skills">Hard Skills</h1>
            </div>

            <div className="div-centralizar">
                <div className="div-pai-Skills">
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
                        title="Banco de Dados"
                        skills={["MySQL", "SQLite"]}
                        className="div-banco-de-dados"
                        titleClass="banco-de-dados"
                    />
                </div>

                <div className="softSkills">
                    <SkillCategory
                        title="Metodologias e Boas Práticas"
                        skills={["Scrum", "Kanban", "Padrão REST", "Clean Code"]}
                        className="div-metodologia"
                        titleClass="metodologia"
                    />
                    <SkillCategory
                        title="Ferramentas"
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
