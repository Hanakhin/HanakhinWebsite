import React, { useState, useRef } from 'react';

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
    const imageRef = useRef<HTMLImageElement>(null);

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
            if (imageRef.current?.requestFullscreen) {
                imageRef.current.requestFullscreen();
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
                    <div className="relative w-full h-64 mb-4">
                        <img
                            ref={imageRef}
                            src={images[currentImageIndex]}
                            alt={`${title} image ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover rounded cursor-pointer"
                            onClick={toggleFullScreen}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/path/to/fallback/image.jpg';
                            }}
                        />
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
                        >
                            &#8249;
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
                        >
                            &#8250;
                        </button>
                    </div>
                )}
                <p className="text-center">
                    Image {currentImageIndex + 1} of {images.length}
                </p>
                <p className="text-center text-sm text-gray-500 mt-2">
                    Cliquez sur l'image pour passer en mode plein écran
                </p>
            </div>
        </div>
    );
}

export default Modal;