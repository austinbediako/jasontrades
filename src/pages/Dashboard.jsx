import React from 'react';
<<<<<<< HEAD
import { useAuth } from '../context/AuthContext';
import { useDashboardData } from '../hooks/useDashboardData';
=======
import { Link } from 'react-router-dom';
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
<<<<<<< HEAD
import TechnicalGrid from '../components/ui/TechnicalGrid';

const Dashboard = () => {
	const { user } = useAuth();
	const { progress, stats, updates, loading, error } = useDashboardData();

	if (loading) {
		return (
			<Section className="min-h-screen pt-32">
				<Container>
					<div className="animate-pulse space-y-8">
						<div className="h-40 bg-white/5 rounded-sm"></div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<div className="lg:col-span-2 h-96 bg-white/5 rounded-sm"></div>
							<div className="h-96 bg-white/5 rounded-sm"></div>
						</div>
					</div>
				</Container>
			</Section>
		);
	}

	if (error) {
		return (
			<Section className="min-h-screen pt-32">
				<Container>
					<div className="p-6 border border-red-500/50 bg-red-500/10 rounded-sm text-center">
						<Heading level={3} className="text-red-400 mb-2">Error Loading Dashboard</Heading>
						<Text>{error}</Text>
						<Button onClick={() => window.location.reload()} variant="outline" className="mt-4">Retry</Button>
					</div>
				</Container>
			</Section>
		);
	}

	return (
		<>
			{/* Header */}
			<Section className="relative overflow-hidden pt-10 pb-10 border-b border-border-dark">
				<TechnicalGrid />
				<Container className="relative z-10">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
						<div>
							<span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Student Portal</span>
							<Heading level={1} className="text-3xl md:text-4xl">Welcome back, {user?.name?.split(' ')[0]}</Heading>
							<Text variant="small" className="text-gray-400 mt-2">Current Cohort: <span className="text-white">{user?.cohort || 'N/A'}</span></Text>
						</div>
						<div className="flex gap-4">
							<Button to="/journal" variant="outline" icon="edit_note">Log Trade</Button>
							<Button to="/mentorship" variant="primary" icon="play_arrow">Resume Learning</Button>
						</div>
					</div>
				</Container>
			</Section>

			{/* Content Grid */}
			<Section variant="surface" className="flex-grow">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

						{/* Main Column: Progress */}
						<div className="lg:col-span-2 space-y-8">
							<div className="bg-background-dark border border-border-dark rounded-sm p-6">
								<div className="flex items-center justify-between mb-6">
									<Heading level={3}>Curriculum Progress</Heading>
									<span className="font-mono text-xs text-primary">
										{Math.round(progress.reduce((acc, curr) => acc + (curr.status === 'Completed' ? 1 : 0), 0) / progress.length * 100)}% Complete
									</span>
								</div>
								<div className="space-y-4">
									{progress.length === 0 ? (
										<Text className="text-gray-500 italic">No modules assigned.</Text>
									) : (
										progress.map((item, index) => (
											<div key={index} className="flex items-center justify-between p-4 bg-surface-dark/50 border border-border-dark rounded-sm hover:border-primary/30 transition-colors cursor-pointer group">
												<div className="flex items-center gap-4">
													<div className={`w-8 h-8 rounded-sm flex items-center justify-center font-mono text-xs border ${item.status === 'Completed' ? 'bg-primary/10 border-primary text-primary' :
														item.status === 'In Progress' ? 'bg-white/10 border-white/20 text-white' :
															'bg-transparent border-gray-700 text-gray-600'
														}`}>
														{item.status === 'Completed' ? '✓' : item.module}
													</div>
													<div>
														<span className={`block font-display text-sm font-semibold ${item.status === 'Locked' ? 'text-gray-500' : 'text-white'}`}>
															{item.title}
														</span>
														<span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">{item.status}</span>
													</div>
												</div>
												{item.status !== 'Locked' && (
													<span className="opacity-0 group-hover:opacity-100 transition-opacity material-icons text-primary text-sm">arrow_forward</span>
												)}
											</div>
										))
									)}
								</div>
							</div>

							<div className="bg-background-dark border border-border-dark rounded-sm p-6">
								<Heading level={3} className="mb-6">Latest Community Updates</Heading>
								<div className="space-y-4">
									{updates.length === 0 ? (
										<Text className="text-gray-500 italic">No updates available.</Text>
									) : (
										updates.map((update) => (
											<div key={update.id} className={`p-4 border-l-2 ${update.type === 'announcement' ? 'border-primary' : 'border-gray-600'} bg-surface-dark/30`}>
												<span className={`font-mono text-[10px] ${update.type === 'announcement' ? 'text-primary' : 'text-gray-400'} uppercase mb-1 block`}>
													{update.type} • {new Date(update.timestamp).toLocaleDateString()}
												</span>
												<Text variant="small" className="text-white">{update.content}</Text>
											</div>
										))
									)}
								</div>
							</div>
						</div>

						{/* Sidebar: Stats & Quick Links */}
						<div className="space-y-8">
							<div className="bg-background-dark border border-border-dark rounded-sm p-6">
								<Heading level={3} className="mb-6">Performance</Heading>
								<div className="grid grid-cols-1 gap-4">
									{stats.map((stat, index) => (
										<div key={index} className="flex justify-between items-center p-3 border-b border-border-dark last:border-0">
											<span className="text-sm text-gray-400">{stat.label}</span>
											<div className="text-right">
												<span className="font-mono text-primary block">{stat.value}</span>
												{stat.trend && (
													<span className={`text-[10px] font-mono ${stat.trendDirection === 'up' ? 'text-green-500' :
															stat.trendDirection === 'down' ? 'text-red-500' : 'text-gray-500'
														}`}>
														{stat.trend}
													</span>
												)}
											</div>
										</div>
									))}
								</div>
								<Button to="/journal" variant="ghost" className="w-full mt-4 justify-center text-xs">View Full Stats</Button>
							</div>
=======
import ProtectedRoute from '../components/ProtectedRoute';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();
    const { loading, progress, journalEntries, announcements } = useData();

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
                    {/* Welcome Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div>
                            <Text variant="primary" className="mb-2">Welcome Back</Text>
                            <Heading level={2}>{user?.name || "Student"}</Heading>
                            <Text variant="muted" className="mt-1">{user?.cohort || "Cohort 04"} • Active</Text>
                        </div>
                        <div className="flex gap-3">
                            <Link to="/journal">
                                <Button variant="primary" size="sm" icon="edit">Log Trade</Button>
                            </Link>
                            <Link to="/mentorship">
                                <Button variant="outline" size="sm" icon="school">Curriculum</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content Column */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Performance Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Card className="p-6">
                                    <Text variant="label" className="mb-2">Win Rate</Text>
                                    <Heading level={2} className="text-primary">68%</Heading>
                                    <Text variant="muted" className="text-green-400 mt-1">↑ 4% this month</Text>
                                </Card>
                                <Card className="p-6">
                                    <Text variant="label" className="mb-2">Profit Factor</Text>
                                    <Heading level={2}>2.4</Heading>
                                    <Text variant="muted" className="mt-1">Last 30 days</Text>
                                </Card>
                                <Card className="p-6">
                                    <Text variant="label" className="mb-2">Avg R:R</Text>
                                    <Heading level={2}>1:3.2</Heading>
                                    <Text variant="muted" className="mt-1">Target: 1:3</Text>
                                </Card>
                            </div>
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05

                            {/* Recent Journal Entries */}
                            <Card className="p-6">
                                <div className="flex justify-between items-center mb-6 border-b border-border-dark pb-4">
                                    <Heading level={4}>Recent Journal Entries</Heading>
                                    <Link to="/journal" className="text-xs text-primary font-mono hover:underline uppercase tracking-wider">View All</Link>
                                </div>

                                {journalEntries.length > 0 ? (
                                    <div className="space-y-4">
                                        {journalEntries.slice(0, 3).map((entry) => (
                                            <div key={entry.id} className="flex items-center justify-between p-4 bg-background-dark rounded-sm border border-border-dark hover:border-gray-600 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-2 h-2 rounded-full ${entry.result === 'Win' ? 'bg-primary' : 'bg-red-500'}`}></div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-white font-bold text-sm">{entry.pair}</span>
                                                            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm ${entry.direction === 'Long' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>{entry.direction}</span>
                                                        </div>
                                                        <span className="text-xs text-gray-500 font-mono">{entry.date}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`block font-mono text-sm font-bold ${entry.pnl >= 0 ? 'text-primary' : 'text-red-500'}`}>
                                                        {entry.pnl >= 0 ? '+' : ''}{entry.pnl}R
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-gray-500 text-sm mb-4">No entries yet.</p>
                                        <Link to="/journal">
                                            <Button variant="outline" size="sm">Create First Entry</Button>
                                        </Link>
                                    </div>
                                )}
                            </Card>

                            {/* Curriculum Progress */}
                            <Card className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <Heading level={4}>Curriculum Progress</Heading>
                                    <span className="text-primary font-mono text-sm font-bold">{Math.round((progress.completedModules / progress.totalModules) * 100)}%</span>
                                </div>
                                <div className="w-full bg-background-dark h-2 rounded-full overflow-hidden mb-4">
                                    <div
                                        className="bg-primary h-full transition-all duration-1000 ease-out"
                                        style={{ width: `${(progress.completedModules / progress.totalModules) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                                    <span>Current Module: <span className="text-white">{progress.currentModule}</span></span>
                                    <span>{progress.completedModules}/{progress.totalModules} Completed</span>
                                </div>
                            </Card>
                        </div>

                        {/* Sidebar Column */}
                        <div className="space-y-8">
                            {/* Announcements */}
                            <Card className="p-6 border-primary/20 bg-primary/5">
                                <div className="flex items-center gap-2 mb-6 text-primary">
                                    <span className="material-icons text-sm">campaign</span>
                                    <Heading level={5} className="text-primary uppercase tracking-wider">Cohort Updates</Heading>
                                </div>
                                <div className="space-y-6">
                                    {announcements.map((announcement) => (
                                        <div key={announcement.id} className="relative pl-4 border-l border-primary/20">
                                            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-primary rounded-full"></div>
                                            <span className="block text-[10px] text-primary/70 font-mono mb-1">{announcement.date}</span>
                                            <h4 className="text-white text-sm font-bold mb-1">{announcement.title}</h4>
                                            <p className="text-gray-400 text-xs leading-relaxed">{announcement.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Quick Links */}
                            <Card className="p-6">
                                <Heading level={5} className="mb-4 uppercase tracking-wider text-gray-400">Quick Actions</Heading>
                                <div className="space-y-2">
                                    <Link to="/resources" className="block p-3 bg-background-dark border border-border-dark hover:border-primary transition-colors rounded-sm group">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-white group-hover:text-primary transition-colors">Resource Library</span>
                                            <span className="material-icons text-xs text-gray-500 group-hover:text-primary">arrow_forward</span>
                                        </div>
                                    </Link>
                                    <Link to="/mentorship" className="block p-3 bg-background-dark border border-border-dark hover:border-primary transition-colors rounded-sm group">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-white group-hover:text-primary transition-colors">Book 1:1 Session</span>
                                            <span className="material-icons text-xs text-gray-500 group-hover:text-primary">calendar_today</span>
                                        </div>
                                    </Link>
                                    <Link to="/faith" className="block p-3 bg-background-dark border border-border-dark hover:border-primary transition-colors rounded-sm group">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-white group-hover:text-primary transition-colors">Daily Devotional</span>
                                            <span className="material-icons text-xs text-gray-500 group-hover:text-primary">menu_book</span>
                                        </div>
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </ProtectedRoute>
    );
};

export default Dashboard;
