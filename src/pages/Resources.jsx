import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const resourceCategories = [
    {
        title: 'Trading Platforms',
        icon: 'monitoring',
        items: [
            { name: 'TradingView', description: 'Professional-grade charting platform. Free tier available. Used for all chart analysis in the curriculum.', url: 'https://www.tradingview.com' },
            { name: 'MetaTrader 4/5', description: 'Industry-standard trading platform. Required for prop firm challenges and live execution.', url: 'https://www.metatrader5.com' }
        ]
    },
    {
        title: 'Prop Firms',
        icon: 'account_balance',
        items: [
            { name: 'FTMO', description: 'Leading proprietary trading firm. Offers funded accounts up to $200K with profit splits.', url: 'https://www.ftmo.com' },
            { name: 'MyFundedFX', description: 'Reliable prop firm with competitive pricing and scaling programs for funded traders.', url: 'https://www.myfundedfx.com' }
        ]
    },
    {
        title: 'Journaling Tools',
        icon: 'edit_note',
        items: [
            { name: 'Notion', description: 'Flexible workspace for trade journaling, note-taking, and curriculum tracking. Templates provided.', url: 'https://www.notion.so' },
            { name: 'TradeZella', description: 'Dedicated trade journaling platform with analytics, performance tracking, and pattern recognition.', url: 'https://www.tradezella.com' }
        ]
    },
    {
        title: 'Economic Calendars',
        icon: 'event',
        items: [
            { name: 'Forex Factory', description: 'Essential economic calendar. Track high-impact news events that move the markets.', url: 'https://www.forexfactory.com' },
            { name: 'Investing.com', description: 'Comprehensive economic data, real-time quotes, and market analysis tools.', url: 'https://www.investing.com/economic-calendar/' }
        ]
    },
    {
        title: 'Recommended Reading',
        icon: 'auto_stories',
        items: [
            { name: 'Trading in the Zone — Mark Douglas', description: 'The definitive book on trading psychology. Required reading for all mentorship students.', url: '#' },
            { name: 'The Disciplined Trader — Mark Douglas', description: 'Foundational text on developing the mental edge needed for consistent profitability.', url: '#' },
            { name: 'Market Wizards — Jack Schwager', description: 'Interviews with the world\'s top traders. Insight into the mindset and methods that produce results.', url: '#' }
        ]
    },
    {
        title: 'Community',
        icon: 'groups',
        items: [
            { name: 'G.I.G. Discord Server', description: 'Private community for enrolled students. Daily setups, trade reviews, and accountability.', url: '#' },
            { name: 'Weekly Live Sessions', description: 'Join live market analysis and Q&A sessions every week. Replay available for 7 days.', url: '#' }
        ]
    }
];

const Resources = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10 max-w-3xl">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Toolkit</span>
                    <Heading level={1} className="mb-6">Resources</Heading>
                    <Text className="border-l-2 border-primary pl-6">
                        The tools, platforms, and reading material we recommend for our students. These are not affiliate links — they are genuine recommendations based on what works.
                    </Text>
                </Container>
            </Section>

            {/* Resource Categories */}
            <Section variant="surface">
                <Container>
                    <div className="space-y-16">
                        {resourceCategories.map((category, catIndex) => (
                            <div key={catIndex}>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-background-dark border border-border-dark flex items-center justify-center rounded-sm">
                                        <span className="material-icons text-primary text-sm">{category.icon}</span>
                                    </div>
                                    <Heading level={2} className="text-xl">{category.title}</Heading>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {category.items.map((item, itemIndex) => (
                                        <Card key={itemIndex} hover className="p-6 flex flex-col">
                                            <Heading level={3} className="text-base mb-2">{item.name}</Heading>
                                            <Text variant="small" className="flex-grow mb-4">{item.description}</Text>
                                            {item.url !== '#' ? (
                                                <Button href={item.url} variant="ghost" size="small" icon="open_in_new" className="self-start">
                                                    Visit
                                                </Button>
                                            ) : (
                                                <span className="font-mono text-xs text-gray-600 uppercase">Members Only</span>
                                            )}
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Disclaimer */}
            <Section className="!py-8 border-t border-border-dark">
                <Container className="max-w-3xl text-center">
                    <Text variant="small" className="text-gray-600">
                        These resources are provided for informational purposes only. We are not affiliated with any of the listed companies unless explicitly stated. Always conduct your own research before using any trading platform or service.
                    </Text>
                </Container>
            </Section>
        </>
    );
};

export default Resources;
