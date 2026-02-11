import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-sm border-b border-border-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                                <span className="material-icons text-black text-lg">change_history</span>
                            </div>
                            <span className="font-display font-bold text-lg tracking-tight text-white uppercase">God Is Glorified</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center font-mono text-xs uppercase tracking-wider">
                        <Link className="nav-link text-gray-400 hover:text-primary transition-colors" to="/manifesto">Manifesto</Link>
                        <Link className="nav-link text-gray-400 hover:text-primary transition-colors" to="/protocol">The Protocol</Link>
                        <Link className="nav-link text-gray-400 hover:text-primary transition-colors" to="/testimonies">Testimonies</Link>

                        {user ? (
                            <div className="flex items-center gap-6 ml-4">
                                <Link className="nav-link text-gray-400 hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
                                <button onClick={logout} className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-1">LOGOUT</button>
                            </div>
                        ) : (
                            <Button to="/login" variant="outline" size="sm">Member Access</Button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-300 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-1"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background-dark border-b border-border-dark shadow-xl animate-fade-in-down">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                        <Link
                            className="block w-full text-center py-3 text-gray-400 hover:text-primary hover:bg-surface-dark transition-colors font-mono text-sm uppercase tracking-wider"
                            to="/manifesto"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Manifesto
                        </Link>
                        <Link
                            className="block w-full text-center py-3 text-gray-400 hover:text-primary hover:bg-surface-dark transition-colors font-mono text-sm uppercase tracking-wider"
                            to="/protocol"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            The Protocol
                        </Link>
                        <Link
                            className="block w-full text-center py-3 text-gray-400 hover:text-primary hover:bg-surface-dark transition-colors font-mono text-sm uppercase tracking-wider"
                            to="/testimonies"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Testimonies
                        </Link>
                        <div className="pt-4 w-full px-8">
                            {user ? (
                                <div className="space-y-4">
                                    <Button to="/dashboard" variant="primary" className="w-full justify-center" onClick={() => setIsMenuOpen(false)}>Dashboard</Button>
                                    <button
                                        onClick={() => { logout(); setIsMenuOpen(false); }}
                                        className="block w-full text-center py-3 text-gray-400 hover:text-white uppercase tracking-wider font-mono text-sm border border-border-dark rounded-sm hover:border-white transition-colors"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Button to="/login" variant="outline" className="w-full justify-center" onClick={() => setIsMenuOpen(false)}>Member Access</Button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
