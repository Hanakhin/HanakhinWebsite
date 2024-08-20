import React, { useState } from 'react';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Home from "../components/Home";
import Me from "../components/Me";
import Footer from "../components/Footer.tsx";

const pages = [
    { name: "Home", component: <Home /> },
    { name: "Projets", component: <Projects /> },
    { name: "Compétences", component: <Skills /> },
    { name: "Contact", component: <Contact /> },
    { name: "Me", component: <Me /> }
];

const Page: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const handlePageChange = (index: number) => {
        setCurrentPage(index);
    };

    const handleNavigation = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
        } else {
            setCurrentPage((prev) => (prev + 1) % pages.length);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-30 blur-lg"></div>
            <div className="relative z-10">
                <Nav pages={pages.map(p => p.name)} onPageChange={handlePageChange} currentPage={currentPage}/>
                <div className="page-container pt-16 ">
                    {pages.map((page, index) => (
                        <div key={index} className={`page ${currentPage === index ? 'active' : ''}`}>
                            {React.cloneElement(page.component, {onPageChange: handleNavigation})}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;