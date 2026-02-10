import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const Apply = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        experience: 'Beginner',
        capital: 'Under $1k',
        motivation: '',
        faith: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        setStep(prev => prev + 1);
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
        window.scrollTo(0, 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            navigate('/confirmation');
        }, 1500);
    };

    return (
        <Section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20">
            <TechnicalGrid />
            <Container className="relative z-10 max-w-2xl w-full">
                <div className="text-center mb-12">
                    <span className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-2 block">Step {step} of 3</span>
                    <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                        {step === 1 && "Personal Identification"}
                        {step === 2 && "Trading Profile"}
                        {step === 3 && "Alignment Check"}
                    </h1>
                    <div className="w-full h-1 bg-border-dark mt-6 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-500 ease-out"
                            style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-surface-dark border border-border-dark p-8 md:p-10 rounded-sm shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div className="space-y-6 animate-fadeIn">
                                <Input
                                    label="Full Name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="JOHN DOE"
                                    required
                                />
                                <Input
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="JOHN@EXAMPLE.COM"
                                    required
                                />
                                <Input
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-fadeIn">
                                <Select
                                    label="Years of Experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    options={[
                                        { value: 'Beginner', label: '0 - 1 Years' },
                                        { value: 'Intermediate', label: '1 - 3 Years' },
                                        { value: 'Advanced', label: '3+ Years' }
                                    ]}
                                />
                                <Select
                                    label="Current Capital Allocation"
                                    name="capital"
                                    value={formData.capital}
                                    onChange={handleChange}
                                    options={[
                                        { value: 'Under $1k', label: 'Under $1,000' },
                                        { value: '$1k - $10k', label: '$1,000 - $10,000' },
                                        { value: '$10k - $50k', label: '$10,000 - $50,000' },
                                        { value: '$50k+', label: '$50,000+' }
                                    ]}
                                />
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6 animate-fadeIn">
                                <div className="w-full">
                                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Why do you want to join?</label>
                                    <textarea
                                        name="motivation"
                                        value={formData.motivation}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-background-dark border border-border-dark text-white p-3 text-sm focus:outline-none focus:border-primary font-mono placeholder-gray-600 rounded-sm transition-colors resize-none"
                                        placeholder="Explain your goals..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-background-dark/50 border border-border-dark rounded-sm">
                                    <input type="checkbox" className="mt-1 bg-transparent border-gray-600 rounded-sm text-primary focus:ring-0 focus:ring-offset-0" required />
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        I understand that this mentorship is based on biblical principles and strict discipline. I agree to the <span className="text-primary">Covenant</span> outlined on the main page.
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="mt-10 flex justify-between gap-4">
                            {step > 1 ? (
                                <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
                            ) : (
                                <div></div> // Spacer
                            )}

                            {step < 3 ? (
                                <Button type="button" variant="primary" onClick={handleNext} icon="arrow_forward">Next Step</Button>
                            ) : (
                                <Button type="submit" variant="primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </Container>
        </Section>
    );
};

export default Apply;
