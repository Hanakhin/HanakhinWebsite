import React, { useState } from 'react';
import Modal from './modal/modal.tsx';

interface Project {
    name: string;
    language: string;
    imgUrl: string;
    description: string;
    link:string;
    url:string;
    images:[];
}

const ProjectCard: React.FC<Project> = ({ name, language, imgUrl, description,url,images }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = (): void => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div
                onClick={handleOpenModal}
                className="glass p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 cursor-pointer bg-white bg-opacity-20 backdrop-blur-lg"
            >
                <img src={imgUrl} alt={name} className="w-full h-48 object-contain rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">{name}</h3>
                <p className="mb-2 text-black">Langage : {language}</p>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={name}
                description={description}
                url={url}
                images={images}
            />
        </div>
    );
};

export default ProjectCard;