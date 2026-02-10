import React from 'react';

const stats = [
    { value: '87%', label: 'Retention Rate' },
    { value: '$2.4M', label: 'Funded Capital' },
    { value: '450+', label: 'Active Members' },
    { value: '12', label: 'Countries' },
];

const Stats = () => {
    return (
        <div className="bg-primary/5 border-y border-primary/20 py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex flex-col md:flex-row gap-12 w-full justify-center text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <span className="block text-3xl font-mono font-bold text-white">{stat.value}</span>
                            <span className="text-xs uppercase tracking-widest text-primary font-bold">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
