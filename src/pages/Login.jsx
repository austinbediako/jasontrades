import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login delay
        setTimeout(() => {
            navigate('/dashboard');
        }, 500);
    };

    return (
        <Section className="relative overflow-hidden pt-32 pb-20 min-h-screen flex items-center">
            <TechnicalGrid />
            <Container className="relative z-10 max-w-md mx-auto">
                <div className="text-center mb-10">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">
                        {isLogin ? 'Member Access' : 'Create Account'}
                    </span>
                    <Heading level={1} className="mb-3 text-3xl">
                        {isLogin ? 'Welcome Back' : 'Join The Covenant'}
                    </Heading>
                    <Text variant="small">
                        {isLogin
                            ? 'Access your curriculum, journal, and community dashboard.'
                            : 'Create your account to begin the mentorship experience.'
                        }
                    </Text>
                </div>

                <div className="bg-surface-dark border border-border-dark rounded-sm p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {!isLogin && (
                            <Input label="Full Name" placeholder="Jason Trades" required />
                        )}
                        <Input label="Email Address" type="email" placeholder="jason@example.com" required />
                        <Input label="Password" type="password" placeholder="••••••••" required />

                        {isLogin && (
                            <div className="flex justify-end">
                                <button type="button" className="font-mono text-xs text-gray-500 hover:text-primary transition-colors">
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <Button type="submit" variant="primary" className="w-full" icon={isLogin ? 'login' : 'person_add'}>
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-border-dark text-center">
                        <Text variant="small">
                            {isLogin ? "Don't have an account?" : 'Already a member?'}{' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-primary hover:underline font-semibold"
                            >
                                {isLogin ? 'Apply Here' : 'Sign In'}
                            </button>
                        </Text>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Text variant="small" className="text-gray-600">
                        By signing in, you agree to our{' '}
                        <a href="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
                        {' '}and{' '}
                        <a href="/protocol" className="text-gray-400 hover:text-primary transition-colors">Community Protocol</a>.
                    </Text>
                </div>
            </Container>
        </Section>
    );
};

export default Login;
