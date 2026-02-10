import React from 'react';

const Section = ({
    children,
    className = '',
    id = '',
    dark = true
}) => {
    return (
        <section
            id={id}
            className={`py-20 px-4 sm:px-6 lg:px-8 border-b border-border-dark ${dark ? 'bg-background-dark' : 'bg-surface-dark'} ${className}`}
        >
            {children}
        </section>
    );
};

export default Section;
