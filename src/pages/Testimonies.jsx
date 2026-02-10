import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const testimonials = [
    {
        name: 'Marcus T.',
        role: 'Funded Trader — Cohort 3',
        text: 'Before G.I.G., I was a gambler disguised as a trader. I blew three accounts in six months. The mentorship rebuilt my entire approach from the ground up. I passed my first prop firm challenge within 8 weeks of completing the program.',
        rating: 5,
        date: 'Jan 2025'
    },
    {
        name: 'Abigail K.',
        role: 'Full-Time Trader — Cohort 1',
        text: 'The journaling framework alone was worth the investment. I had no idea how much my emotions were driving my decisions until I started documenting everything. Now I trade with clarity and confidence.',
        rating: 5,
        date: 'Mar 2024'
    },
    {
        name: 'David O.',
        role: 'Part-Time Trader — Cohort 4',
        text: 'I work full-time and trade the New York session in the mornings. The discipline protocols taught me how to maximize limited screen time. My consistency has never been higher.',
        rating: 5,
        date: 'Feb 2025'
    },
    {
        name: 'Faith M.',
        role: 'Student Trader — Cohort 5',
        text: 'As a college student, I was skeptical about whether I could commit to the program. The self-paced curriculum and weekly sessions fit perfectly into my schedule. The community kept me accountable.',
        rating: 5,
        date: 'Mar 2025'
    },
    {
        name: 'Emmanuel A.',
        role: 'Funded Trader — Cohort 2',
        text: 'The faith-based approach sets this apart from every other mentorship. It is not just about making money — it is about becoming the kind of person who can sustain wealth. That shift in perspective changed everything.',
        rating: 5,
        date: 'Aug 2024'
    },
    {
        name: 'Sarah J.',
        role: 'Aspiring Trader — Cohort 5',
        text: 'I came in with zero experience. Zero. By week 6, I was taking my first demo trades with actual structure. By week 12, I understood risk management better than traders I know who have been at it for years.',
        rating: 5,
        date: 'Apr 2025'
    }
];

const stats = [
    { value: '200+', label: 'Traders Mentored' },
    { value: '87%', label: 'Completion Rate' },
    { value: '5.0', label: 'Avg Rating' },
    { value: '6', label: 'Cohorts Completed' }
];

const Testimonies = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10 max-w-3xl">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Witnesses</span>
                    <Heading level={1} className="mb-6">Testimonies</Heading>
                    <Text className="border-l-2 border-primary pl-6">
                        Real stories from real traders. No cherry-picked screenshots. No hype. Just honest accounts of transformation through discipline and faith.
                    </Text>
                </Container>
            </Section>

            {/* Stats Bar */}
            <Section className="!py-8 border-y border-border-dark bg-surface-dark">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <span className="text-2xl md:text-3xl font-display font-bold text-primary block">{stat.value}</span>
                                <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Testimonial Grid */}
            <Section variant="surface">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} hover className="p-8 flex flex-col">
                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }, (_, i) => (
                                        <span key={i} className="material-icons text-primary text-sm">star</span>
                                    ))}
                                </div>

                                {/* Date */}
                                <span className="font-mono text-xs text-gray-600 mb-4 block">{testimonial.date}</span>

                                {/* Body */}
                                <Text variant="small" className="flex-grow mb-6">"{testimonial.text}"</Text>

                                {/* Author */}
                                <div className="border-t border-border-dark pt-4 mt-auto">
                                    <span className="font-display font-semibold text-white text-sm block">{testimonial.name}</span>
                                    <span className="font-mono text-xs text-gray-500">{testimonial.role}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Disclaimer */}
            <Section className="!py-8 border-y border-border-dark">
                <Container className="max-w-3xl text-center">
                    <Text variant="small" className="text-gray-600">
                        These testimonials represent individual experiences and results. Trading involves significant risk of financial loss. Past performance is not indicative of future results. Individual outcomes depend on skill, dedication, and market conditions.
                    </Text>
                </Container>
            </Section>

            {/* CTA */}
            <Section>
                <Container className="text-center max-w-3xl">
                    <Heading level={2} className="mb-6">Write Your Own Testimony</Heading>
                    <Text className="mb-10 max-w-2xl mx-auto">
                        Every trader in this community started exactly where you are. The difference is they chose to commit.
                    </Text>
                    <Button to="/apply" variant="primary" icon="arrow_forward">
                        Apply for Mentorship
                    </Button>
                </Container>
            </Section>
        </>
    );
};

export default Testimonies;
