import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    icon,
    ...props
}) => {
    const baseClasses = "btn-monolith font-mono text-sm uppercase tracking-widest px-8 py-4 rounded-sm flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary hover:bg-primary-dark text-black shadow-[0_0_15px_rgba(204,255,0,0.2)]",
        outline: "bg-transparent border border-gray-600 hover:border-primary hover:text-primary text-white",
        ghost: "bg-transparent hover:text-primary text-gray-400"
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {icon && <span className="material-icons text-sm">{icon}</span>}
        </button>
    );
};

export default Button;
