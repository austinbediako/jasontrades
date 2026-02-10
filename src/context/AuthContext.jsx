import React, { createContext, useContext, useState, useEffect } from 'react';
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
};
