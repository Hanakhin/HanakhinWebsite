import React from 'react';
import ProjectCard from './projectCard.tsx';

interface Project {
    name: string;
    language: string;
    imgUrl: string;
    description: string;
}

const projectsData: Project[] = [
    { name: "Atomus Project", language: "React", imgUrl: "/projectsImg/AtomusV1/homepage.png", description: "Projet qui concerne l'ecologie , en cours de developement" },
    { name: "AirBnb clone Project", language: "PHP", imgUrl: "/projectsImg/TPairbnb/homepage.png", description: "Projet réalisé a l'idem dans le cadre d'un TP PHP" },
    { name: "VideoGameTs Project", language: "React/Ts // M.E.R.N stack", imgUrl: "/projectsImg/VideoGameTs/homepage.png", description: "Projet personnel , qui m'as permis d'apprendre a utiliser firebase avec react/ts" },
    { name: "Exctinguisher Gestion Project", language: "PHP/Symfony", imgUrl: "/projectsImg/exctincteurTpSymfonyV2/homepage.png", description: "Projet réalisé lui aussi a l'Idem dans le cadre d'un tp Symfony" },
    { name: "CRUD Project", language: "React/Ts // M.E.R.N stack", imgUrl: "/projectsImg/CrudProject/homepage.png", description: "Projet personnel qui m'as servi a apprendre a gerer le systeme de CRUD sur mongoDB en react/ts" },
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
        </section>
    );
};

export default ProjectsSection;