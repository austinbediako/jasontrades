import React from 'react';

const StatusBanner = () => {
    const [prices, setPrices] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchPrices = async () => {
            try {
                // Fetching a broader list including PAXG (Gold backed crypto) as a proxy for Gold
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,cardano,dogecoin,polkadot,chainlink,pax-gold&vs_currencies=usd&include_24hr_change=true'
                );
                const data = await response.json();
                setPrices(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching prices:', error);
                setLoading(false);
            }
        };

        fetchPrices();
        const interval = setInterval(fetchPrices, 60000);
        return () => clearInterval(interval);
    }, []);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);
    };

    const formatChange = (change) => {
        const isPositive = change >= 0;
        return (
            <span className={isPositive ? "text-primary ml-1" : "text-red-400 ml-1"}>
                {isPositive ? '+' : ''}{change.toFixed(2)}%
            </span>
        );
    };

    // Helper to render a single ticker item
    const TickerItem = ({ symbol, data, name }) => {
        if (!data) return null;
        return (
            <div className="inline-flex items-center mx-6">
                <span className="font-bold text-white mr-1">{symbol}</span>
                <span className="text-gray-400">({name})</span>
                <span className="text-white ml-2">{formatPrice(data.usd)}</span>
                {formatChange(data.usd_24h_change)}
            </div>
        );
    };

    const tickerContent = prices ? (
        <>
            <TickerItem symbol="BTC" name="Bitcoin" data={prices.bitcoin} />
            <TickerItem symbol="ETH" name="Ethereum" data={prices.ethereum} />
            <TickerItem symbol="SOL" name="Solana" data={prices.solana} />
            <TickerItem symbol="PAXG" name="Gold/Paxos" data={prices['pax-gold']} />
            <TickerItem symbol="XRP" name="Ripple" data={prices.ripple} />
            <TickerItem symbol="ADA" name="Cardano" data={prices.cardano} />
            <TickerItem symbol="DOGE" name="Dogecoin" data={prices.dogecoin} />
            <TickerItem symbol="DOT" name="Polkadot" data={prices.polkadot} />
            <TickerItem symbol="LINK" name="Chainlink" data={prices.chainlink} />
        </>
    ) : (
        <>
            <div className="inline-flex items-center mx-6">Loading Market Data...</div>
        </>
    );

    return (
        <div className="bg-black border-b border-border-dark py-2 overflow-hidden whitespace-nowrap relative z-50">
            <style>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-ticker {
                    display: inline-block;
                    white-space: nowrap;
                    animation: ticker 30s linear infinite;
                }
                .animate-ticker:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <div className="flex items-center text-[10px] md:text-xs font-mono tracking-widest text-text-muted uppercase">
                {/* System Status - Fixed on the left? No, user wants everything to scroll except maybe status. 
                    Actually user said "let it show others too , so the ones on it will vanish and new ones will render" 
                    implying the whole thing moves. But usually System Status is separate.
                    Let's make the System Status fixed on left, and ticker on right?
                    User said "so the ones on it will vanish", referring to the assets.
                    I'll keep System Status static on the left (z-index top) and ticker scrolling behind/next to it.
                */}
                <div className="flex items-center gap-2 px-4 bg-black z-10 border-r border-border-dark relative">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="hidden md:inline">System Status:</span> Active
                </div>

                <div className="overflow-hidden flex-1 relative mask-linear-fade">
                    <div className="animate-ticker inline-block">
                        {/* Render twice for seamless loop */}
                        {tickerContent}
                        {tickerContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusBanner;
