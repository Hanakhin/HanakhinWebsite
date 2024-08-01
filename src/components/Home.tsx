import React from 'react';

const Home: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Chemin vers votre CV
        link.setAttribute('download', 'Mon_CV.pdf'); // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-30 blur-lg"></div>
            <div className="relative z-10 text-center p-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold mb-4 text-black">Bienvenue sur mon Portfolio</h1>
                <p className="text-lg mb-8 text-black">Découvrez mes projets et compétences.</p>
                <button
                    onClick={handleDownload}
                    className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-black px-6 py-3 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 hover:border-opacity-50 transition duration-300 flex items-center justify-center mx-auto hover:shadow-lg hover:scale-105"
                >
                    Get Started
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default Home;