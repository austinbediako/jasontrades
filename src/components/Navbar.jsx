import React from 'react';
import Button from './ui/Button';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-sm border-b border-border-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                            <span className="material-icons text-black text-lg">change_history</span>
                        </div>
                        <span className="font-display font-bold text-lg tracking-tight text-white uppercase">God Is Glorified</span>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center font-mono text-xs uppercase tracking-wider">
                        <a className="nav-link text-gray-400 hover:text-primary transition-colors" href="#">Manifesto</a>
                        <a className="nav-link text-gray-400 hover:text-primary transition-colors" href="#">The Protocol</a>
                        <a className="nav-link text-gray-400 hover:text-primary transition-colors" href="#">Testimonies</a>
                        <a href="#" className="btn-monolith bg-surface-dark border border-border-dark hover:border-primary text-white px-5 py-2 rounded-sm transition-colors">
                            Member Access
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-300 hover:text-primary">
                            <span className="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
