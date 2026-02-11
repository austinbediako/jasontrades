import React from 'react';
<<<<<<< HEAD
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MOCK_USER } from '../data/mock';

const ProtectedRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	// While loading, we can show a spinner or just nothing
	if (loading) {
		return (
			<div className="min-h-screen bg-background-dark flex items-center justify-center">
				<div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
			</div>
		);
	}

	if (!user) {
		// Redirect to login, saving the location they were trying to go to
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
=======
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-background-dark">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05
};

export default ProtectedRoute;
