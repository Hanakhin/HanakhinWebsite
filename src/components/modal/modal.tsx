import React, { useState, useRef, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    url: string;
    images: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, url, images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    if (!isOpen) return null;

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            if (containerRef.current?.requestFullscreen) {
                containerRef.current.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-4">{description}</p>
                <p className="mb-4">Github repo : <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{title}</a></p>
                {images && images.length > 0 && (
                    <div
                        ref={containerRef}
                        className={`relative ${isFullscreen ? 'w-screen h-screen' : 'w-full h-64'} mb-4`}
                    >
                        <img
                            ref={imageRef}
                            src={images[currentImageIndex]}
                            alt={`${title} image ${currentImageIndex + 1}`}
                            className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover'} rounded cursor-pointer`}
                            onClick={toggleFullScreen}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/path/to/fallback/image.jpg';
                            }}
                        />
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none hover:bg-blue-700 transition-colors"
                        >
                            &#8249;
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none hover:bg-blue-700 transition-colors"
                        >
                            &#8250;
                        </button>
                    </div>
                )}
                <p className="text-center">
                    Image {currentImageIndex + 1} sur {images.length}
                </p>
                <p className="text-center text-sm text-gray-500 mt-2">
                    Cliquez sur l'image pour passer en mode plein écran
                </p>
            </div>
        </div>
    );
}

export default Modal;