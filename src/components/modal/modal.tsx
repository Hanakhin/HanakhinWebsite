import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    url:string;

}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description,url }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p>{description}</p>
                <p>Github repo : <a href={url} target={"_blank"} className={"hover:text-blue-500"}>{title}</a></p>
            </div>
        </div>
    );
}

export default Modal;