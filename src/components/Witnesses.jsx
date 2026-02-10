import React from 'react';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import Container from './ui/Container';
import Card from './ui/Card';
import Heading from './ui/Heading';
import Text from './ui/Text';

const reviews = [
    {
        stars: 5,
        date: 'SEP 2023',
        text: "I spent 4 years chasing 'holy grail' indicators. The Monolith framework stripped all that away. It taught me that my edge isn't on the chart, it's in my discipline. I'm finally funded.",
        initials: 'JD',
        name: 'Jonathan D.',
        role: 'Funded Trader ($100k)'
    },
    {
        stars: 5,
        date: 'OCT 2023',
        text: "The community here is different. No hype, no lambos. Just serious people refining a craft. The focus on stewardship of capital changed my entire life perspective.",
        initials: 'MR',
        name: 'Marcus R.',
        role: 'Forex Specialist'
    },
    {
        stars: 5,
        date: 'AUG 2023',
        text: "Structured. Authoritative. Necessary. If you need someone to hold your hand, go elsewhere. If you want to learn to fish and feed your family, this is it.",
        initials: 'SK',
        name: 'Sarah K.',
        role: 'Indices Trader'
    }
];

const ReviewItem = ({ stars, date, text, initials, name, role }) => (
    <Card hover className="p-8">
        <div className="flex justify-between items-start mb-6">
            <div className="flex gap-1 text-primary text-xs">
                {[...Array(stars)].map((_, i) => (
                    <span key={i} className="material-icons text-sm">star</span>
                ))}
            </div>
            <Text variant="muted">{date}</Text>
        </div>
        <Text variant="small" className="text-gray-300 mb-6">"{text}"</Text>
        <div className="flex items-center gap-3 border-t border-border-dark pt-4">
            <div className="w-8 h-8 bg-surface-dark border border-border-dark rounded-full flex items-center justify-center text-xs font-mono font-bold text-primary">{initials}</div>
            <div>
                <Heading level={5} className="text-white">{name}</Heading>
                <Text variant="muted">{role}</Text>
            </div>
        </div>
    </Card>
);

const Witnesses = () => {
    return (
        <Section variant="surface">
            <Container>
                <div className="flex justify-between items-end mb-12 border-b border-border-dark pb-4">
                    <div>
                        <Heading level={2} className="mb-2">Witnesses</Heading>
                        <Text variant="small">Real results from disciplined execution.</Text>
                    </div>
                    <Link className="hidden md:flex items-center gap-2 text-primary text-sm font-mono uppercase tracking-wider hover:text-white transition-colors" to="/testimonies">
                        View All Reviews <span className="material-icons text-sm">arrow_right_alt</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <ReviewItem key={index} {...review} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Witnesses;
