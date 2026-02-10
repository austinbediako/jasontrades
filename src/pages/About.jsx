import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const pillars = [
    {
        icon: 'auto_stories',
        title: 'Stewardship',
        description: 'Every dollar in your account is entrusted to you. We treat capital as a sacred responsibility, not a gambling chip.'
    },
    {
        icon: 'psychology',
        title: 'Discipline',
        description: 'Emotion is the enemy of execution. We train our minds to follow the process, not the impulse.'
    },
    {
        icon: 'church',
        title: 'Faith',
        description: 'We believe God is glorified when we pursue excellence with integrity. Our foundation is spiritual before it is technical.'
    }
];

const credentials = [
    { value: '7+', label: 'Years Trading' },
    { value: '1.4k+', label: 'Students Mentored' },
    { value: '14', label: 'Cohorts Completed' },
    { value: '12', label: 'Countries Reached' }
];

const About = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">About</span>
                        <Heading level={1} className="mb-6">We Trade With Reverence</Heading>
                        <Text className="max-w-2xl border-l-2 border-primary pl-6">
                            God Is Glorified is not another trading community. It is a covenant-driven mentorship built on the belief that the markets are a field of stewardship, not speculation.
                        </Text>
                    </div>
                </Container>
            </Section>

            {/* Origin Story */}
            <Section variant="surface">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">The Origin</span>
                            <Heading level={2} className="mb-6">From Blown Accounts to Funded Discipline</Heading>
                            <div className="space-y-4">
                                <Text>
                                    The founder of G.I.G. did not begin with mastery. He began with failure. Multiple blown accounts, emotional trading, and the belief that more indicators meant more profit.
                                </Text>
                                <Text>
                                    The turning point was not a strategy. It was a surrender. A decision to stop treating the market like a casino and start treating capital as something borrowed from God — something to be returned with increase.
                                </Text>
                                <Text>
                                    From that moment, everything changed. The charts did not change. The discipline did. And from that discipline, consistency was born.
                                </Text>
                            </div>
                        </div>
                        <div className="bg-background-dark border border-border-dark p-1 rounded-sm">
                            <div className="bg-surface-dark/50 p-10 flex flex-col items-center justify-center text-center min-h-[320px]">
                                <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mb-6">
                                    <span className="material-icons text-primary text-3xl">change_history</span>
                                </div>
                                <Heading level={3} className="mb-2">The Monolith Framework</Heading>
                                <Text variant="small" className="max-w-xs">A systematic approach to price action, risk management, and psychological fortitude.</Text>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Philosophy Pillars */}
            <Section className="!p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-dark max-w-7xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="p-10 group hover:bg-background-dark/50 transition-colors duration-300">
                            <div className="w-12 h-12 bg-background-dark border border-border-dark flex items-center justify-center rounded-sm mb-6 group-hover:border-primary transition-colors">
                                <span className="material-icons text-gray-400 group-hover:text-primary">{pillar.icon}</span>
                            </div>
                            <Heading level={3} className="mb-3">{pillar.title}</Heading>
                            <Text variant="small">{pillar.description}</Text>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Credibility Stats */}
            <div className="bg-primary/5 border-y border-primary/20 py-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex flex-col md:flex-row gap-12 w-full justify-center text-center">
                        {credentials.map((stat, index) => (
                            <div key={index}>
                                <span className="block text-3xl font-mono font-bold text-white">{stat.value}</span>
                                <span className="text-xs uppercase tracking-widest text-primary font-bold">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subtle CTA */}
            <Section className="relative overflow-hidden border-t border-border-dark">
                <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                <Container className="relative z-10 text-center max-w-3xl">
                    <Heading level={2} className="mb-6">Built for the Serious Few</Heading>
                    <Text className="mb-10 max-w-2xl mx-auto">
                        If you are looking for get-rich-quick signals, this is not your place. If you are ready to treat trading as a craft and your capital as a trust — we are waiting.
                    </Text>
                    <Button to="/apply" variant="primary" icon="arrow_forward">
                        Begin Your Application
                    </Button>
                </Container>
            </Section>
        </>
    );
};

export default About;
