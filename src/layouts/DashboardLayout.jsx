import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

const DashboardLayout = ({ children }) => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleLogout = async () => {
		await logout();
		navigate('/login');
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<div className="min-h-screen bg-background-dark text-white font-display flex relative overflow-hidden">
			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm transition-opacity"
					onClick={closeMobileMenu}
				/>
			)}

			{/* Sidebar - Fixed on desktop, slide-in on mobile */}
			<aside className={`
				fixed inset-y-0 left-0 z-50 w-64 bg-surface-dark border-r border-border-dark flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen
				${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
			`}>
				<div className="p-6 border-b border-border-dark flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent opacity-80" />
						<span className="font-mono font-bold tracking-widest text-lg">COVENANT</span>
					</div>
					<button onClick={closeMobileMenu} className="lg:hidden text-gray-400 hover:text-white">
						<span className="material-icons">close</span>
					</button>
				</div>

				<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
					<div onClick={closeMobileMenu}>
						<NavItem to="/dashboard" icon="dashboard" label="Dashboard" />
					</div>
					<div onClick={closeMobileMenu}>
						<NavItem to="/journal" icon="edit_note" label="Trading Journal" />
					</div>
					<div onClick={closeMobileMenu}>
						<NavItem to="/mentorship" icon="school" label="Curriculum" />
					</div>
					<div onClick={closeMobileMenu}>
						<NavItem to="/resources" icon="library_books" label="Resources" />
					</div>
					<div className="pt-6 mt-6 border-t border-border-dark">
						<h3 className="px-3 text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Community</h3>
						<div onClick={closeMobileMenu}>
							<NavItem to="/protocol" icon="gavel" label="Protocol" />
						</div>
						<NavItem href="#" icon="forum" label="Discord" external />
					</div>
				</nav>

				<div className="p-4 border-t border-border-dark">
					<div className="flex items-center gap-3 mb-4 px-2">
						<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-mono">
							{user?.name?.charAt(0) || 'J'}
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium truncate">{user?.name || 'Student'}</p>
							<p className="text-xs text-gray-500 truncate">{user?.cohort || 'Member'}</p>
						</div>
					</div>
					<button
						onClick={handleLogout}
						className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors w-full px-2 py-2 rounded-sm hover:bg-white/5"
					>
						<span className="material-icons text-sm">logout</span>
						Sign Out
					</button>
				</div>
			</aside>

			{/* Mobile Header & Main Content */}
			<div className="flex-1 flex flex-col min-w-0 lg:ml-0 relative">
				{/* Mobile Header */}
				<header className="lg:hidden h-16 border-b border-border-dark bg-background-dark flex items-center justify-between px-4 sticky top-0 z-30">
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-accent opacity-80" />
						<span className="font-mono font-bold tracking-widest">COVENANT</span>
					</div>
					<button onClick={toggleMobileMenu} className="p-2 text-gray-400 hover:text-white">
						<span className="material-icons">menu</span>
					</button>
				</header>

				<main className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full overflow-x-hidden">
					{children}
				</main>
			</div>
		</div>
	);
};

const NavItem = ({ to, href, icon, label, external }) => {
	const baseClasses = "flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors duration-200 group";
	const activeClasses = "bg-primary/10 text-primary border-r-2 border-primary";
	const inactiveClasses = "text-gray-400 hover:text-white hover:bg-white/5";

	if (external) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${inactiveClasses}`}>
				<span className="material-icons text-lg group-hover:text-white transition-colors">{icon}</span>
				{label}
				<span className="material-icons text-xs ml-auto opacity-50">open_in_new</span>
			</a>
		);
	}

	return (
		<NavLink
			to={to}
			className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
		>
			<span className="material-icons text-lg group-hover:text-primary transition-colors">{icon}</span>
			{label}
		</NavLink>
	);
};

export default DashboardLayout;
