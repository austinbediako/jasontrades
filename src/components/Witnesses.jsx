import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';

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
    <div className="bg-background-dark border border-border-dark p-8 rounded-sm hover:border-primary/50 transition-colors">
        <div className="flex justify-between items-start mb-6">
            <div className="flex gap-1 text-primary text-xs">
                {[...Array(stars)].map((_, i) => (
                    <span key={i} className="material-icons text-sm">star</span>
                ))}
            </div>
            <span className="font-mono text-xs text-text-muted">{date}</span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">"{text}"</p>
        <div className="flex items-center gap-3 border-t border-border-dark pt-4">
            <div className="w-8 h-8 bg-surface-dark border border-border-dark rounded-full flex items-center justify-center text-xs font-mono font-bold text-primary">{initials}</div>
            <div>
                <p className="text-white text-sm font-bold">{name}</p>
                <p className="text-xs text-text-muted font-mono">{role}</p>
            </div>
        </div>
    </div>
);

const Witnesses = () => {
    return (
        <Section dark={false}>
            <Container>
                <div className="flex justify-between items-end mb-12 border-b border-border-dark pb-4">
                    <div>
                        <h2 className="font-display font-bold text-3xl text-white">Witnesses</h2>
                        <p className="text-gray-400 text-sm mt-2">Real results from disciplined execution.</p>
                    </div>
                    <a className="hidden md:flex items-center gap-2 text-primary text-sm font-mono uppercase tracking-wider hover:text-white transition-colors" href="#">
                        View All Reviews <span className="material-icons text-sm">arrow_right_alt</span>
                    </a>
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
