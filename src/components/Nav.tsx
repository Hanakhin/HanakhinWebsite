import React from 'react';

interface NavProps {
    pages: string[];
    onPageChange: (index: number) => void;
    currentPage: number;
}

const Nav: React.FC<NavProps> = ({ pages, onPageChange, currentPage }) => {
    return (
        <header className="glass fixed w-full p-4 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Mon Logo</h1>
                <ul className="flex space-x-4">
                    {pages.map((page, index) => (
                        <li key={index}>
                            <button
                                onClick={() => onPageChange(index)}
                                className={`text-gray-800 hover:text-gray-600 ${currentPage === index ? 'font-bold' : ''}`}
                            >
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