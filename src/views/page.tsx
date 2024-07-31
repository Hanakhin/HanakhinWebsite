import React, { useState } from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Home from "../components/Home.tsx";

const pages = [
    { name: "Home", component: <Home /> },
    { name: "À propos", component: <About /> },
    { name: "Projets", component: <Projects /> },
    { name: "Compétences", component: <Skills /> },
    { name: "Contact", component: <Contact /> },
];

const Page: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const handlePageChange = (index: number) => {
        setCurrentPage(index);
    };

    return (
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen relative overflow-hidden">
            <Nav pages={pages.map(p => p.name)} onPageChange={handlePageChange} currentPage={currentPage} />
            <div className="page-container pt-16">
                {pages.map((page, index) => (
                    <div key={index} className={`page ${currentPage === index ? 'active' : ''}`}>
                        {page.component}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;