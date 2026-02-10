import React from 'react';

const Section = ({
    children,
    className = '',
    id = '',
    variant = 'default', // default, surface, primary, black
    dark // deprecated, maps to variant
}) => {

    let activeVariant = variant;
    if (dark === false) activeVariant = 'surface';
    if (dark === true) activeVariant = 'default';

    const variants = {
        default: 'bg-background-dark',
        surface: 'bg-surface-dark',
        primary: 'bg-primary',
        black: 'bg-black'
    };

    return (
        <section
            id={id}
            className={`py-section-y px-4 sm:px-6 lg:px-8 border-b border-border-dark ${variants[activeVariant] || variants.default} ${className}`}
        >
            {children}
        </section>
    );
};

export default Section;
