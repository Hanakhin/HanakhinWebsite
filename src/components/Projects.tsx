import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Répétez ce bloc pour chaque projet */}
                    <div className="glass p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <img src="/projet1.jpg" alt="Projet 1" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Nom du Projet</h3>
                        <p>Description brève du projet...</p>
                    </div>
                    {/* Fin du bloc projet */}
                </div>
            </div>
        </section>
    );
}

export default Projects;