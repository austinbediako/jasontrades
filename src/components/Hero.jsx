import React from 'react';
import Button from './ui/Button';
import TechnicalGrid from './ui/TechnicalGrid';

const Hero = () => {
    return (
        <div className="relative min-h-[85vh] flex items-center border-b border-border-dark bg-background-dark overflow-hidden">
            <TechnicalGrid />
            <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-border-dark bg-surface-dark/10 hidden lg:block">
                <div className="h-full w-full flex flex-col justify-center items-center opacity-20">
                    <div className="w-64 h-64 border border-primary/20 rounded-full flex items-center justify-center">
                        <div className="w-48 h-48 border border-primary/30 rounded-full flex items-center justify-center">
                            <div className="w-32 h-32 border border-primary/50 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-12 pb-20">
                <div className="lg:w-2/3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-sm mb-6">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-primary font-mono text-xs uppercase tracking-wider">Cohort 04 Enrolling Now</span>
                    </div>
                    <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-tight text-white mb-6 tracking-tight">
                        DISCIPLINE.<br/>
                        REVERENCE.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#88ff00]">MASTERY.</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed border-l-2 border-primary pl-6">
                        We do not gamble. We execute. A faith-guided approach to high-probability trading where capital is sacred and process is king.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="primary" icon="arrow_forward">
                            Initialize Application
                        </Button>
                        <Button variant="outline">
                            View The Syllabus
                        </Button>
                    </div>
                    <div className="mt-16 flex items-center gap-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
                        <div>
                            <span className="block text-white text-lg font-bold">1.4k+</span>
                            Students
                        </div>
                        <div className="w-px h-8 bg-border-dark"></div>
                        <div>
                            <span className="block text-white text-lg font-bold">1:3</span>
                            Min RR
                        </div>
                        <div className="w-px h-8 bg-border-dark"></div>
                        <div>
                            <span className="block text-white text-lg font-bold">0%</span>
                            Gambling
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
