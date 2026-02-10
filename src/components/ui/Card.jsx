import React from 'react';

const Card = ({ children, className = "", hover = false, ...props }) => {
    return (
        <div
            className={`
                bg-background-dark border border-border-dark p-6 rounded-sm
                ${hover ? 'hover:border-primary/50 transition-colors' : ''}
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
