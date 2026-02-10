import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const journalFeatures = [
    {
        icon: 'edit_note',
        title: 'Trade Documentation',
        description: 'Log every trade with structured entries — pair, session, direction, risk, entry reasoning, and emotional state. No detail is too small.'
    },
    {
        icon: 'psychology',
        title: 'Emotional Mapping',
        description: 'Track your psychological state before, during, and after each trade. Identify patterns between your emotions and your P&L.'
    },
    {
        icon: 'analytics',
        title: 'Performance Analytics',
        description: 'Weekly and monthly breakdowns of win rate, risk-to-reward, drawdown, and consistency metrics. The numbers do not lie.'
    },
    {
        icon: 'checklist',
        title: 'Pre-Session Checklist',
        description: 'A structured routine to complete before every session. Ensures you are mentally prepared and aligned with your process.'
    },
    {
        icon: 'review_and_approve',
        title: 'Mentor Review',
        description: 'Submit your journal entries for personalized feedback from your mentor. Direct, honest critique to accelerate your growth.'
    },
    {
        icon: 'trending_up',
        title: 'Progress Tracking',
        description: 'Visual progress toward your consistency goals. See your evolution from week one to graduation.'
    }
];

const sampleEntries = [
    {
        date: 'Mon, Apr 14',
        pair: 'EUR/USD',
        direction: 'Long',
        result: 'Win',
        rr: '1:3',
        note: 'Clean break of structure on H1. Entry on retracement to OB. Held to TP despite impulse to close early.',
        emotional: 'Calm — followed process'
    },
    {
        date: 'Tue, Apr 15',
        pair: 'GBP/JPY',
        direction: 'Short',
        result: 'Loss',
        rr: '1:2',
        note: 'Took the setup but ignored the NFP calendar event. Price spiked through SL. Lesson: always check the calendar.',
        emotional: 'Frustrated — broke #06'
    },
    {
        date: 'Wed, Apr 16',
        pair: '—',
        direction: '—',
        result: 'No Trade',
        rr: '—',
        note: 'No clean setups during London session. Sat on hands. Reviewed yesterday\'s loss. Updated journal with root cause analysis.',
        emotional: 'Patient — discipline held'
    }
];

const Journal = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10 max-w-3xl">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Your Mirror</span>
                    <Heading level={1} className="mb-6">The Trading Journal</Heading>
                    <Text className="border-l-2 border-primary pl-6">
                        The journal is the most important tool in your arsenal. It does not make you money — it makes you the kind of trader who can make money consistently.
                    </Text>
                </Container>
            </Section>

            {/* Features Grid */}
            <Section variant="surface">
                <Container>
                    <div className="text-center mb-16">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Features</span>
                        <Heading level={2}>What The Journal Tracks</Heading>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {journalFeatures.map((feature, index) => (
                            <Card key={index} hover className="p-8">
                                <div className="w-12 h-12 bg-surface-dark border border-border-dark flex items-center justify-center rounded-sm mb-6">
                                    <span className="material-icons text-primary">{feature.icon}</span>
                                </div>
                                <Heading level={3} className="mb-3">{feature.title}</Heading>
                                <Text variant="small">{feature.description}</Text>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Sample Entries */}
            <Section>
                <Container className="max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Preview</span>
                        <Heading level={2}>Sample Journal Entries</Heading>
                        <Text className="mt-4 max-w-lg mx-auto">This is what a week of disciplined journaling looks like.</Text>
                    </div>
                    <div className="space-y-4">
                        {sampleEntries.map((entry, index) => (
                            <div key={index} className="bg-surface-dark border border-border-dark rounded-sm p-6">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="font-mono text-xs text-white bg-background-dark border border-border-dark px-3 py-1 rounded-sm">{entry.date}</span>
                                    <span className="font-mono text-xs text-gray-400">{entry.pair}</span>
                                    <span className="font-mono text-xs text-gray-400">{entry.direction}</span>
                                    <span className={`font-mono text-xs px-3 py-1 rounded-sm ${entry.result === 'Win' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                        entry.result === 'Loss' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                                            'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                                        }`}>{entry.result}</span>
                                    {entry.rr !== '—' && (
                                        <span className="font-mono text-xs text-primary">{entry.rr} R:R</span>
                                    )}
                                </div>
                                <Text variant="small" className="mb-3">{entry.note}</Text>
                                <div className="border-t border-border-dark pt-3 mt-3">
                                    <span className="font-mono text-xs text-gray-600">Emotional State: </span>
                                    <span className="font-mono text-xs text-gray-400">{entry.emotional}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="relative overflow-hidden border-t border-border-dark">
                <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                <Container className="relative z-10 text-center max-w-3xl">
                    <Heading level={2} className="mb-6">Start Documenting Your Journey</Heading>
                    <Text className="mb-10 max-w-2xl mx-auto">
                        Access to the journal framework is included with the mentorship. Every entry brings you closer to consistency.
                    </Text>
                    <Button to="/apply" variant="primary" icon="arrow_forward">
                        Apply for Access
                    </Button>
                </Container>
            </Section>
        </>
    );
};

export default Journal;
