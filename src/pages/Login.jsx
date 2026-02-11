import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
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

        let success;
        if (isLogin) {
            success = await login(formData.email, formData.password);
        } else {
            success = await signup(formData.name, formData.email, formData.password);
        }

        if (success) {
            addToast(isLogin ? "Welcome back, trader." : "Welcome to the covenant.", 'success');
        } else {
            addToast(error || "Authentication failed.", 'error');
        }
    };

    return (
        <Section className="min-h-[70vh] flex items-center justify-center">
            <Container className="max-w-md w-full">
                <div className="bg-surface-dark border border-border-dark p-8 rounded-sm shadow-2xl">
                    <div className="text-center mb-8">
                        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Member Access</span>
                        <Heading level={2} className="font-bold">Login to Portal</Heading>
                    </div>

                    <div className="bg-surface-dark border border-border-dark rounded-sm p-8 relative">
                        {loading && (
                            <div className="absolute inset-0 bg-surface-dark/80 backdrop-blur-sm z-20 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {error && (
                                <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-xs font-mono rounded-sm text-center">
                                    {error}
                                </div>
                            )}

                            {!isLogin && (
                                <Input
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jason Trades"
                                    required
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
                                required
                            />

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
                                    onClick={() => {
                                        setIsLogin(!isLogin);
                                        setFormData({ name: '', email: '', password: '' });
                                    }}
                                    className="text-primary hover:underline font-semibold"
                                >
                                    {isLogin ? 'Apply Here' : 'Sign In'}
                                </button>
                            </Text>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Login;
