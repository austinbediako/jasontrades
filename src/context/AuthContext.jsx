import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../data/mock';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const initAuth = async () => {
			try {
				setLoading(true);
				const user = await api.auth.getSession();
				if (user) {
					setUser(user);
				}
			} catch (err) {
				console.error('Session check failed', err);
				localStorage.removeItem('auth_token');
			} finally {
				setLoading(false);
			}
		};

		initAuth();
	}, []);

	const login = async (email, password) => {
		try {
			setLoading(true);
			setError(null);
			const response = await api.auth.login(email, password);
			localStorage.setItem('auth_token', response.token);
			setUser(response.user);
			return true;
		} catch (err) {
			setError(err.message || 'Login failed');
			return false;
		} finally {
			setLoading(false);
		}
	};

	const logout = async () => {
		try {
			setLoading(true);
			await api.auth.logout();
			localStorage.removeItem('auth_token');
			setUser(null);
		} catch (err) {
			console.error('Logout failed', err);
		} finally {
			setLoading(false);
		}
	};

	const value = {
		user,
		loading,
		error,
		login,
		logout,
		isAuthenticated: !!user,
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
