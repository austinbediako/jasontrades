import React from 'react';

const TechnicalGrid = ({ className = '' }) => {
    return (
        <div className={`technical-grid opacity-20 pointer-events-none absolute inset-0 ${className}`}></div>
    );
};

export default TechnicalGrid;
