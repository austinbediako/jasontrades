import React from 'react';

const Heading = ({ children, level = 2, className = "", ...props }) => {
    const Tag = `h${level}`;

    const styles = {
        1: "font-display font-extrabold text-5xl md:text-7xl leading-tight tracking-tight",
        2: "font-display font-bold text-3xl md:text-4xl",
        3: "font-display font-bold text-xl",
        4: "font-mono font-bold uppercase tracking-wide text-sm md:text-base",
        5: "font-bold text-sm",
        6: "font-bold text-xs"
    };

    return (
        <Tag className={`text-white ${styles[level]} ${className}`} {...props}>
            {children}
        </Tag>
    );
};

export default Heading;
