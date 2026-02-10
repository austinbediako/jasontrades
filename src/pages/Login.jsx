import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await login(email, password);
            if (!result.success) {
                setError(result.error);
                setLoading(false);
            }
        } catch (err) {
            setError('Failed to login');
            setLoading(false);
        }
    };

    return (
        <Section className="min-h-[70vh] flex items-center justify-center">
            <Container className="max-w-md w-full">
                <div className="bg-surface-dark border border-border-dark p-8 rounded-sm shadow-2xl">
                    <div className="text-center mb-8">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Member Access</span>
                        <h2 className="font-display font-bold text-2xl text-white">Login to Portal</h2>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-3 rounded-sm mb-6 text-sm font-mono text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full justify-center"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                                    Authenticating...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500 font-mono">
                            Don't have an account? <a href="/apply" className="text-primary hover:underline">Apply Here</a>
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Login;
