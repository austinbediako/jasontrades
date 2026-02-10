import React from 'react';

const Input = ({ label, type = "text", placeholder, className = "", ...props }) => {
    return (
        <div className="w-full">
            {label && <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">{label}</label>}
            <input
                type={type}
                className={`w-full bg-surface-dark border border-border-dark text-white p-3 text-sm focus:outline-none focus:border-primary font-mono placeholder-gray-600 rounded-sm transition-colors ${className}`}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;
