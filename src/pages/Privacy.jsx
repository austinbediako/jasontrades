import React from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const sections = [
    {
        title: 'Information We Collect',
        content: [
            'When you apply for our mentorship or create an account, we collect personal information including your name, email address, and payment information. We also collect information about your trading experience level and goals as part of the application process.',
            'We automatically collect certain technical information when you visit our website, including IP address, browser type, device information, and pages visited. This information helps us improve our services and provide a better user experience.',
            'If you participate in our community forums or Discord server, we may collect information you voluntarily share in those communications.'
        ]
    },
    {
        title: 'How We Use Your Information',
        content: [
            'We use your personal information to process your mentorship application, manage your account, and deliver the curriculum and community access you have enrolled in.',
            'We may use your email address to send you important updates about the mentorship program, schedule changes, and community announcements. You can opt out of non-essential communications at any time.',
            'We use technical data to analyze website traffic, improve our platform, and ensure the security of our services. This data is aggregated and anonymized whenever possible.'
        ]
    },
    {
        title: 'Data Protection',
        content: [
            'We implement industry-standard security measures to protect your personal information, including 256-bit SSL encryption for all data transmission and secure storage with encrypted databases.',
            'Your payment information is processed through trusted third-party payment processors and is never stored on our servers. We comply with PCI DSS standards for payment data handling.',
            'Access to personal data is restricted to authorized personnel only, and all team members are bound by strict confidentiality agreements.'
        ]
    },
    {
        title: 'Third-Party Sharing',
        content: [
            'We do not sell, trade, or rent your personal information to third parties. We will never monetize your data.',
            'We may share limited information with trusted service providers who assist us in operating our platform, processing payments, or delivering communications. These providers are contractually bound to protect your data.',
            'We may disclose information if required by law, court order, or to protect the rights, property, or safety of our users and the public.'
        ]
    },
    {
        title: 'Cookies & Tracking',
        content: [
            'Our website uses essential cookies to maintain your session and preferences. We also use analytics cookies to understand how visitors interact with our site.',
            'You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of our website.',
            'We do not use third-party advertising trackers or sell data to advertising networks.'
        ]
    },
    {
        title: 'Your Rights',
        content: [
            'You have the right to access, correct, or delete your personal information at any time. Contact us at support@godisglorified.com to exercise these rights.',
            'You may request a copy of all personal data we hold about you. We will respond to such requests within 30 days.',
            'You have the right to withdraw consent for data processing at any time, though this may affect your ability to access certain features of our platform.'
        ]
    },
    {
        title: 'Data Retention',
        content: [
            'We retain your personal information for as long as your account is active or as needed to provide you services. If you request account deletion, we will remove your data within 90 days.',
            'We may retain certain information as required by law or for legitimate business purposes, such as fraud prevention and financial record-keeping.',
            'Anonymized and aggregated data may be retained indefinitely for analytics and service improvement purposes.'
        ]
    },
    {
        title: 'Changes To This Policy',
        content: [
            'We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through a prominent notice on our website.',
            'Your continued use of our services after such changes constitutes your acceptance of the updated policy.',
            'This policy was last updated on January 1, 2025.'
        ]
    }
];

const Privacy = () => {
    return (
        <>
            {/* Hero */}
            <Section className="relative overflow-hidden pt-32 pb-16">
                <TechnicalGrid />
                <Container className="relative z-10 max-w-3xl">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Legal</span>
                    <Heading level={1} className="mb-6">Privacy Policy</Heading>
                    <Text className="border-l-2 border-primary pl-6">
                        Your privacy matters. This document explains what data we collect, how we use it, and how we protect it. We believe in transparency and operate with the same integrity we demand in our trading.
                    </Text>
                    <div className="mt-6">
                        <span className="font-mono text-xs text-gray-600">Last Updated: January 1, 2025</span>
                    </div>
                </Container>
            </Section>

            {/* Policy Sections */}
            <Section variant="surface">
                <Container className="max-w-3xl">
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="bg-background-dark border border-border-dark rounded-sm p-8">
                                <div className="flex items-baseline gap-4 mb-6">
                                    <span className="font-mono text-primary text-xs tracking-widest">{String(index + 1).padStart(2, '0')}</span>
                                    <Heading level={3}>{section.title}</Heading>
                                </div>
                                <div className="space-y-4 pl-8 md:pl-12">
                                    {section.content.map((paragraph, pIndex) => (
                                        <Text key={pIndex} variant="small">{paragraph}</Text>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Contact */}
            <Section className="border-t border-border-dark">
                <Container className="max-w-3xl text-center">
                    <Heading level={3} className="mb-4">Questions About Your Privacy?</Heading>
                    <Text className="mb-6">
                        Contact our team at{' '}
                        <a href="mailto:support@godisglorified.com" className="text-primary hover:underline">
                            support@godisglorified.com
                        </a>
                    </Text>
                </Container>
            </Section>
        </>
    );
};

export default Privacy;
