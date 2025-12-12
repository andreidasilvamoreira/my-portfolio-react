import "../SectionSkills/style.css";

export default function SkillCategory({ title, skills, containerClass, titleClass }) {
    return (
        <div className={containerClass}>
            <h1 className={titleClass}>{title}</h1>
            <div className="container-skill">
                {skills.map((skill, index) => (
                    <p key={index} className="card-skill-skill">{skill}</p>
                ))}
            </div>
        </div>
    );
}
