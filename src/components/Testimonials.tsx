import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';



export default function Testimonials() {
    const { t } = useLanguage();
    const [active, setActive] = useState(0);

    const testimonials = [
        {
            quote: t('testimonials.items.t1.quote'),
            author: t('testimonials.items.t1.author'),
            role: t('testimonials.items.t1.role')
        },
        {
            quote: t('testimonials.items.t2.quote'),
            author: t('testimonials.items.t2.author'),
            role: t('testimonials.items.t2.role')
        },
        {
            quote: t('testimonials.items.t3.quote'),
            author: t('testimonials.items.t3.author'),
            role: t('testimonials.items.t3.role')
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="py-32 px-4 md:px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-orange/5 rounded-full blur-[150px]" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="mb-12 flex justify-center">
                    <div className="p-4 rounded-full bg-white/5 border border-white/10 text-neon-orange">
                        <Quote size={32} />
                    </div>
                </div>

                <div className="h-[200px] relative">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <blockquote className="text-2xl md:text-4xl font-display font-medium leading-tight mb-8">
                                "{testimonials[active].quote}"
                            </blockquote>
                            <div className="flex flex-col items-center gap-2">
                                <cite className="not-italic font-bold text-lg text-text-primary">{testimonials[active].author}</cite>
                                <span className="text-text-muted text-sm uppercase tracking-wider">{testimonials[active].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`h-1 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-neon-orange' : 'w-2 bg-white/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
