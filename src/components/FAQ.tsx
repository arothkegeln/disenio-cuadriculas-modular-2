import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';



export default function FAQ() {
    const { t } = useLanguage();
    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        { q: t('faq.items.q1.q'), a: t('faq.items.q1.a') },
        { q: t('faq.items.q2.q'), a: t('faq.items.q2.a') },
        { q: t('faq.items.q3.q'), a: t('faq.items.q3.a') },
        { q: t('faq.items.q4.q'), a: t('faq.items.q4.a') },
    ];

    return (
        <section className="py-24 px-4 md:px-6 bg-white/[0.02]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">{t('faq.title')}</h2>

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
