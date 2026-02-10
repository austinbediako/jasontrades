import React from 'react';
import Section from './ui/Section';
import TechnicalGrid from './ui/TechnicalGrid';
import Button from './ui/Button';
import ListItem from './ui/ListItem';
import Heading from './ui/Heading';
import Text from './ui/Text';

const rules = [
    {
        id: '01',
        title: 'Capital Is Sacred',
        description: 'Never risk more than 1% of total equity on a single setup.'
    },
    {
        id: '02',
        title: 'No Setup, No Entry',
        description: 'Do not chase candles. If the criteria are not met, we sit on our hands.'
    },
    {
        id: '03',
        title: 'Accept Loss Gracefully',
        description: 'Revenge trading is a sin against your future self. Accept the outcome and review.'
    },
    {
        id: '04',
        title: 'Glorify In All Things',
        description: 'Whether profit or loss, maintain character and integrity.'
    }
];

const Covenant = () => {
    return (
        <Section className="relative overflow-hidden">
            <TechnicalGrid />
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">The Covenant</span>
                    <Heading level={2}>Non-Negotiable Rules</Heading>
                    <Text className="mt-4 max-w-lg mx-auto">Trading is not a game. It is a profession requiring absolute adherence to law. Break the rules, break your account.</Text>
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
                                    <div className="w-8 h-8 rounded-sm border-2 border-gray-600 group-hover:border-primary flex items-center justify-center">
                                        <span className="material-icons text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">check</span>
                                    </div>
                                }
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="font-mono text-xs text-gray-500 mb-4 uppercase">Do you agree to abide by these terms?</p>
                    <Button variant="outline" className="inline-flex">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        I Accept The Protocol
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default Covenant;
