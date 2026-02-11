import React, { useState } from 'react';
<<<<<<< HEAD
import { useJournal } from '../hooks/useJournal';
import { useToast } from '../context/ToastContext';
=======
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
<<<<<<< HEAD
import Card from '../components/ui/Card';

const Journal = () => {
    const { entries, loading, error, addEntry } = useJournal();
    const { addToast } = useToast();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        pair: '',
        direction: 'Long',
        result: '',
        rr: '',
        note: '',
        emotional: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await addEntry(formData);
        if (success) {
            setShowForm(false);
            setFormData({
                date: new Date().toISOString().split('T')[0],
                pair: '',
                direction: 'Long',
                result: '',
                rr: '',
                note: '',
                emotional: ''
            });
            addToast("Journal entry recorded.", 'success');
        } else {
            addToast("Failed to save entry.", 'error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (loading && entries.length === 0) {
        return (
            <Section className="min-h-screen pt-10">
                <Container>
                    <div className="animate-pulse space-y-4">
                        <div className="h-12 bg-white/5 rounded-sm w-1/3"></div>
                        <div className="h-64 bg-white/5 rounded-sm"></div>
                    </div>
                </Container>
            </Section>
        );
    }

    return (
        <Section className="min-h-screen pt-10 pb-20">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Performance Tracking</span>
                        <Heading level={1}>Trading Journal</Heading>
                    </div>
                    <Button onClick={() => setShowForm(!showForm)} variant="primary" icon={showForm ? 'close' : 'add'}>
                        {showForm ? 'Cancel Entry' : 'Log New Trade'}
                    </Button>
                </div>

                {/* Entry Form */}
                {showForm && (
                    <div className="mb-10 bg-surface-dark border border-border-dark p-6 rounded-sm animate-fade-in-down">
                        <Heading level={3} className="mb-4">New Journal Entry</Heading>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label="Date" type="date" name="date" value={formData.date} onChange={handleChange} required />
                                <Input label="Pair" name="pair" placeholder="EUR/USD" value={formData.pair} onChange={handleChange} required />

                                <div className="space-y-1">
                                    <label className="block text-xs font-mono uppercase text-gray-500 tracking-wider">Direction</label>
                                    <select name="direction" value={formData.direction} onChange={handleChange} className="w-full bg-background-dark border border-border-dark rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm font-mono">
                                        <option value="Long">Long</option>
                                        <option value="Short">Short</option>
                                    </select>
                                </div>

                                <Input label="Result (Win/Loss/BE)" name="result" placeholder="Win" value={formData.result} onChange={handleChange} required />
                                <Input label="R:R" name="rr" placeholder="1:3" value={formData.rr} onChange={handleChange} />
                                <Input label="Emotional State" name="emotional" placeholder="Calm, Anxious..." value={formData.emotional} onChange={handleChange} />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-mono uppercase text-gray-500 tracking-wider">Notes / Analysis</label>
                                <textarea
                                    name="note"
                                    value={formData.note}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full bg-background-dark border border-border-dark rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm font-sans"
                                    placeholder="Describe your entry..."
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end pt-2">
                                <Button type="submit" variant="primary" disabled={loading}>
                                    {loading ? 'Saving...' : 'Save Entry'}
                                </Button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Entries List */}
                <div className="space-y-4">
                    {entries.length === 0 ? (
                        <div className="text-center py-20 border border-dashed border-gray-800 rounded-sm">
                            <span className="material-icons text-gray-600 text-4xl mb-2">edit_note</span>
                            <Text className="text-gray-500">No journal entries yet. Start logging your trades.</Text>
                        </div>
                    ) : (
                        entries.map((entry) => (
                            <div key={entry.id} className="bg-surface-dark border border-border-dark rounded-sm p-6 hover:border-gray-600 transition-colors">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="font-mono text-xs text-white bg-background-dark border border-border-dark px-3 py-1 rounded-sm">{entry.date}</span>
                                    <span className="font-mono text-xs text-primary font-bold">{entry.pair}</span>
                                    <span className={`font-mono text-xs px-2 py-0.5 rounded-sm ${entry.direction === 'Long' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                        {entry.direction}
                                    </span>
                                    <span className={`font-mono text-xs px-3 py-1 rounded-sm ${entry.result === 'Win' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                        entry.result === 'Loss' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                                            'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                                        }`}>{entry.result}</span>
                                    {entry.rr && (
                                        <span className="font-mono text-xs text-gray-400 ml-auto">{entry.rr} R:R</span>
                                    )}
                                </div>
                                <Text variant="small" className="mb-3 text-gray-300">{entry.note}</Text>
                                <div className="border-t border-border-dark pt-3 mt-3 flex justify-between items-center text-xs font-mono text-gray-500">
                                    <span>{entry.emotional}</span>
                                    <Button variant="ghost" className="text-xs px-2 py-1 h-auto min-h-0 text-gray-500 hover:text-white">EDIT</Button>
=======
import Select from '../components/ui/Select';
import ProtectedRoute from '../components/ProtectedRoute';
import { useData } from '../context/DataContext';

const Journal = () => {
    const { journalEntries, addJournalEntry, loading } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [newEntry, setNewEntry] = useState({
        pair: '',
        direction: 'Long',
        result: 'Win',
        pnl: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEntry(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addJournalEntry({
            ...newEntry,
            pnl: parseFloat(newEntry.pnl)
        });
        setIsAdding(false);
        setNewEntry({
            pair: '',
            direction: 'Long',
            result: 'Win',
            pnl: '',
            notes: ''
        });
    };

    if (loading) {
        return (
            <Section className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </Section>
        );
    }

    return (
        <ProtectedRoute>
            <Section className="min-h-screen bg-background-dark py-12">
                <Container>
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <Heading level={2} className="mb-2">Trading Journal</Heading>
                            <Text variant="muted">Track your execution and refine your edge.</Text>
                        </div>
                        <Button
                            variant={isAdding ? "outline" : "primary"}
                            onClick={() => setIsAdding(!isAdding)}
                            icon={isAdding ? "close" : "add"}
                        >
                            {isAdding ? "Cancel" : "Log New Trade"}
                        </Button>
                    </div>

                    {isAdding && (
                        <Card className="mb-8 animate-fadeIn">
                            <Heading level={4} className="mb-6 border-b border-border-dark pb-4">New Entry Details</Heading>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="Asset Pair"
                                        name="pair"
                                        placeholder="e.g. EURUSD"
                                        value={newEntry.pair}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Select
                                        label="Direction"
                                        name="direction"
                                        options={[
                                            { value: 'Long', label: 'Long' },
                                            { value: 'Short', label: 'Short' }
                                        ]}
                                        value={newEntry.direction}
                                        onChange={handleChange}
                                    />
                                    <Select
                                        label="Outcome"
                                        name="result"
                                        options={[
                                            { value: 'Win', label: 'Win' },
                                            { value: 'Loss', label: 'Loss' },
                                            { value: 'BE', label: 'Break Even' }
                                        ]}
                                        value={newEntry.result}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="P&L (R-Multiple)"
                                        name="pnl"
                                        type="number"
                                        step="0.1"
                                        placeholder="e.g. 2.5"
                                        value={newEntry.pnl}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Trade Notes</label>
                                    <textarea
                                        name="notes"
                                        rows="4"
                                        className="w-full bg-surface-dark border border-border-dark text-white p-3 text-sm focus:outline-none focus:border-primary font-mono placeholder-gray-600 rounded-sm transition-colors resize-none"
                                        placeholder="Describe your execution, emotions, and technicals..."
                                        value={newEntry.notes}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <Button type="submit" variant="primary">Save Entry</Button>
                                </div>
                            </form>
                        </Card>
                    )}

                    <div className="space-y-4">
                        {journalEntries.length > 0 ? (
                            journalEntries.map((entry) => (
                                <Card key={entry.id} className="group hover:border-primary/30 transition-colors">
                                    <div className="flex flex-col md:flex-row justify-between gap-4">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="font-bold text-white text-lg">{entry.pair}</span>
                                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-sm uppercase tracking-wider ${entry.direction === 'Long' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>{entry.direction}</span>
                                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-sm uppercase tracking-wider ${entry.result === 'Win' ? 'bg-primary/10 text-primary' : entry.result === 'Loss' ? 'bg-red-500/10 text-red-500' : 'bg-gray-500/10 text-gray-400'}`}>{entry.result}</span>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-3">{entry.notes}</p>
                                            <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                                                <span className="flex items-center gap-1"><span className="material-icons text-[10px]">calendar_today</span> {entry.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-center min-w-[100px] border-l border-border-dark pl-6">
                                            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">Result</span>
                                            <span className={`font-display font-bold text-2xl ${entry.pnl > 0 ? 'text-primary' : entry.pnl < 0 ? 'text-red-500' : 'text-gray-400'}`}>
                                                {entry.pnl > 0 ? '+' : ''}{entry.pnl}R
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-surface-dark border border-border-dark rounded-sm border-dashed">
                                <div className="w-16 h-16 bg-background-dark rounded-full flex items-center justify-center mx-auto mb-4 border border-border-dark">
                                    <span className="material-icons text-gray-600">edit_note</span>
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Your Journal is Empty</h3>
                                <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">Start tracking your trades to identify patterns and improve your performance.</p>
                                <Button variant="primary" onClick={() => setIsAdding(true)}>Log First Trade</Button>
                            </div>
<<<<<<< HEAD
                        ))
                    )}
                </div>
            </Container>
        </Section>
=======
                        )}
                    </div>
                </Container>
            </Section>
        </ProtectedRoute>
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05
    );
};

export default Journal;
