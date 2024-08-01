import React from 'react';

interface Project {
    name: string;
    language: string;
    imgUrl: string;
}

interface ProjectCardProps extends Project {}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, language, imgUrl }) => {
    return (
        <div className="glass p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 cursor-pointer bg-white bg-opacity-20 backdrop-blur-lg">
            <img src={imgUrl} alt={name} className="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2 text-black">{name}</h3>
            <p className="mb-2 text-black">Langage : {language}</p>
        </div>
    );
};

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        language={project.language}
                        imgUrl={project.imgUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;