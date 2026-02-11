import { useState, useEffect } from 'react';
import { api } from '../data/mock';

export const useDashboardData = () => {
	const [data, setData] = useState({
		progress: [],
		stats: [],
		updates: []
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let mounted = true;

		const fetchData = async () => {
			try {
				setLoading(true);
				const result = await api.dashboard.getData();
				if (mounted) {
					setData(result);
					setError(null);
				}
			} catch (err) {
				if (mounted) {
					setError(err.message || 'Failed to load dashboard data');
				}
			} finally {
				if (mounted) {
					setLoading(false);
				}
			}
		};

		fetchData();

		return () => {
			mounted = false;
		};
	}, []);

	return { ...data, loading, error };
};
