import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import TechnicalGrid from '../components/ui/TechnicalGrid';

const Payment = () => {
    return (
        <Section className="min-h-screen py-24 bg-background-dark relative overflow-hidden flex items-center justify-center">
            <TechnicalGrid />
            <Container className="max-w-4xl relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Order Summary */}
                    <div className="lg:pr-12 lg:border-r border-border-dark">
                        <h2 className="text-2xl font-bold text-white mb-6 font-display">Order Summary</h2>
                        <div className="bg-surface-dark border border-border-dark p-6 rounded-sm mb-6">
                            <div className="flex justify-between items-center mb-4 border-b border-border-dark pb-4">
                                <span className="text-gray-400 font-mono text-sm">Monolith Mentorship</span>
                                <span className="text-white font-mono font-bold">$1,997.00</span>
                            </div>
                            <div className="flex justify-between items-center mb-4 border-b border-border-dark pb-4">
                                <span className="text-gray-400 font-mono text-sm">Application Fee (Waived)</span>
                                <span className="text-primary font-mono font-bold line-through">$150.00</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="text-white font-mono font-bold text-lg">Total</span>
                                <span className="text-primary font-mono font-bold text-2xl">$1,997.00</span>
                            </div>
                        </div>
                        <ul className="space-y-4 text-sm text-gray-400 list-disc pl-5 font-mono">
                            <li>Includes lifetime access to The Monolith curriculum.</li>
                            <li>Weekly live strategy sessions.</li>
                            <li>Access to the private Discord community.</li>
                            <li>Personalized feedback on your trading journal.</li>
                        </ul>
                    </div>

                    {/* Payment Form (Placeholder) */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 font-display">Secure Payment</h2>
                        <div className="bg-surface-dark border border-border-dark p-8 rounded-sm">
                            <div className="flex gap-4 mb-6">
                                <div className="w-1/2 border border-primary bg-primary/10 text-primary p-3 rounded-sm text-center font-mono text-sm cursor-pointer hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                                    <span className="material-icons text-sm">credit_card</span>
                                    Credit Card
                                </div>
                                <div className="w-1/2 border border-border-dark text-gray-400 p-3 rounded-sm text-center font-mono text-sm cursor-pointer hover:border-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                                    <span className="material-icons text-sm">currency_bitcoin</span>
                                    Crypto
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-gray-400 text-xs font-mono uppercase mb-2">Card Number</label>
                                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-background-dark border border-border-dark rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary font-mono" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-400 text-xs font-mono uppercase mb-2">Expiry Date</label>
                                        <input type="text" placeholder="MM/YY" className="w-full bg-background-dark border border-border-dark rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary font-mono" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-xs font-mono uppercase mb-2">CVC</label>
                                        <input type="text" placeholder="123" className="w-full bg-background-dark border border-border-dark rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary font-mono" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-xs font-mono uppercase mb-2">Cardholder Name</label>
                                    <input type="text" placeholder="JOHN DOE" className="w-full bg-background-dark border border-border-dark rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary font-mono" />
                                </div>
                            </div>

                            <Button className="w-full justify-center">
                                Complete Enrollment <span className="material-icons text-sm ml-2">lock</span>
                            </Button>

                            <p className="mt-4 text-center text-xs text-gray-500 font-mono flex items-center justify-center gap-1">
                                <span className="material-icons text-xs">lock</span> 256-bit SSL Encrypted Payment
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Payment;
