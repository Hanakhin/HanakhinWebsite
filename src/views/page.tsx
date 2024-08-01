import React, { useState } from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Home from "../components/Home";
import Wrapper from '../components/Wrapper.tsx'
import Me from "../components/Me.tsx";

const pages = [
    { name: "Home", component: <Home /> },
   // { name: "À propos", component: <About /> },
    { name: "Projets", component: <Projects /> },
    { name: "Compétences", component: <Skills /> },
    { name: "Contact", component: <Contact /> },
    {name: "Me", component: <Me/>}
];

const Page: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const handlePageChange = (index: number) => {
        setCurrentPage(index);
    };

    return (
        <Wrapper>
            <Nav pages={pages.map(p => p.name)} onPageChange={handlePageChange} currentPage={currentPage} />
            <div className="page-container pt-16">
                {pages.map((page, index) => (
                    <div key={index} className={`page ${currentPage === index ? 'active' : ''}`}>
                        {React.cloneElement(page.component, { onPageChange: handlePageChange })}
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}

export default Page;