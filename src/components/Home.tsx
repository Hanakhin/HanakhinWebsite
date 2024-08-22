import React, { useEffect, useRef } from 'react';
import { FaFileDownload, FaArrowRight } from 'react-icons/fa';
import * as THREE from 'three';

interface HomeProps {
    onPageChange: (index: number) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Set up scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            transparent: true,
            opacity: 0.7,
            color: 0xffffff,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 5;

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            particlesMesh.rotation.y += 0.002;
            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    const handleOpenPDF = () => {
        const pdfUrl = '/PortfolioSerious/ressources/Hanakhin cv 25ans .pdf';
        window.open(pdfUrl, '_blank');
    };

    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-30 blur-lg"></div>
            <div ref={mountRef} className="absolute inset-0"></div>
            <div className="relative z-10 text-center p-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold mb-4 text-black ">Bonjour, je suis Hanakhin</h1>
                <p className="text-lg mb-8 text-black">Bienvenue sur mon site web !</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => onPageChange(1)}
                        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-black px-6 py-3 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 hover:border-opacity-50 transition duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105"
                    >
                        Commencer !
                        <FaArrowRight className="ml-2" />
                    </button>
                    <button
                        onClick={handleOpenPDF}
                        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-black px-6 py-3 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 hover:border-opacity-50 transition duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105"
                    >
                        Voir le CV
                        <FaFileDownload className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;