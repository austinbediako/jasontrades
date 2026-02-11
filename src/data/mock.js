/**
 * Mock Data Store
 * Simulates a backend database for the JasonTrades application.
 */

export const MOCK_USER = {
	id: 'user_123456',
	name: 'Jason Trades',
	email: 'jason@example.com',
	cohort: 'Alpha-06',
	avatar: null, // Could be a URL
	joinDate: '2023-09-15',
	status: 'active', // active, suspended, alumni
};

export const MOCK_PROGRESS = [
	{ module: '01', title: 'Foundation & Mindset', status: 'Completed', score: 100, id: 'mod_1' },
	{ module: '02', title: 'Market Structure', status: 'In Progress', score: 45, id: 'mod_2' },
	{ module: '03', title: 'Liquidity & Order Flow', status: 'Locked', score: null, id: 'mod_3' },
	{ module: '04', title: 'Entry Models', status: 'Locked', score: null, id: 'mod_4' },
];

export const MOCK_STATS = [
	{ label: 'Journal Entries', value: '12', trend: '+2', trendDirection: 'up' },
	{ label: 'Win Rate (Month)', value: '62%', trend: '-1%', trendDirection: 'down' },
	{ label: 'Risk Adherence', value: '98%', trend: 'Perfect', trendDirection: 'flat' },
];

export const MOCK_UPDATES = [
	{
		id: 'upd_1',
		type: 'announcement',
		title: 'Weekly Market Review',
		content: 'Detailed review of EURUSD price action posted in #analysis.',
		timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
	},
	{
		id: 'upd_2',
		type: 'event',
		title: 'Live Psychology Session',
		content: 'Live Psychology Session with Mentor: "Handling Drawdown".',
		timestamp: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // Tomorrow
	},
];

export const MOCK_ENTRIES = [
	{
		id: 'entry_1',
		date: '2023-04-14',
		pair: 'EUR/USD',
		direction: 'Long',
		result: 'Win',
		rr: '1:3',
		note: 'Clean break of structure on H1. Entry on retracement to OB.',
		emotional: 'Calm — followed process'
	},
	{
		id: 'entry_2',
		date: '2023-04-15',
		pair: 'GBP/JPY',
		direction: 'Short',
		result: 'Loss',
		rr: '1:2',
		note: 'Price spiked through SL. Lesson: always check the calendar.',
		emotional: 'Frustrated — broke #06'
	}
];

/**
 * Simulates network latency
 * @param {number} ms - Milliseconds to delay
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
	auth: {
		login: async (email, password) => {
			await delay(800);
			// Simulate simple validation
			if (email === 'jason@example.com' && password === 'password') {
				return {
					user: MOCK_USER,
					token: 'mock_token_jwt_placeholder'
				};
			}
			// Allow any login for dev/demo purposes if needed
			if (email) {
				return {
					user: { ...MOCK_USER, email },
					token: 'mock_token_jwt_placeholder'
				};
			}
			throw new Error('Invalid credentials');
		},
		signup: async (name, email, password) => {
			await delay(1000);
			if (!email || !password || !name) {
				throw new Error('All fields are required');
			}
			return {
				user: { ...MOCK_USER, name, email },
				token: 'mock_token_jwt_placeholder'
			};
		},
		logout: async () => {
			await delay(500);
			return true;
		},
		getSession: async () => {
			await delay(400);
			const token = localStorage.getItem('auth_token');
			if (token) {
				return MOCK_USER;
			}
			return null;
		}
	},
	dashboard: {
		getData: async () => {
			await delay(1200); // Simulate heavier load
			return {
				progress: MOCK_PROGRESS,
				stats: MOCK_STATS,
				updates: MOCK_UPDATES
			};
		}
	},
	journal: {
		getEntries: async () => {
			await delay(800);
			return [...MOCK_ENTRIES];
		},
		addEntry: async (entry) => {
			await delay(800);
			const newEntry = { ...entry, id: `entry_${Date.now()}` };
			MOCK_ENTRIES.unshift(newEntry); // In-memory update
			return newEntry;
		}
	}
};
