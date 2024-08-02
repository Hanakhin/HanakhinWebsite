import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import NavButton from "./NavButton.tsx"; // Importez les icônes dont vous avez besoin

const Me: React.FC = () => {
    return (
        <section className="h-screen flex items-center justify-center">
            <div className="glass p-8 rounded-xl shadow-lg max-w-4xl flex flex-col md:flex-row bg-white bg-opacity-20 backdrop-blur-lg">
                <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                    <img src="/PortfolioSerious/ressources/me.jpeg" alt="Votre photo" className="w-full rounded-lg object-fill " />
                </div>
                <div className="md:w-2/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-black">Nouni-Massotte Hanakhin</h2>
                        <p className="text-xl mb-6 text-black">Developpeur Web / Web-mobile avec 2 ans d'éxperience</p>
                    </div>
                    <div className="mb-6">
                        <p className="text-black mb-4">
                            Développeur web depuis 2 ans maintenant , avec une année d'experience en tant que freelance.
                            Je serai ravi de vous accompagner dans vos projets web !
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/hanakhin-nouni-massotte-b6360b30b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/Hanakhin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                                <FaGithub size={24} />
                            </a>
                            <a href="mailto:hanakhin.nounimassote@gmail.com" className="text-gray-600 hover:text-black">
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Me;