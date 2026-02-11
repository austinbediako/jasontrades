import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';

const NotFound = () => {
	return (
		<Section className="min-h-screen flex items-center justify-center bg-background-dark relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
			<Container className="relative z-10 text-center max-w-lg">
				<span className="font-mono text-primary text-xl uppercase tracking-[0.2em] mb-4 block">Error 404</span>
				<Heading level={1} className="text-6xl md:text-8xl mb-6">Lost in the Spread</Heading>
				<Text className="text-xl mb-8 text-gray-400">
					The page you are looking for does not exist. It might have been liquidated or never executed.
				</Text>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button to="/" variant="outline" icon="arrow_back">Return Home</Button>
					<Button to="/dashboard" variant="primary" icon="dashboard">Go to Dashboard</Button>
				</div>
			</Container>
		</Section>
	);
};

export default NotFound;
