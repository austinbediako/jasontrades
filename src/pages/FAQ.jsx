import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import TechnicalGrid from '../components/ui/TechnicalGrid';
import Accordion from '../components/ui/Accordion';

const generalQuestions = [
    { question: 'What is God Is Glorified?', answer: 'God Is Glorified (G.I.G.) is a faith-driven trading mentorship built on biblical principles of stewardship, discipline, and excellence. We train traders to approach the markets with reverence, structure, and a process-first mindset.' },
    { question: 'Who is this mentorship for?', answer: 'This is for anyone serious about learning to trade with discipline — whether you are a complete beginner or an experienced trader struggling with consistency. We do not cater to those seeking quick riches or signal services.' },
    { question: 'Do I need trading experience to apply?', answer: 'No prior experience is required. We start from foundation principles. However, you must be willing to commit 10-15 hours per week to study, practice, and journaling.' },
    { question: 'How long is the mentorship?', answer: 'The core mentorship runs for 12 weeks. After completion, you retain lifetime access to the curriculum and community. Alumni also gain access to advanced sessions and ongoing support.' },
    { question: 'What markets do you trade?', answer: 'Our framework is applicable across all markets — Forex, Indices, Crypto, and Commodities. The principles of price action, risk management, and psychology are universal.' }
];

const riskQuestions = [
    { question: 'Can you guarantee profits?', answer: 'No. No one can guarantee profits in trading, and anyone who does is lying to you. What we guarantee is a structured framework, disciplined process, and a community of accountability. Your results depend on your execution.' },
    { question: 'What is the risk of trading?', answer: 'Trading involves significant risk of financial loss. You should never trade with money you cannot afford to lose. We teach strict risk management — never risking more than 1% of equity per trade — but the risk is always present.' },
    { question: 'How do you handle losing streaks?', answer: 'Losing is part of trading. We teach drawdown protocols, psychological recovery frameworks, and journaling systems that help you process losses without emotional decision-making. The goal is not to never lose, but to lose correctly.' },
    { question: 'Will I become profitable during the 12 weeks?', answer: 'That depends entirely on you. Some students see consistency within weeks. Others take months after the program ends. We focus on building the right habits and frameworks. Profitability is the byproduct of discipline, not the other way around.' }
];

const logisticsQuestions = [
    { question: 'How much does the mentorship cost?', answer: 'The mentorship is priced at $1,997 for the full 12-week program. This includes lifetime curriculum access, weekly live sessions, private community access, and personalized journal feedback. Payment plans may be available upon request.' },
    { question: 'Do you offer refunds?', answer: 'Due to the intensive and personalized nature of the program, refunds are not available after the onboarding period. We vet every applicant carefully to ensure mutual fit before acceptance.' },
    { question: 'What payment methods do you accept?', answer: 'We accept major credit cards and cryptocurrency payments. All transactions are processed securely through our payment system with 256-bit SSL encryption.' },
    { question: 'How do I access the curriculum?', answer: 'Upon enrollment, you will receive login credentials to our learning platform. All curriculum content, session recordings, and community access are available through a single dashboard.' },
    { question: 'What happens after the 12 weeks?', answer: 'After completing the mentorship, you retain lifetime access to the curriculum and community. You become part of the G.I.G. alumni network with access to advanced sessions, trade reviews, and ongoing mentorship support.' }
];

const FAQ = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10 max-w-3xl">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Support</span>
                    <Heading level={1} className="mb-6">Frequently Asked Questions</Heading>
                    <Text className="border-l-2 border-primary pl-6">
                        Clear answers to the most common questions about the mentorship, our philosophy, and the enrollment process.
                    </Text>
                </Container>
            </Section>

            {/* General */}
            <Section variant="surface">
                <Container className="max-w-3xl">
                    <div className="mb-8">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">General</span>
                        <Heading level={2}>About The Program</Heading>
                    </div>
                    <Accordion items={generalQuestions} />
                </Container>
            </Section>

            {/* Risk & Psychology */}
            <Section>
                <Container className="max-w-3xl">
                    <div className="mb-8">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Risk & Psychology</span>
                        <Heading level={2}>Managing Expectations</Heading>
                    </div>
                    <Accordion items={riskQuestions} />
                </Container>
            </Section>

            {/* Logistics & Payments */}
            <Section variant="surface">
                <Container className="max-w-3xl">
                    <div className="mb-8">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Logistics & Payments</span>
                        <Heading level={2}>Enrollment Details</Heading>
                    </div>
                    <Accordion items={logisticsQuestions} />
                </Container>
            </Section>

            {/* CTA */}
            <Section className="relative overflow-hidden border-t border-border-dark">
                <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                <Container className="relative z-10 text-center max-w-3xl">
                    <Heading level={2} className="mb-6">Still Have Questions?</Heading>
                    <Text className="mb-10 max-w-2xl mx-auto">
                        Reach out directly. We respond to every inquiry within 24 hours.
                    </Text>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button to="/contact" variant="primary" icon="mail">
                            Contact Us
                        </Button>
                        <Button to="/apply" variant="outline">
                            Apply Now
                        </Button>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default FAQ;
