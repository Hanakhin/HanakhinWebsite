import React from 'react';
import { FaFileDownload, FaArrowRight } from 'react-icons/fa';

interface HomeProps {
    onPageChange: (index: number) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
    const handleOpenPDF = () => {
        const pdfUrl = '/PortfolioSerious/ressources/Hanakhin cv 25ans .pdf'; // Chemin vers votre CV
        window.open(pdfUrl, '_blank');
    };

    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-30 blur-lg"></div>
            <div className="relative z-10 text-center p-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold mb-4 text-black">Bonjour, je suis Hanakhin</h1>
                <p className="text-lg mb-8 text-black">Bienvenue sur mon site web !</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => onPageChange(1)} // Change to the index of the "À propos" page
                        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-black px-6 py-3 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 hover:border-opacity-50 transition duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105"
                    >
                        Commencer !
                        <FaArrowRight className="ml-2" />
                    </button>
                    <button
                        onClick={handleOpenPDF}
                        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-black px-6 py-3 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 hover:border-opacity-50 transition duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105"
                    >
                        Voir le CV
                        <FaFileDownload className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;