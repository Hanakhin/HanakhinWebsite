import React from 'react';

const Home: React.FC = () => {
    const handleDownload = () => {
        // Remplacez 'path/to/your/cv.pdf' par le chemin réel de votre CV
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Chemin vers votre CV
        link.setAttribute('download', 'Mon_CV.pdf'); // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon Portfolio</h1>
                <p className="text-lg mb-8">Découvrez mes projets et compétences.</p>
                <button
                    onClick={handleDownload}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center mx-auto hover:scale-105"
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