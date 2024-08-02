import React from 'react';

const NavButton: React.FC<{ onPageChange: (direction: 'prev' | 'next') => void }> = ({ onPageChange }) => (
    <div className="flex justify-center mt-4 mb-8">
        <button
            onClick={() => onPageChange('prev')}
            className="mr-2 w-10 h-10 rounded-full bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
        >
            ←
        </button>
        <button
            onClick={() => onPageChange('next')}
            className="ml-2 w-10 h-10 rounded-full bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
        >
            →
        </button>
    </div>
);

export default NavButton;