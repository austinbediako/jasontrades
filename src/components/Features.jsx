import React from 'react';
import Section from './ui/Section';

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
        <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

const Features = () => {
    return (
        <Section className="!p-0 border-b border-border-dark bg-surface-dark">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-dark max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <FeatureItem key={index} {...feature} />
                ))}
            </div>
        </Section>
    );
};

export default Features;
