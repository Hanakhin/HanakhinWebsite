import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="h-screen flex items-center justify-center">
            <div className="glass p-8 rounded-xl shadow-lg max-w-4xl flex">
                <img src="/votre-photo.jpg" alt="Votre photo" className="w-1/3 rounded-lg mr-8" />
                <div>
                    <h2 className="text-4xl font-bold mb-4">Votre Nom</h2>
                    <p className="text-xl mb-6">Votre titre professionnel</p>
                    <a href="#projects" className="glass px-6 py-3 rounded-full text-gray-800 hover:bg-white hover:bg-opacity-30 transition duration-300">Voir mes projets</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;