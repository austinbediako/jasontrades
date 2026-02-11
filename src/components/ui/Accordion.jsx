import React, { useState } from 'react';

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
	return (
		<div className="border-b border-border-dark last:border-b-0">
			<button
				className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
				onClick={onToggle}
				aria-expanded={isOpen}
			>
				<span className="font-mono font-bold uppercase tracking-wide text-sm md:text-base text-white group-hover:text-primary transition-colors pr-4">
					{question}
				</span>
				<span className={`material-icons text-primary text-sm flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
					expand_more
				</span>
			</button>
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
					{answer}
				</div>
			</div>
		</div>
	);
};

const Accordion = ({ items, className = '' }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className={`bg-surface-dark border border-border-dark rounded-sm ${className}`}>
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					question={item.question}
					answer={item.answer}
					isOpen={openIndex === index}
					onToggle={() => handleToggle(index)}
				/>
			))}
		</div>
	);
};

export default Accordion;
