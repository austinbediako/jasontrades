import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const tenets = [
    { id: 'I', title: 'We Do Not Gamble', body: 'The markets are not a casino. Every position is a calculated expression of probability, not a roll of the dice. If you come here seeking thrills, you are in the wrong place.' },
    { id: 'II', title: 'Capital Is Sacred', body: 'Every dollar in your account is entrusted to you — by your family, by your future, by God himself. You do not have the right to squander it on impulsive decisions. Protect it as you would protect something borrowed.' },
    { id: 'III', title: 'Process Over Outcome', body: 'We do not worship green P&L. We worship the process that produces it. A losing trade executed with discipline is superior to a winning trade born of recklessness.' },
    { id: 'IV', title: 'Discipline Is Freedom', body: 'The undisciplined trader is a slave to his emotions. The disciplined trader is free — free from fear, free from greed, free from the chaos that destroys accounts and lives.' },
    { id: 'V', title: 'We Are Stewards, Not Owners', body: 'You do not own your capital. You steward it. This mindset changes everything — how you size your positions, how you handle losses, how you approach every single session.' },
    { id: 'VI', title: 'Excellence Is Worship', body: 'When you approach this craft with excellence — meticulous journaling, rigorous review, relentless improvement — you honor the One who gave you the ability to trade.' },
    { id: 'VII', title: 'The Market Owes You Nothing', body: 'Entitlement is the death of the trader. The market does not care about your rent, your goals, or your feelings. It moves. You adapt. Or you are removed.' },
    { id: 'VIII', title: 'Community Is Accountability', body: 'We do not trade alone. We submit our journals, our setups, our failures to the community. Not for validation — for sharpening. Iron sharpens iron.' },
    { id: 'IX', title: 'Patience Is Power', body: 'The best trade is often no trade. Sitting on your hands while the undisciplined chase every candle is not weakness. It is the purest form of strength.' },
    { id: 'X', title: 'We Build Generational Wealth', body: 'This is not about today. This is about building something that outlasts you. Wealth that serves your family, your community, and the Kingdom for generations.' }
];

const Manifesto = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10 max-w-3xl">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Declaration</span>
                    <Heading level={1} className="mb-6">The Manifesto</Heading>
                    <Text className="border-l-2 border-primary pl-6">
                        This is what we believe. This is how we trade. This is the standard we hold ourselves to — not because it is easy, but because it is right.
                    </Text>
                </Container>
            </Section>

            {/* Tenets */}
            <Section variant="surface">
                <Container className="max-w-3xl">
                    <div className="space-y-0 divide-y divide-border-dark">
                        {tenets.map((tenet) => (
                            <div key={tenet.id} className="py-10 first:pt-0 last:pb-0 group">
                                <div className="flex items-baseline gap-6 mb-4">
                                    <span className="font-mono text-primary text-xs tracking-widest flex-shrink-0">{tenet.id}</span>
                                    <Heading level={3}>{tenet.title}</Heading>
                                </div>
                                <div className="pl-12 md:pl-16">
                                    <Text>{tenet.body}</Text>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Closing Quote */}
            <Section>
                <Container className="max-w-3xl text-center">
                    <div className="py-8">
                        <blockquote className="text-2xl md:text-3xl font-display font-bold text-white leading-snug mb-6">
                            "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
                        </blockquote>
                        <Text variant="primary">— Colossians 3:23</Text>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="relative overflow-hidden border-t border-border-dark">
                <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                <Container className="relative z-10 text-center max-w-3xl">
                    <Heading level={2} className="mb-6">Live By The Standard</Heading>
                    <Text className="mb-10 max-w-2xl mx-auto">
                        If these words resonate, you may be who we are looking for.
                    </Text>
                    <Button to="/apply" variant="primary" icon="arrow_forward">
                        Apply for Mentorship
                    </Button>
                </Container>
            </Section>
        </>
    );
};

export default Manifesto;
