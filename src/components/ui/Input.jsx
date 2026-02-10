import React, { useId } from 'react';

const Input = ({ label, type = "text", placeholder, className = "", id, ...props }) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div className="w-full">
            {label && <label htmlFor={inputId} className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">{label}</label>}
            <input
                id={inputId}
                type={type}
                className={`w-full bg-surface-dark border border-border-dark text-white p-3 text-sm focus:outline-none focus:border-primary font-mono placeholder-gray-600 rounded-sm transition-colors ${className}`}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;
