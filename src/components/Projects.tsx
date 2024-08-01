import React from 'react';
import ProjectsSection from './projectCard';

const projects= [
    { name: "AtomusProject", language: "React", imgUrl: "/projectsImg/AtomusV1/homepage.png" },
    { name: "AirBnb", language: "PHP", imgUrl: "/projectsImg/TPairbnb/homepage.png" },
    { name: "VideoGameTs", language: "React/Ts", imgUrl: "/projectsImg/VideoGameTs/homepage.png" },
    { name: "ExctinguisherGestion", language: "PHP/Symfony", imgUrl: "/projectsImg/exctincteurTpSymfonyV2/homepage.png" },
    { name: "CRUD Project", language: "React/Ts", imgUrl: "/projectsImg/CrudProject/homepage.png" },

];

const Project: React.FC = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <ProjectsSection projects={projects} />
            </div>

        </div>
    );
}

export default Project;