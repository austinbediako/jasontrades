import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import ListItem from '../components/ui/ListItem';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const rules = [
    { id: '01', title: 'Capital Is Sacred', description: 'Never risk more than 1% of total equity on a single setup. Your capital is not yours — it is borrowed. Return it with increase.' },
    { id: '02', title: 'No Setup, No Entry', description: 'Do not chase candles. If the criteria are not met, we sit on our hands. Patience is not passive — it is the most aggressive form of discipline.' },
    { id: '03', title: 'Accept Loss Gracefully', description: 'Revenge trading is a sin against your future self. Accept the outcome, journal it, and review. Every loss is tuition if you let it teach.' },
    { id: '04', title: 'Glorify In All Things', description: 'Whether profit or loss, maintain character and integrity. Your conduct in the market reflects your conduct in life.' },
    { id: '05', title: 'Journal Every Trade', description: 'If it is not documented, it did not happen. Every entry, every exit, every emotion. The journal is your mirror and your teacher.' },
    { id: '06', title: 'Respect The Session', description: 'Trade only during your designated session. Overtrading is gluttony. Know when the market is speaking to you and when it is not.' },
    { id: '07', title: 'No Overleveraging', description: 'Leverage is a tool, not a weapon. Using excessive leverage is not boldness — it is recklessness disguised as confidence.' },
    { id: '08', title: 'Protect Your Psychology', description: 'If you are emotionally compromised — angry, euphoric, desperate — step away. The market will be there tomorrow. Your capital might not be.' },
    { id: '09', title: 'Honor The Process', description: 'Results are a byproduct of process. Do not worship outcomes. Worship the system. Refine it. Trust it. Execute it.' },
    { id: '10', title: 'Be Accountable', description: 'Share your setups. Accept critique. Submit your journal for review. Iron sharpens iron — but only if you let it.' }
];

const principles = [
    { icon: 'gavel', title: 'Law Over Emotion', description: 'The protocol exists because emotions lie. When you are in the heat of a trade, your feelings will betray you. The rules will not.' },
    { icon: 'visibility', title: 'Transparency Over Ego', description: 'We share our losses as openly as our wins. There is no room for ego in this profession. Only honesty produces growth.' },
    { icon: 'loop', title: 'Consistency Over Perfection', description: 'We do not seek the perfect trade. We seek the repeatable process. A 60% win rate with proper risk management builds empires.' }
];

const Protocol = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10 max-w-3xl">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">The Framework</span>
                    <Heading level={1} className="mb-6">The Protocol</Heading>
                    <Text className="border-l-2 border-primary pl-6">
                        These are not suggestions. They are non-negotiable laws that govern every trade, every session, and every decision within this community. Break the rules, break your account.
                    </Text>
                </Container>
            </Section>

            {/* Rules List */}
            <Section variant="surface">
                <Container className="max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">The Covenant</span>
                        <Heading level={2}>10 Non-Negotiable Rules</Heading>
                        <Text className="mt-4 max-w-lg mx-auto">Trading is not a game. It is a profession requiring absolute adherence to law.</Text>
                    </div>
                    <div className="bg-surface-dark border border-border-dark p-1 rounded-sm shadow-2xl">
                        <div className="divide-y divide-border-dark">
                            {rules.map((rule) => (
                                <ListItem
                                    key={rule.id}
                                    title={rule.title}
                                    description={rule.description}
                                    badge={`Rule #${rule.id}`}
                                    icon={
                                        <div className="w-10 h-10 rounded-sm bg-background-dark border border-border-dark flex items-center justify-center font-mono text-xs text-primary font-bold">
                                            {rule.id}
                                        </div>
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Philosophy */}
            <Section>
                <Container>
                    <div className="text-center mb-16">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Philosophy</span>
                        <Heading level={2}>The Principles Behind The Rules</Heading>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {principles.map((principle, index) => (
                            <div key={index} className="bg-surface-dark border border-border-dark p-8 rounded-sm hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 bg-background-dark border border-border-dark flex items-center justify-center rounded-sm mb-6">
                                    <span className="material-icons text-primary">{principle.icon}</span>
                                </div>
                                <Heading level={3} className="mb-3">{principle.title}</Heading>
                                <Text variant="small">{principle.description}</Text>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Commitment Block */}
            <Section variant="surface">
                <Container className="max-w-3xl text-center">
                    <div className="bg-background-dark border border-border-dark p-10 rounded-sm">
                        <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-icons text-primary text-2xl">handshake</span>
                        </div>
                        <Heading level={2} className="mb-4">The Covenant</Heading>
                        <Text className="mb-8 max-w-lg mx-auto">
                            By joining this community, you agree to uphold these rules in every session, every trade, and every interaction. This is not optional. This is the price of admission.
                        </Text>
                        <Button to="/apply" variant="primary" icon="arrow_forward">
                            I Accept — Apply Now
                        </Button>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Protocol;
