import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [journalEntries, setJournalEntries] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [progress, setProgress] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Mock API delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Mock Data
                setUser({
                    id: 1,
                    name: "Test User",
                    email: "test@example.com",
                    cohort: "Cohort 04",
                    joinedDate: "2023-09-01",
                    status: "Active"
                });

                setJournalEntries([
                    {
                        id: 1,
                        date: "2023-10-24",
                        pair: "EURUSD",
                        direction: "Long",
                        result: "Win",
                        pnl: 2.5,
                        notes: "Followed the plan perfectly. Entry on retest of support."
                    },
                    {
                        id: 2,
                        date: "2023-10-25",
                        pair: "GBPUSD",
                        direction: "Short",
                        result: "Loss",
                        pnl: -1.0,
                        notes: "Entered too early, didn't wait for confirmation candle."
                    }
                ]);

                setAnnouncements([
                    {
                        id: 1,
                        date: "2023-10-20",
                        title: "Weekly Strategy Call",
                        content: "Join us this Sunday at 8PM EST for a review of the week's price action."
                    },
                    {
                        id: 2,
                        date: "2023-10-15",
                        title: "New Module Released",
                        content: "The 'Advanced Liquidity Concepts' module is now available in the curriculum."
                    }
                ]);

                setProgress({
                    completedModules: 4,
                    totalModules: 12,
                    currentModule: "Market Structure 2.0"
                });

            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const addJournalEntry = (entry) => {
        const newEntry = {
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            ...entry
        };
        setJournalEntries(prev => [newEntry, ...prev]);
    };

    const value = {
        loading,
        user,
        journalEntries,
        announcements,
        progress,
        addJournalEntry
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
