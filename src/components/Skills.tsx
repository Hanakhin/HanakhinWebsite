import React from 'react';

// Types
interface Skill {
    name: string;
    icon: string;
    level: number;
    url: string;  // Nouvelle propriété pour l'URL
}

// Data
const skillsData: Skill[] = [
    { name: "HTML", icon: "/PortfolioSerious/icons/html5.svg", level: 90, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "/PortfolioSerious/icons/css3.svg", level: 90, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "React.js", icon: "/PortfolioSerious/icons/react.svg", level: 70, url: "https://reactjs.org/" },
    { name: "Next.js", icon: "/PortfolioSerious/icons/nextjs.svg", level: 30, url: "https://nextjs.org/" },
    { name: "JavaScript", icon: "/PortfolioSerious/icons/javascript.svg", level: 70, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "PHP", icon: "/PortfolioSerious/icons/php.svg", level: 60, url: "https://www.php.net/" },
    { name: "Symfony", icon: "/PortfolioSerious/icons/symfony.svg", level: 60, url: "https://symfony.com/" },
    { name: "Figma", icon: "/PortfolioSerious/icons/figma.svg", level: 70, url: "https://www.figma.com/" },
    { name: "Node.Js", icon: "/PortfolioSerious/icons/nodejs.svg", level: 70, url: "https://nodejs.org/" },
    { name: "Docker", icon: "/PortfolioSerious/icons/docker.svg", level: 70, url: "https://www.docker.com/" },
    { name: "Blender", icon: "/PortfolioSerious/icons/blender.svg", level: 70, url: "https://www.blender.org/" },
    { name: "Unreal Engine", icon: "/PortfolioSerious/icons/ue5.svg", level: 70, url: "https://www.unrealengine.com/" },
    { name: "WordPress", icon: "/PortfolioSerious/icons/wp.svg", level: 70, url: "https://www.wordpress.fr/" },
    { name: "Tailwind", icon: "/PortfolioSerious/icons/tw.svg", level: 70, url: "https://www.tailwind.fr/" },
];

// Components
const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => (
    <a href={skill.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
        <div className="glass w-20 h-20 rounded-full flex items-center justify-center mb-2 bg-white bg-opacity-20 backdrop-blur-lg group-hover:bg-opacity-30 transition-all duration-300">
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10"
            />
        </div>
        <span className="text-center text-black group-hover:underline">{skill.name}</span>
    </a>
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
        <section id="skills" className="py-20 h-screen">
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