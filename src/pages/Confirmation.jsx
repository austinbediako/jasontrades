import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const Confirmation = () => {
    return (
        <Section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <TechnicalGrid />
            <Container className="relative z-10 max-w-2xl w-full text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20 animate-bounce">
                    <span className="material-icons text-primary text-4xl">check_circle</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6">Application Received</h1>
                <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                    Your application has been logged in our system. We will review your profile and contact you within 48 hours if you meet our criteria.
                </p>
                <div className="bg-surface-dark border border-border-dark p-6 rounded-sm mb-10 text-left">
                    <h3 className="text-white font-mono text-sm uppercase tracking-wider mb-4 border-b border-border-dark pb-2">Next Steps</h3>
                    <ul className="space-y-3 text-sm text-gray-400 font-mono">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            Review of your trading history (if applicable).
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                            Scheduling a brief interview call.
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                            Final decision and onboarding.
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center gap-4">
                    <Link to="/">
                        <Button variant="outline">Return Home</Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
};

export default Confirmation;
