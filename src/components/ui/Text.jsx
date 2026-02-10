import React from 'react';

const Text = ({ children, variant = "body", className = "", ...props }) => {
    const styles = {
        body: "text-gray-400 text-lg leading-relaxed",
        small: "text-gray-400 text-sm leading-relaxed",
        muted: "text-text-muted text-xs font-mono",
        primary: "text-primary font-mono text-xs uppercase tracking-wider",
        label: "text-gray-400 text-xs font-mono uppercase tracking-wider"
    };

    return (
        <p className={`${styles[variant]} ${className}`} {...props}>
            {children}
        </p>
    );
};

export default Text;
