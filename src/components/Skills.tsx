import React from 'react';

// Types
interface Skill {
    name: string;
    icon: string;
    level: number;
}

// Data
const skillsData: Skill[] = [
    { name: "HTML", icon: "/icons/html5.svg", level: 90 },
    { name: "CSS", icon: "/icons/css3.svg", level: 90 },
    { name: "React.js", icon: "/icons/react.svg", level: 70 },
    { name: "Next.js", icon: "/icons/nextjs.svg", level: 30 },
    { name: "JavaScript", icon: "/icons/javascript.svg", level: 70 },
    { name: "PHP", icon: "/icons/php.svg", level: 60 },
    { name: "Symfony", icon: "/icons/symfony.svg", level: 60 },
    { name: "Figma", icon: "/icons/figma.svg", level: 70 },
];

// Components
const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="flex flex-col items-center">
        <div className="glass w-20 h-20 rounded-full flex items-center justify-center mb-2 bg-white bg-opacity-20 backdrop-blur-lg">
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10"
            />
        </div>
        <span className="text-center text-black">{skill.name}</span>
    </div>
);

const SkillGrid: React.FC<{ skills: Skill[] }> = ({ skills }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
            <SkillIcon key={index} skill={skill} />
        ))}
    </div>
);

// Main component
const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-black">Mes Compétences</h2>
                <div className="glass p-8 rounded-xl shadow-lg bg-white bg-opacity-20 backdrop-blur-lg">
                    <SkillGrid skills={skillsData} />
                </div>
            </div>
        </section>
    );
}

export default Skills;