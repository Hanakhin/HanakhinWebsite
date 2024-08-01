import React from 'react';

const Wrapper: React.FC = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-30 blur-lg"></div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export default Wrapper;