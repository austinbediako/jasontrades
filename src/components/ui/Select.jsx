import React from 'react';

const Select = ({ label, options, className = "", ...props }) => {
    return (
        <div className="w-full">
            {label && <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">{label}</label>}
            <select
                className={`w-full bg-surface-dark border border-border-dark text-white p-3 text-sm focus:outline-none focus:border-primary font-mono placeholder-gray-600 rounded-sm transition-colors appearance-none ${className}`}
                {...props}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
