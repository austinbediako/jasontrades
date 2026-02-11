import { useState, useEffect } from 'react';
import { api } from '../data/mock';

export const useJournal = () => {
	const [entries, setEntries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchEntries = async () => {
			try {
				setLoading(true);
				const data = await api.journal.getEntries();
				setEntries(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchEntries();
	}, []);

	const addEntry = async (entryData) => {
		try {
			setLoading(true);
			const newEntry = await api.journal.addEntry(entryData);
			setEntries([newEntry, ...entries]);
			return true;
		} catch (err) {
			setError(err.message);
			return false;
		} finally {
			setLoading(false);
		}
	};

	return { entries, loading, error, addEntry };
};
