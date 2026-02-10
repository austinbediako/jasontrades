import React from 'react';
import Section from './ui/Section';
import Heading from './ui/Heading';
import Text from './ui/Text';

const features = [
    {
        icon: 'shield',
        title: 'Risk Management',
        description: 'Capital preservation is the first commandment. We teach strict position sizing and drawdown limits. You survive first, then you thrive.'
    },
    {
        icon: 'psychology',
        title: 'Psychological Fortitude',
        description: 'Greed and fear are the enemies of the trader. Through faith and discipline, we build a mind of steel that executes without hesitation.'
    },
    {
        icon: 'candlestick_chart',
        title: 'Technical Edge',
        description: 'We interpret price action with precision. No lagging indicators. Pure market structure, liquidity concepts, and high-probability setups.'
    }
];

const FeatureItem = ({ icon, title, description }) => (
    <div className="p-10 group hover:bg-background-dark/50 transition-colors duration-300">
        <div className="w-12 h-12 bg-background-dark border border-border-dark flex items-center justify-center rounded-sm mb-6 group-hover:border-primary transition-colors">
            <span className="material-icons text-gray-400 group-hover:text-primary">{icon}</span>
        </div>
        <Heading level={3} className="mb-3">{title}</Heading>
        <Text variant="small">{description}</Text>
    </div>
);

const Features = () => {
    return (
        <Section variant="surface" className="!p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-dark max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <FeatureItem key={index} {...feature} />
                ))}
            </div>
        </Section>
    );
};

export default Features;
