import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ListItem from '../components/ui/ListItem';
import TechnicalGrid from '../components/ui/TechnicalGrid';
import Accordion from '../components/ui/Accordion';

const features = [
    {
        icon: 'candlestick_chart',
        title: 'Price Action Mastery',
        description: 'Pure market structure analysis. No lagging indicators. Learn to read the language the market speaks.'
    },
    {
        icon: 'shield',
        title: 'Risk Architecture',
        description: 'Position sizing, drawdown protocols, and capital preservation frameworks that protect your equity.'
    },
    {
        icon: 'psychology',
        title: 'Psychological Training',
        description: 'Journaling frameworks, emotional regulation, and the mental models of consistently profitable traders.'
    },
    {
        icon: 'groups',
        title: 'Live Sessions',
        description: 'Weekly live strategy sessions with real-time market analysis, trade reviews, and Q&A.'
    },
    {
        icon: 'menu_book',
        title: 'The Monolith Curriculum',
        description: 'A structured, self-paced curriculum covering fundamentals through advanced concepts over 12 weeks.'
    },
    {
        icon: 'forum',
        title: 'Private Community',
        description: 'Access to a curated Discord community of serious, faith-driven traders. No noise. No hype.'
    }
];

const modules = [
    { id: '01', title: 'Foundation & Mindset', description: 'Understanding stewardship, establishing your trading identity, and setting your covenant rules.' },
    { id: '02', title: 'Market Structure', description: 'Higher highs, higher lows, break of structure, change of character. The bones of every chart.' },
    { id: '03', title: 'Liquidity & Order Flow', description: 'Where smart money operates. Liquidity pools, inducements, and institutional order flow.' },
    { id: '04', title: 'Entry Models', description: 'High-probability entry frameworks. Optimal trade entry, risk-to-reward calculation, and confirmation.' },
    { id: '05', title: 'Risk Management', description: 'Position sizing, maximum drawdown rules, correlation management, and capital allocation.' },
    { id: '06', title: 'Trading Psychology', description: 'Journaling, emotional mapping, fear and greed protocols, and post-trade review systems.' },
    { id: '07', title: 'Live Market Application', description: 'Applying concepts in real-time. Simulated and live execution with mentor oversight.' },
    { id: '08', title: 'Funded Account Preparation', description: 'Prop firm challenge strategies, consistency rules, and scaling your funded capital.' }
];

const commitments = [
    { question: 'What is the time commitment?', answer: 'Expect to dedicate 10-15 hours per week. This includes curriculum study, live sessions, journaling, and practice trading. This is not a passive course — it is an active mentorship.' },
    { question: 'What are the prerequisites?', answer: 'No prior trading experience is required, but you must demonstrate seriousness and discipline. A stable internet connection and a demo trading account are needed from week one.' },
    { question: 'What is the refund policy?', answer: 'Due to the intensive and personalized nature of the mentorship, we do not offer refunds after the onboarding period. We vet every applicant carefully to ensure mutual fit before enrollment.' },
    { question: 'Is this mentorship faith-based?', answer: 'Yes. Our approach is rooted in biblical principles of stewardship, discipline, and integrity. While we welcome traders of all backgrounds, our framework and community operate from this foundation.' }
];

const Mentorship = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">The Syllabus</span>
                        <Heading level={1} className="mb-6">The Monolith Mentorship</Heading>
                        <Text className="max-w-2xl border-l-2 border-primary pl-6">
                            A 12-week intensive mentorship designed to transform undisciplined traders into systematic executors. No shortcuts. No signals. Just process.
                        </Text>
                    </div>
                </Container>
            </Section>

            {/* Program Overview */}
            <Section variant="surface">
                <Container className="max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Program Structure</span>
                        <Heading level={2} className="mb-4">What You Will Build</Heading>
                        <Text className="max-w-lg mx-auto">
                            This is not a course you watch passively. It is a mentorship you execute actively. Every module builds on the last. Every week raises the standard.
                        </Text>
                    </div>
                </Container>
            </Section>

            {/* Features Grid */}
            <Section className="!p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-border-dark max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="p-10 group hover:bg-background-dark/50 transition-colors duration-300 border-b md:border-b-0 border-border-dark md:[&:nth-child(n+4)]:border-t md:border-r md:last:border-r-0 md:[&:nth-child(3n)]:border-r-0">
                            <div className="w-12 h-12 bg-background-dark border border-border-dark flex items-center justify-center rounded-sm mb-6 group-hover:border-primary transition-colors">
                                <span className="material-icons text-gray-400 group-hover:text-primary">{feature.icon}</span>
                            </div>
                            <Heading level={3} className="mb-3">{feature.title}</Heading>
                            <Text variant="small">{feature.description}</Text>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Curriculum Modules */}
            <Section id="syllabus">
                <Container className="max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Curriculum</span>
                        <Heading level={2}>The 8-Module Framework</Heading>
                        <Text className="mt-4 max-w-lg mx-auto">Each module is designed to be completed in sequence. Mastery of one unlocks the next.</Text>
                    </div>
                    <div className="bg-surface-dark border border-border-dark p-1 rounded-sm shadow-2xl">
                        <div className="divide-y divide-border-dark">
                            {modules.map((module) => (
                                <ListItem
                                    key={module.id}
                                    title={module.title}
                                    description={module.description}
                                    badge={`Module ${module.id}`}
                                    icon={
                                        <div className="w-10 h-10 rounded-sm bg-background-dark border border-border-dark flex items-center justify-center font-mono text-xs text-primary font-bold">
                                            {module.id}
                                        </div>
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Format & Delivery */}
            <Section variant="surface">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card hover className="p-8">
                            <div className="w-12 h-12 bg-surface-dark border border-border-dark flex items-center justify-center rounded-sm mb-6">
                                <span className="material-icons text-primary">schedule</span>
                            </div>
                            <Heading level={3} className="mb-3">12 Weeks</Heading>
                            <Text variant="small">Structured timeline with weekly milestones. Enough time to build real habits, not temporary motivation.</Text>
                        </Card>
                        <Card hover className="p-8">
                            <div className="w-12 h-12 bg-surface-dark border border-border-dark flex items-center justify-center rounded-sm mb-6">
                                <span className="material-icons text-primary">videocam</span>
                            </div>
                            <Heading level={3} className="mb-3">Live + On-Demand</Heading>
                            <Text variant="small">Weekly live sessions for real-time learning. Full curriculum available on-demand for self-paced review.</Text>
                        </Card>
                        <Card hover className="p-8">
                            <div className="w-12 h-12 bg-surface-dark border border-border-dark flex items-center justify-center rounded-sm mb-6">
                                <span className="material-icons text-primary">support_agent</span>
                            </div>
                            <Heading level={3} className="mb-3">Direct Access</Heading>
                            <Text variant="small">Personalized feedback on your journal, setups, and execution. Not a broadcast. A conversation.</Text>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* Risk & Commitments */}
            <Section>
                <Container className="max-w-3xl">
                    <div className="text-center mb-12">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Before You Apply</span>
                        <Heading level={2}>Understand The Commitment</Heading>
                    </div>
                    <Accordion items={commitments} />
                </Container>
            </Section>

            {/* CTA */}
            <Section className="relative overflow-hidden border-t border-border-dark">
                <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                <Container className="relative z-10 text-center max-w-5xl">
                    <Heading level={2} className="mb-6">Ready to Execute?</Heading>
                    <Text className="mb-10 max-w-2xl mx-auto">Applications are reviewed individually. Only serious, coachable traders will be accepted into the cohort.</Text>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button to="/apply" variant="primary" icon="arrow_forward">
                            Apply for Mentorship
                        </Button>
                        <Button to="/faq" variant="outline">
                            Read FAQ
                        </Button>
                    </div>
                    <p className="mt-6 font-mono text-xs text-gray-600 uppercase">Limited Spots Available • Application Required</p>
                </Container>
            </Section>
        </>
    );
};

export default Mentorship;
