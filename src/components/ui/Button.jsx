import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon,
    to,
    href,
    ...props
}) => {
    const baseClasses = "btn-monolith font-mono uppercase tracking-widest rounded-sm flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary hover:bg-primary-dark text-black shadow-[0_0_15px_rgba(204,255,0,0.2)]",
        outline: "bg-transparent border border-gray-600 hover:border-primary hover:text-primary text-white",
        ghost: "bg-transparent hover:text-primary text-gray-400"
    };

    const sizes = {
        sm: "px-5 py-2 text-xs",
        md: "px-8 py-4 text-sm",
        lg: "px-10 py-5 text-base"
    };

    const combinedClasses = `${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses} {...props}>
                {children}
                {icon && <span className="material-icons text-sm">{icon}</span>}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClasses} {...props}>
                {children}
                {icon && <span className="material-icons text-sm">{icon}</span>}
            </a>
        );
    }

    return (
        <button
            className={combinedClasses}
            {...props}
        >
            {children}
            {icon && <span className="material-icons text-sm">{icon}</span>}
        </button>
    );
};

export default Button;
