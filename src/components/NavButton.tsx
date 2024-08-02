import React from 'react';

interface NavButtonProps {
    onPageChange: (direction: 'prev' | 'next') => void;
    prevLabel?: string;
    nextLabel?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
                                                 onPageChange,
                                                 prevLabel = 'Page précédente',
                                                 nextLabel = 'Page suivante'
                                             }) => (
    <div className="flex justify-center mt-8 mb-8 space-x-4">
        <button
            onClick={() => onPageChange('prev')}
            className="nav-button prev-button"
            aria-label={prevLabel}
        >
            <span className="sr-only">{prevLabel}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button
            onClick={() => onPageChange('next')}
            className="nav-button next-button"
            aria-label={nextLabel}
        >
            <span className="sr-only">{nextLabel}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
);

export default NavButton;