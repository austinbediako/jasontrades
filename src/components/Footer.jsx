import React from 'react';
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
                            <li><a className="hover:text-primary transition-colors" href="#">Course Curriculum</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Trading Journal</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Community Discord</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Resources</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 font-display">Company</h4>
                        <ul className="space-y-4 font-mono text-xs text-gray-400">
                            <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Statement of Faith</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 font-display">Subscribe</h4>
                        <div className="flex">
                            <input className="bg-surface-dark border border-border-dark text-white text-xs p-3 w-full focus:outline-none focus:border-primary font-mono placeholder-gray-600 rounded-l-sm" placeholder="ENTER EMAIL" type="email"/>
                            <button className="bg-primary text-black px-4 rounded-r-sm hover:bg-primary-dark transition-colors">
                                <span className="material-icons text-sm">arrow_forward</span>
                            </button>
                        </div>
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
