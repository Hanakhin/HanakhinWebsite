import React from 'react';
import ProjectCard from './projectCard.tsx';
import NavButton from "./NavButton.tsx";

interface Project {
    name: string;
    language: string;
    imgUrl: string;
    description: string;
    url:string;
    images: string[];
}

const projectsData: Project[] = [
    { name: "Atomus Project", language: "React", imgUrl: "/PortfolioSerious/projectsImg/AtomusV1/homepage.png", description: "Projet qui concerne l'ecologie , en cours de developement", url:"https://github.com/Hanakhin/AtomUsSolution-main",images:['/PortfolioSerious/projectsImg/TPairbnb/homepage.png','/PortfolioSerious/projectsImg/TPairbnb/homepage.png']},
    { name: "AirBnb clone Project", language: "PHP", imgUrl: "/PortfolioSerious/projectsImg/TPairbnb/homepage.png", description: "Projet réalisé a l'idem dans le cadre d'un TP PHP",url:"https://github.com/Hanakhin/TP_PHP_IDEM_ERN24_HANAKHIN",images:['/PortfolioSerious/projectsImg/Transat/homepage.png'] },
    { name: "VideoGameTs Project", language: "React/Ts // M.E.R.N stack", imgUrl: "/PortfolioSerious/projectsImg/VideoGameTs/homepage.png", description: "Projet personnel , qui m'as permis d'apprendre a utiliser firebase avec react/ts", url:"https://github.com/Hanakhin/VideoGameApp",images:['/PortfolioSerious/projectsImg/Transat/homepage.png'] },
    { name: "Exctinguisher Gestion Project", language: "PHP/Symfony", imgUrl: "/PortfolioSerious/projectsImg/exctincteurTpSymfonyV2/homepage.png", description: "Projet réalisé lui aussi a l'Idem dans le cadre d'un tp Symfony", url:"https://github.com/Hanakhin/symfonyPerso",images:['/PortfolioSerious/projectsImg/Transat/homepage.png'] },
    { name: "CRUD Project", language: "React/Ts // M.E.R.N stack", imgUrl: "/PortfolioSerious/projectsImg/CrudProject/homepage.png", description: "Projet personnel qui m'as servi a apprendre a gerer le systeme de CRUD sur mongoDB en react/ts", url:"https://github.com/Hanakhin/VideoGameAppTs",images:['/PortfolioSerious/projectsImg/Transat/homepage.png'] },
    { name: "Transat Reservation Project", language: "Symfony/Mongodb", imgUrl: "/PortfolioSerious/projectsImg/Transat/homepage.png", description: "Projet réalisé dans le cadre de l'apprentissage de symfony lié a Mongodb", url:"https://github.com/Hanakhin/TransatAppSymfoMongo", images:['/PortfolioSerious/projectsImg/Transat/homepage.png'] },
];

const ProjectsSection: React.FC<{onPageChange:(direction : 'prev' | 'next')=>void}> = ({onPageChange}) => {
    return (
        <section id="projects" className="py-20">
        <div className="container mx-auto h-max">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Mes Projets</h2>
            <NavButton onPageChange={onPageChange} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.name}
                        {...project}
                    />
                ))}
            </div>
        </div>
        </section>
    );
};

export default ProjectsSection;