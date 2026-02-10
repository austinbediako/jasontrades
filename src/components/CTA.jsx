import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';
import Button from './ui/Button';

const CTA = () => {
    return (
        <Section className="relative overflow-hidden border-t border-border-dark">
            <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
            <Container className="relative z-10 text-center max-w-5xl">
                <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6">Ready to Standardize Your Edge?</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">The doors are open for the disciplined few. Secure your place in the next cohort and begin the journey to mastery.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button variant="primary" className="px-10 py-4 text-base shadow-xl shadow-primary/20">
                        Apply for Mentorship
                    </Button>
                </div>
                <p className="mt-6 font-mono text-xs text-gray-600 uppercase">Limited Spots Available • Application Required</p>
            </Container>
        </Section>
    );
};

export default CTA;
