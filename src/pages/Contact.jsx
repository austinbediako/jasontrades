import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const contactMethods = [
    { icon: 'mail', label: 'Email', value: 'support@godisglorified.com', href: 'mailto:support@godisglorified.com' },
    { icon: 'schedule', label: 'Response Time', value: 'Within 24 hours', href: null },
    { icon: 'public', label: 'Discord Community', value: 'Join the Server', href: '#' },
    { icon: 'campaign', label: 'Twitter / X', value: '@GodIsGlorified', href: '#' }
];

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10 max-w-3xl">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Reach Out</span>
                    <Heading level={1} className="mb-6">Contact Us</Heading>
                    <Text className="border-l-2 border-primary pl-6">
                        Have a question about the mentorship? Need support? We read every message and respond within 24 hours.
                    </Text>
                </Container>
            </Section>

            {/* Form + Sidebar */}
            <Section variant="surface">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-background-dark border border-border-dark rounded-sm p-8">
                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <Input label="First Name" placeholder="Jason" required />
                                            <Input label="Last Name" placeholder="Trades" required />
                                        </div>
                                        <Input label="Email Address" type="email" placeholder="jason@example.com" required />
                                        <div>
                                            <label className="block text-sm font-display font-semibold text-white mb-2">Subject</label>
                                            <select className="w-full bg-surface-dark border border-border-dark rounded-sm px-4 py-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                                                <option value="">Select a subject</option>
                                                <option value="mentorship">Mentorship Inquiry</option>
                                                <option value="support">Technical Support</option>
                                                <option value="billing">Billing Question</option>
                                                <option value="partnership">Partnership</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-display font-semibold text-white mb-2">Message</label>
                                            <textarea
                                                rows={6}
                                                required
                                                placeholder="Tell us how we can help..."
                                                className="w-full bg-surface-dark border border-border-dark rounded-sm px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                                            ></textarea>
                                        </div>
                                        <Button type="submit" variant="primary" icon="send" className="w-full sm:w-auto">
                                            Send Message
                                        </Button>
                                    </form>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <span className="material-icons text-primary text-2xl">check_circle</span>
                                        </div>
                                        <Heading level={3} className="mb-4">Message Sent</Heading>
                                        <Text className="mb-6">We will respond within 24 hours. Check your email for our reply.</Text>
                                        <Button onClick={() => setSubmitted(false)} variant="outline">Send Another</Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-2 space-y-4">
                            {contactMethods.map((method, index) => (
                                <div key={index} className="bg-background-dark border border-border-dark rounded-sm p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
                                    <div className="w-10 h-10 bg-surface-dark border border-border-dark flex items-center justify-center rounded-sm flex-shrink-0">
                                        <span className="material-icons text-primary text-sm">{method.icon}</span>
                                    </div>
                                    <div>
                                        <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block mb-1">{method.label}</span>
                                        {method.href ? (
                                            <a href={method.href} className="text-white text-sm font-display hover:text-primary transition-colors">
                                                {method.value}
                                            </a>
                                        ) : (
                                            <span className="text-white text-sm font-display">{method.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div className="bg-primary/5 border border-primary/20 rounded-sm p-6 mt-6">
                                <Text variant="small" className="text-gray-400">
                                    <strong className="text-white">Application inquiries:</strong> If you are asking about enrollment or the mentorship, we recommend starting with the{' '}
                                    <a href="/faq" className="text-primary hover:underline">FAQ</a> page first.
                                </Text>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Contact;
