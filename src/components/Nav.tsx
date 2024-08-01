import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail, AiOutlineLink, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

interface NavProps {
    pages: string[];
    onPageChange: (index: number) => void;
    currentPage: number;
}

const Nav: React.FC<NavProps> = ({ pages, onPageChange, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getIcon = (page: string) => {
        switch (page.toLowerCase()) {
            case 'home':
                return <AiOutlineHome className="mr-1" />;
            case 'à propos':
                return <AiOutlineUser className="mr-1" />;
            case 'projets':
                return <AiOutlineProject className="mr-1" />;
            case 'compétences':
                return <BsCodeSlash className="mr-1" />;
            case 'contact':
                return <AiOutlineMail className="mr-1" />;
            case 'me':
                return <AiOutlineLink className="mr-1" />;
            default:
                return null;
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handlePageChange = (index: number) => {
        onPageChange(index);
        setIsMenuOpen(false);
    };

    return (
        <header className="glass fixed w-full p-4 z-50 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg">
            <nav className="container mx-auto flex justify-between items-center">
                <img src="/PortfolioSerious/Logo/logo.png" alt="logo" height="56px" width="56px" className="mr-2"/>

                {/* Menu hamburger pour mobile */}
                <button className="lg:hidden text-gray-800" onClick={toggleMenu}>
                    {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>

                {/* Menu pour desktop */}
                <ul className="hidden lg:flex space-x-4">
                    {pages.map((page, index) => (
                        <li key={index}>
                            <button
                                onClick={() => onPageChange(index)}
                                className={`text-gray-800 hover:text-gray-600 flex items-center ${currentPage === index ? 'font-bold' : ''}`}
                            >
                                {getIcon(page)}
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Menu déroulant pour mobile */}
            {isMenuOpen && (
                <div className="lg:hidden">
                    <ul className="mt-4 space-y-2">
                        {pages.map((page, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handlePageChange(index)}
                                    className={`w-full text-left text-gray-800 hover:text-gray-600 flex items-center p-2 ${currentPage === index ? 'font-bold bg-gray-100' : ''}`}
                                >
                                    {getIcon(page)}
                                    {page}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Nav;