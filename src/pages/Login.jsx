import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { login, signup, loading, error, isAuthenticated } = useAuth();
    const { addToast } = useToast();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, location]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Permissive Login: Ensure at least email is provided if empty
        if (!formData.email) {
            addToast('Please enter an email address', 'error');
            return;
        }

        try {
            let success;
            if (isLogin) {
                // Pass whatever is in password, or a dummy if empty, since user wants "type anything"
                success = await login(formData.email, formData.password || 'placeholder');
            } else {
                success = await signup(formData.name || 'New Member', formData.email, formData.password || 'placeholder');
            }

            if (success) {
                addToast(isLogin ? 'Welcome back, Trader.' : 'Welcome to the Covenant.', 'success');
                // Navigation handled by useEffect
            } else {
                addToast(error || 'Authentication failed', 'error');
            }
        } catch (err) {
            addToast('An unexpected error occurred', 'error');
        }
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
                            <Input
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jason Trades"
                            />
                        )}
                        <Input
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jason@example.com"
                            required
                        />
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                        />

                        {isLogin && (
                            <div className="flex justify-end">
                                <button type="button" className="font-mono text-xs text-gray-500 hover:text-primary transition-colors">
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full"
                            icon={isLogin ? 'login' : 'person_add'}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
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
