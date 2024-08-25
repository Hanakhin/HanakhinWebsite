// ProjectsSection.tsx
import React from 'react';
import ProjectCard from './projectCard.tsx';
import NavButton from "./NavButton.tsx";
import { projectsData } from '../datas/ProjectsData.ts';

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