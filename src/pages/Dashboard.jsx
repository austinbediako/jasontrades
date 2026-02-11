import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const progress = [
	{ module: '01', title: 'Foundation & Mindset', status: 'Completed', score: '100%' },
	{ module: '02', title: 'Market Structure', status: 'In Progress', score: '45%' },
	{ module: '03', title: 'Liquidity & Order Flow', status: 'Locked', score: '—' },
	{ module: '04', title: 'Entry Models', status: 'Locked', score: '—' },
];

const stats = [
	{ label: 'Journal Entries', value: '12' },
	{ label: 'Win Rate (This Month)', value: '62%' },
	{ label: 'Risk Adherence', value: '98%' },
];

const Dashboard = () => {
	return (
		<>
			{/* Header */}
			<Section className="relative overflow-hidden pt-32 pb-10 border-b border-border-dark">
				<TechnicalGrid />
				<Container className="relative z-10">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
						<div>
							<span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Student Portal</span>
							<Heading level={1} className="text-3xl md:text-4xl">Welcome back, Jason</Heading>
							<Text variant="small" className="text-gray-400 mt-2">Current Cohort: <span className="text-white">Alpha-06</span></Text>
						</div>
						<div className="flex gap-4">
							<Button to="/journal" variant="outline" icon="edit_note">Log Trade</Button>
							<Button to="/resources" variant="primary" icon="play_arrow">Resume Learning</Button>
						</div>
					</div>
				</Container>
			</Section>

			{/* Content Grid */}
			<Section variant="surface" className="min-h-screen">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

						{/* Main Column: Progress */}
						<div className="lg:col-span-2 space-y-8">
							<div className="bg-background-dark border border-border-dark rounded-sm p-6">
								<div className="flex items-center justify-between mb-6">
									<Heading level={3}>Curriculum Progress</Heading>
									<span className="font-mono text-xs text-primary">12% Complete</span>
								</div>
								<div className="space-y-4">
									{progress.map((item, index) => (
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
									))}
								</div>
							</div>

							<div className="bg-background-dark border border-border-dark rounded-sm p-6">
								<Heading level={3} className="mb-6">Latest Community Updates</Heading>
								<div className="space-y-4">
									<div className="p-4 border-l-2 border-primary bg-surface-dark/30">
										<span className="font-mono text-[10px] text-primary uppercase mb-1 block">Announcement • 2 hours ago</span>
										<Text variant="small" className="text-white">Weekly detailed review of EURUSD price action posted in #analysis.</Text>
									</div>
									<div className="p-4 border-l-2 border-gray-600 bg-surface-dark/30">
										<span className="font-mono text-[10px] text-gray-400 uppercase mb-1 block">Event • Tomorrow, 9:00 AM EST</span>
										<Text variant="small" className="text-white">Live Psychology Session with Mentor: "Handling Drawdown".</Text>
									</div>
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
											<span className="font-mono text-primary">{stat.value}</span>
										</div>
									))}
								</div>
								<Button to="/journal" variant="ghost" className="w-full mt-4 justify-center text-xs">View Full Stats</Button>
							</div>

							<div className="bg-background-dark border border-border-dark rounded-sm p-6">
								<Heading level={3} className="mb-6">Quick Actions</Heading>
								<div className="space-y-3">
									<Button to="/journal" variant="outline" className="w-full justify-start text-sm" icon="add">New Journal Entry</Button>
									<Button href="#" variant="outline" className="w-full justify-start text-sm" icon="forum">Open Discord</Button>
									<Button to="/contact" variant="outline" className="w-full justify-start text-sm" icon="support">Contact Support</Button>
								</div>
							</div>
						</div>

					</div>
				</Container>
			</Section>
		</>
	);
};

export default Dashboard;
