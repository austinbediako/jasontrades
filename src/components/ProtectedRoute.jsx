import React from 'react';
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
};

export default ProtectedRoute;
