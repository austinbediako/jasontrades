import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const beliefs = [
    {
        title: 'God As Provider',
        scripture: 'Deuteronomy 8:18',
        quote: '"But remember the LORD your God, for it is he who gives you the ability to produce wealth."',
        body: 'We believe that the ability to generate wealth is a gift from God. Trading skill, market insight, and financial acumen are not self-made achievements — they are stewardship of divine provision.'
    },
    {
        title: 'Stewardship Over Ownership',
        scripture: 'Matthew 25:14-30',
        quote: '"Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things."',
        body: 'We are stewards, not owners, of our capital. Every dollar managed is an act of worship. The Parable of the Talents demands that we multiply what we have been given — not bury it in fear.'
    },
    {
        title: 'Discipline As Devotion',
        scripture: 'Proverbs 12:1',
        quote: '"Whoever loves discipline loves knowledge, but whoever hates correction is stupid."',
        body: 'Discipline in trading is discipline in life. Our risk management protocols, journaling habits, and session rules are expressions of devotion — not restrictions, but freedom.'
    },
    {
        title: 'Excellence As Worship',
        scripture: 'Colossians 3:23',
        quote: '"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."',
        body: 'Excellence in our craft is worship. When we treat chart analysis with precision, risk management with reverence, and each trade with care — we glorify the One who enabled it.'
    },
    {
        title: 'Integrity In All Things',
        scripture: 'Proverbs 11:1',
        quote: '"Dishonest scales are an abomination to the LORD, but a just weight is His delight."',
        body: 'We operate with integrity. No manipulated results. No hidden losses. No fake screenshots. Our word is our bond, both in and out of the market.'
    },
    {
        title: 'Community As Iron',
        scripture: 'Proverbs 27:17',
        quote: '"As iron sharpens iron, so one person sharpens another."',
        body: 'We believe in the power of community. Not for echo chambers or hype, but for accountability, correction, and mutual sharpening. Lone wolves do not survive this profession.'
    },
    {
        title: 'Patience As Strength',
        scripture: 'Isaiah 40:31',
        quote: '"But those who hope in the LORD will renew their strength."',
        body: 'Patience is the most underrated skill in trading. Waiting for the right setup, enduring drawdowns, and trusting the process — all of this requires a strength that transcends human willpower.'
    },
    {
        title: 'Generational Purpose',
        scripture: 'Proverbs 13:22',
        quote: '"A good person leaves an inheritance for their children\'s children."',
        body: 'Our trading is not about today. It is about building wealth that serves families, communities, and the Kingdom for generations. Short-term thinking produces short-term results.'
    }
];

const StatementOfFaith = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10 max-w-3xl">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Foundation</span>
                    <Heading level={1} className="mb-6">Statement of Faith</Heading>
                    <Text className="border-l-2 border-primary pl-6">
                        Our approach to the markets is anchored in scripture and shaped by biblical principles. These are the convictions that inform our process, govern our conduct, and define our community.
                    </Text>
                </Container>
            </Section>

            {/* Beliefs */}
            <Section variant="surface">
                <Container className="max-w-3xl">
                    <div className="space-y-12">
                        {beliefs.map((belief, index) => (
                            <div key={index} className="bg-background-dark border border-border-dark p-8 rounded-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-mono text-primary text-xs uppercase tracking-widest">{String(index + 1).padStart(2, '0')}</span>
                                    <Heading level={3}>{belief.title}</Heading>
                                </div>
                                <blockquote className="border-l-2 border-primary/40 pl-6 py-2 mb-6">
                                    <p className="text-sm text-gray-300 italic leading-relaxed">{belief.quote}</p>
                                    <cite className="font-mono text-primary text-xs not-italic mt-1 block">— {belief.scripture}</cite>
                                </blockquote>
                                <Text>{belief.body}</Text>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Closing */}
            <Section className="border-t border-border-dark">
                <Container className="max-w-3xl text-center">
                    <div className="py-8">
                        <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-icons text-primary text-2xl">church</span>
                        </div>
                        <Heading level={2} className="mb-4">Built On Faith. Refined By Fire.</Heading>
                        <Text className="mb-10 max-w-lg mx-auto">
                            If this resonates, you are not here by accident.
                        </Text>
                        <Button to="/apply" variant="primary" icon="arrow_forward">
                            Begin Your Journey
                        </Button>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default StatementOfFaith;
