import React from 'react';
import { Link } from 'react-router-dom';
import Container from './ui/Container';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-border-dark pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-6 h-6 bg-primary flex items-center justify-center rounded-sm">
                                <span className="material-icons text-black text-xs">change_history</span>
                            </div>
                            <span className="font-display font-bold text-white uppercase text-sm">G.I.G.</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed font-mono">
                            Providing the infrastructure for faith-driven traders to excel in the global markets.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 font-display">Platform</h4>
                        <ul className="space-y-4 font-mono text-xs text-gray-400">
                            <li><Link className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" to="/mentorship">Course Curriculum</Link></li>
                            <li><Link className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" to="/journal">Trading Journal</Link></li>
                            <li><a className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" href="https://discord.com" target="_blank" rel="noopener noreferrer">Community Discord</a></li>
                            <li><Link className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" to="/resources">Resources</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 font-display">Company</h4>
                        <ul className="space-y-4 font-mono text-xs text-gray-400">
                            <li><Link className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" to="/about">About Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" to="/faith">Statement of Faith</Link></li>
                            <li><Link className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" to="/contact">Contact</Link></li>
                            <li><Link className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1" to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 font-display">Subscribe</h4>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input className="bg-surface-dark border border-border-dark text-white text-xs p-3 w-full focus:outline-none focus:border-primary font-mono placeholder-gray-600 rounded-l-sm" placeholder="ENTER EMAIL" type="email" aria-label="Email Address"/>
                            <button type="submit" className="bg-primary text-black px-4 rounded-r-sm hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Subscribe">
                                <span className="material-icons text-sm">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-[10px] font-mono uppercase tracking-wide">
                        © 2023 God is Glorified Trading. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wide">
                        "Whatever you do, work at it with all your heart." - Col 3:23
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
