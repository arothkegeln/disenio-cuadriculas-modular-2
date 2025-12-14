import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    { q: "What is your typical check size?", a: "We typically invest between $500k to $2M in Seed rounds, with follow-on capital availability." },
    { q: "Do you only invest in Web3?", a: "Yes, our mandate is strictly focused on decentralized technologies, infrastructure, and gaming." },
    { q: "How long is the incubation program?", a: "The program runs for 12 weeks, but our support continues indefinitely through our portfolio network." },
    { q: "Can I apply without a pitch deck?", a: "We recommend having at least a pitch deck or a whitepaper. For incubation, ideas are welcome if the team is strong." },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-24 px-4 md:px-6 bg-white/[0.02]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Questions?</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
                            <button
                                onClick={() => setOpen(open === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-lg">{faq.q}</span>
                                {open === index ? <Minus size={20} className="text-neon-orange" /> : <Plus size={20} />}
                            </button>

                            <AnimatePresence>
                                {open === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-text-muted leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
