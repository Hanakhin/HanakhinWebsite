import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

interface NavProps {
    pages: string[];
    onPageChange: (index: number) => void;
    currentPage: number;
}

const Nav: React.FC<NavProps> = ({ pages, onPageChange, currentPage }) => {
    const getIcon = (page: string) => {
        switch (page.toLowerCase()) {
            case 'accueil':
                return <AiOutlineHome className="mr-1" />;
            case 'à propos':
                return <AiOutlineUser className="mr-1" />;
            case 'projets':
                return <AiOutlineProject className="mr-1" />;
            case 'compétences':
                return <BsCodeSlash className="mr-1" />;
            case 'contact':
                return <AiOutlineMail className="mr-1" />;
            default:
                return null;
        }
    };

    return (
        <header className="glass fixed w-full p-4 z-50 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg">
            <nav className="container mx-auto flex justify-between items-center">
                <img src="/Logo/logo.png" alt="logo" height="56px" width="56px" className="mr-2"/>
                <ul className="flex space-x-4">
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
        </header>
    );
}

export default Nav;