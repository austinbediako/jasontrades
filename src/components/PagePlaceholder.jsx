import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';

const PagePlaceholder = ({ title, description }) => {
    return (
        <Section className="min-h-[60vh] flex items-center justify-center">
            <Container className="text-center">
                <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6 tracking-tight">{title}</h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">{description || "This page is currently under development. Check back soon for updates."}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-sm">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    <span className="text-primary font-mono text-xs uppercase tracking-wider">Coming Soon</span>
                </div>
            </Container>
        </Section>
    );
};

export default PagePlaceholder;
