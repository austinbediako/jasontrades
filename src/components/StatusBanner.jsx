import React from 'react';

const StatusBanner = () => {
    return (
        <div className="bg-black/40 border-b border-border-dark py-1.5 px-4 overflow-hidden whitespace-nowrap">
            <div className="flex items-center justify-between text-[10px] md:text-xs font-mono tracking-widest text-text-muted uppercase">
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    System Status: Active
                </span>
                <div className="flex gap-6">
                    <span>BTC/USD <span className="text-primary">+1.2%</span></span>
                    <span>XAU/USD <span className="text-red-400">-0.4%</span></span>
                    <span>ES1! <span className="text-primary">+0.8%</span></span>
                    <span className="text-primary hidden md:inline">Cohort #14: OPEN</span>
                </div>
            </div>
        </div>
    );
};

export default StatusBanner;
