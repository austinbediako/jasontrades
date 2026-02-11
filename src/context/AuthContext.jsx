import React, { createContext, useContext, useState, useEffect } from 'react';
<<<<<<< HEAD
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
=======
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Simulate session check on load
    useEffect(() => {
        const checkSession = async () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        };
        checkSession();
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (email === "test@example.com" && password === "password") {
            const userData = { email, name: "Test User", role: "student" };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            setLoading(false);
            navigate('/dashboard');
            return { success: true };
        } else {
            setLoading(false);
            return { success: false, error: "Invalid credentials" };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/login');
    };

    const value = {
        user,
        loading,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05
};
