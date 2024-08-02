import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">© {new Date().getFullYear()} Hanakhin Nouni-Massotte. Tous droits réservés.</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        GitHub
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;